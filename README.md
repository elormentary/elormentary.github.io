# New Artist Site (placeholder name)

Static site for a session bassist / producer, built from the same system as
antarcticstudios.ca. All branding is placeholder text — fill in the real name,
photos, and tracks with the site editor:

```bash
node ../editor-newsite/server.js --open     # editor at http://localhost:4322
```

## Layout

- `index.html`, `faq.html` — **generated** from `_src/` (never edit by hand)
- `_src/content.json` — all page text, reviews, contact info, SEO
- `_src/templates/` — page structure with `{{placeholders}}`
- `tracks.js` — the two players' data: `hierarchy` (filter categories),
  `bassTracks` (genre tags only), `productionTracks` (credit + genre tags)
- `script.js` — dual-player logic (filters, playback, mobile playlist)
- `style.css` — all colours live in the `:root` variable block at the top
- `img/`, `audio/` — media (currently placeholder SVGs and demo tones)

## Going live

1. Create a GitHub repo named `<username>.github.io` and add it as remote:
   `git remote add origin git@github.com:<username>/<username>.github.io`
2. Push (`git push -u origin master`) — GitHub Pages serves it automatically.
3. For a custom domain: add a `CNAME` file with the domain, then update
   `site.siteUrl` in the editor's SEO section and add a `sitemap.xml`.
