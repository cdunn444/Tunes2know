/* ==========================================================================
 *  25 Tunes to Know on Bass — app logic
 *  Renders the numbered song list from songs.js. Plain browser JavaScript,
 *  no dependencies. (You normally only edit songs.js.)
 * ========================================================================== */

(function () {
  "use strict";

  // Small helper: create an element with an optional class and text.
  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  }

  function embedUrl(id) {
    return "https://open.spotify.com/embed/track/" + encodeURIComponent(id) + "?utm_source=generator";
  }

  // Where the "View tab" button points: a pinned URL if given, else a UG search.
  function tabUrl(song) {
    if (song.tab && song.tab.trim()) return song.tab.trim();
    var query = [song.artist, song.title].filter(Boolean).join(" ") + " bass";
    return "https://www.ultimate-guitar.com/search.php?search_type=title&value=" + encodeURIComponent(query);
  }

  function renderSong(song, index) {
    var li = el("li", "song");

    // 1 + 2 + 3: number, name, artist
    var head = el("div", "song-head");
    head.appendChild(el("span", "song-num", String(index + 1)));
    var titles = el("div", "song-titles");
    titles.appendChild(el("h2", "song-name", song.title || "Untitled"));
    if (song.artist) titles.appendChild(el("p", "song-artist", song.artist));
    head.appendChild(titles);
    li.appendChild(head);

    // 4: "What to know" label + analysis
    if (song.analysis) {
      li.appendChild(el("p", "wtk-label", "What to know"));
      li.appendChild(el("p", "song-analysis", song.analysis));
    }

    // 5: Spotify player (or a placeholder if no track id yet)
    if (song.id) {
      var iframe = document.createElement("iframe");
      iframe.className = "song-embed";
      iframe.src = embedUrl(song.id);
      iframe.loading = "lazy";
      iframe.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
      iframe.setAttribute("title", (song.title || "This song") + " — Spotify player");
      li.appendChild(iframe);
    } else {
      li.appendChild(el("div", "song-placeholder",
        "🎵 Spotify player appears here once this song's track link is added."));
    }

    // 6: link out to the tab on Ultimate Guitar
    var tab = el("a", "btn btn-tab", "View tab on Ultimate Guitar ↗");
    tab.href = tabUrl(song);
    tab.target = "_blank";
    tab.rel = "noopener";
    li.appendChild(tab);

    return li;
  }

  function render() {
    var songs = (typeof SONGS !== "undefined" && SONGS) || [];

    var list = document.getElementById("song-list");
    if (list) {
      list.innerHTML = "";
      songs.forEach(function (song, i) { list.appendChild(renderSong(song, i)); });
    }

    var playlist = document.getElementById("playlist-link");
    if (playlist) {
      if (typeof PLAYLIST_URL !== "undefined" && PLAYLIST_URL) playlist.href = PLAYLIST_URL;
      else playlist.style.display = "none";
    }
  }

  document.addEventListener("DOMContentLoaded", render);
})();
