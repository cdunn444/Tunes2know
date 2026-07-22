# 🎸 Tunes to Know

A tiny, no-frills web app that shares essential songs, split into three tabs:

- **To Know** — songs worth knowing
- **Learn on Bass** — songs worth learning on bass
- **Learn on Guitar** — songs worth learning on guitar

Each song shows a short note on *why* it's here, plus an embedded Spotify player.

It's a plain static site — just HTML, CSS, and a little JavaScript. No build step,
no frameworks, nothing to install. It works by opening `index.html`, and it's free
to host on GitHub Pages.

---

## Adding or editing songs

**You only ever edit one file: [`songs.js`](songs.js).**

Each song is a small block like this:

```js
{
  id: "3n3Ppam7vgaVa1iaRUc9Lp",   // the Spotify track ID (see below)
  title: "Mr. Brightside",        // optional — just helps you scan the list
  artist: "The Killers",          // optional
  note: "Why this song is here — one or two sentences.",
}
```

To **add** a song, copy one of those blocks, paste it into the right list
(`know`, `bass`, or `guitar`), and change the values. Keep the commas between
blocks.

### Where do I get the `id`?

1. In Spotify, right-click a song → **Share** → **Copy Song Link**.
2. You'll get a link like
   `https://open.spotify.com/track/3n3Ppam7vgaVa1iaRUc9Lp?si=abc123`
3. The `id` is the part between `/track/` and the `?` —
   here that's `3n3Ppam7vgaVa1iaRUc9Lp`.

Leave `id` as `""` (empty) to show a friendly placeholder instead of a player.

---

## Previewing it on your computer

Just double-click `index.html` to open it in your browser. That's it.

(If the Spotify players ever look odd when opened this way, run a tiny local
server instead — in this folder run `python3 -m http.server` and visit
`http://localhost:8000`. Not required for GitHub Pages.)

---

## Putting it on the web (free, via GitHub Pages)

1. Make sure this repository is **public** (free GitHub Pages needs a public repo;
   private Pages requires a paid plan).
2. In the repo on GitHub, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Pick the branch these files live on and the **`/ (root)`** folder, then **Save**.
5. Wait a minute or two. Your site goes live at:

   ```
   https://<your-username>.github.io/Tunes-to-Know/
   ```

Every time you edit `songs.js` and push the change, the live site updates
automatically.

---

## Files

| File          | What it's for                                             |
| ------------- | --------------------------------------------------------- |
| `index.html`  | The page structure (header, tabs, footer).                |
| `styles.css`  | All the styling. Responsive, with automatic light/dark.   |
| `songs.js`    | **Your songs.** The only file you need to edit.           |
| `app.js`      | The logic that renders the songs and switches tabs.       |
| `.nojekyll`   | Tells GitHub Pages to serve the files as-is.              |
