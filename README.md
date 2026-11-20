# Mrunali Manjrekar

A single-page academic website using [Hugo Apéro](https://github.com/hugo-apero/hugo-apero), its Forest palette, and Fraunces and Commissioner fonts.

## Local preview

Use **Hugo Extended 0.126.1**, the version pinned by Apéro's demo. The extended build is required for the theme's Sass.

```sh
git submodule update --init --recursive
hugo server --bind 127.0.0.1 --port 1313 --baseURL http://localhost:1313/
```

Open http://localhost:1313/. On this machine Hugo is installed at `~/.local/bin/hugo`; use that full path if it is not on your PATH.

The header's **pull-chain light icon** toggles dark mode. It follows your system preference on the first visit and remembers your selection in this browser.

## Content and styling

- Edit `content/_index.md` for the bio, news, research, and publications.
- Edit `hugo.toml` for site metadata and anchor navigation.
- `layouts/index.html` adapts the homepage into four sections on one page.
- `assets/custom.scss` uses Apéro's built-in customization hook. Theme source stays unchanged in the pinned Git submodule.
- The body uses Commissioner at 21px. Regular, italic, and bold webfonts are served locally from `static/fonts`, sourced from [Commissioner](https://github.com/kosbarts/Commissioner/tree/7fbf3f7d183e3b211a1a027ce8de44f41a87e8c1) with its included SIL Open Font License.

## Check

```sh
hugo --gc --minify
python3 tests/check_site.py
node tests/check_theme.cjs
```

No deployment workflow is configured; pushing the source does not deploy the built Hugo site.

## Theme attribution

Hugo Apéro by Alison Hill and contributors is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). It is based on Blogophonic by Formspree. The original theme and license are preserved in `themes/hugo-apero`; the footer retains attribution. Local modifications are the single-page layout and custom styles.
