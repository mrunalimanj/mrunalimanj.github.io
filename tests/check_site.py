"""Check the built single page and its local navigation/assets with the stdlib."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = []
        self.urls = []
        self.h1_count = 0

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if "id" in attrs:
            self.ids.append(attrs["id"])
        self.h1_count += tag == "h1"
        for key in ("href", "src"):
            if key in attrs:
                self.urls.append(attrs[key])


root = Path(__file__).resolve().parents[1] / "public"
assert sorted(p.relative_to(root).as_posix() for p in root.rglob("*.html")) == ["index.html"], "Expected one HTML page"
html = (root / "index.html").read_text()
page = Page()
page.feed(html)
assert page.h1_count == 1
assert len(page.ids) == len(set(page.ids)), "Duplicate HTML IDs"
assert {"about", "news", "research", "publications"} <= set(page.ids)
assert "Mrunali Manjrekar" in html
for url in page.urls:
    parsed = urlsplit(url)
    if parsed.scheme or parsed.netloc:
        continue
    if parsed.fragment and not parsed.path:
        assert unquote(parsed.fragment) in page.ids, f"Broken anchor: {url}"
    if parsed.path and parsed.path != "/":
        assert (root / unquote(parsed.path).lstrip("/")).is_file(), f"Missing asset: {url}"
print("PASS: one page, identity, four sections, anchors, and local HTML assets")
