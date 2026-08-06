# 🎸 25 Tunes to Know on Bass

A tiny, dark, single-page web app: a numbered countdown of 25 essential basslines. Each
song shows its number, name, artist, a short **"What to know"** note, an embedded Spotify
player, and a button to **view the tab on Ultimate Guitar**.

It's a plain static site — HTML, CSS, and a little JavaScript. No build step, no
frameworks, nothing to install. It works by opening `index.html`, and it's free to host on
GitHub Pages.

---

## Adding or editing songs

**You only ever edit one file: [`songs.js`](songs.js).**

Each song is one block, in countdown order (the first one is #1):

```js
{
  id: "3n3Ppam7vgaVa1iaRUc9Lp",   // the Spotify track ID (see below)
  title: "Song name",
  artist: "Artist",
  analysis: "Why this bassline matters — a sentence or two.",
  tab: "",                        // optional — a specific Ultimate Guitar tab link
}
```

- To **reorder** the countdown, move the blocks up or down.
- Leave `id` as `""` to show a placeholder instead of a player.
- Leave `tab` as `""` and the "View tab" button automatically searches Ultimate Guitar
  for that song. Paste an exact UG tab URL to send it straight to your favorite version.

### Where do I get the `id`?

1. In Spotify, right-click a song → **Share** → **Copy Song Link**.
2. You get a link like `https://open.spotify.com/track/3n3Ppam7vgaVa1iaRUc9Lp?si=abc`
3. The `id` is the part between `/track/` and the `?` — here `3n3Ppam7vgaVa1iaRUc9Lp`.

The playlist button in the header points at `PLAYLIST_URL` (top of `songs.js`).

---

## Previewing it on your computer

Double-click `index.html` to open it in your browser. That's it.

---

## Putting it on the web (free, via GitHub Pages)

1. Make sure this repository is **public** (free GitHub Pages needs a public repo).
2. On GitHub, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Pick the branch these files live on and the **`/ (root)`** folder, then **Save**.
5. Wait a minute or two. Your site goes live at
   `https://<your-username>.github.io/Tunes-to-Know/`.

Edit `songs.js`, push, and the live site updates automatically.

---

## Files

| File          | What it's for                                                  |
| ------------- | -------------------------------------------------------------- |
| `index.html`  | Page structure (header, list, footer).                         |
| `styles.css`  | The dark, Spotify-inspired styling with the orange accent.     |
| `songs.js`    | **Your songs.** The only file you need to edit.                |
| `app.js`      | Renders the numbered song list.                                |
| `.nojekyll`   | Tells GitHub Pages to serve the files as-is.                   |

---

### A note on the tabs

Ultimate Guitar tabs can't be embedded directly (there's no official embed, they block
being shown inside other sites, and their content isn't ours to copy). So each song links
out to its tab instead, opening in a new tab.
