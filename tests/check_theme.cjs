const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const script = fs.readFileSync(path.join(__dirname, '../assets/js/theme.js'), 'utf8');
function visit(saved, systemDark = false, blockedStorage = false) {
  const root = { dataset: {} };
  const button = { attributes: {}, setAttribute(key, value) { this.attributes[key] = value; }, addEventListener(event, callback) { this[event] = callback; } };
  let ready;
  const storage = {
    value: saved,
    getItem() { if (blockedStorage) throw Error('Storage blocked'); return this.value; },
    setItem(key, value) { if (blockedStorage) throw Error('Storage blocked'); this.value = value; },
  };
  vm.runInNewContext(script, {
    localStorage: storage,
    window: { matchMedia: () => ({ matches: systemDark }) },
    document: {
      documentElement: root,
      addEventListener: (event, callback) => { ready = callback; },
      createElement: () => button,
      querySelector: () => ({ append: node => assert.equal(node, button) }),
    },
  });
  assert.ok(root.dataset.theme, 'Theme must be applied before the header renders');
  ready();
  return { root, button, storage };
}

for (const [saved, systemDark, expected] of [[null, false, 'light'], [null, true, 'dark'], ['light', true, 'light'], ['dark', false, 'dark'], ['invalid', true, 'dark']]) {
  const { root, button } = visit(saved, systemDark);
  assert.equal(root.dataset.theme, expected);
  assert.equal(button.attributes['aria-pressed'], String(expected === 'dark'));
  assert.equal(button.attributes['aria-label'], 'Dark mode');
  assert.match(button.innerHTML, /<svg[^>]*aria-hidden="true"/);
}
const { root, button, storage } = visit(null);
button.click();
assert.equal(root.dataset.theme, 'dark');
assert.equal(button.attributes['aria-pressed'], 'true');
assert.equal(visit(storage.value).root.dataset.theme, 'dark', 'Choice survives a reload');
button.click();
assert.equal(root.dataset.theme, 'light');
assert.equal(button.attributes['aria-pressed'], 'false');
assert.equal(storage.value, 'light');
const blocked = visit(null, true, true);
blocked.button.click();
assert.equal(blocked.root.dataset.theme, 'light', 'Toggle works without storage');
console.log('PASS: system default, saved choice, both toggles, accessibility state, and blocked storage');
