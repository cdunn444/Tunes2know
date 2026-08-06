/* ==========================================================================
 *  25 Tunes to Know — app logic
 *  Renders both sides (bass / guitar) from songs.js and handles the
 *  Side A/B switcher. Plain browser JavaScript, no dependencies.
 *  (You normally only edit songs.js.)
 * ========================================================================== */

(function () {
  "use strict";

  var KEYS = ["bass", "guitar"];

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

  // Where "View tab" points: a pinned URL if given, else a UG search that
  // includes the instrument so bass and guitar songs find the right tabs.
  function tabUrl(song, instrument) {
    if (song.tab && song.tab.trim()) return song.tab.trim();
    var query = [song.artist, song.title].filter(Boolean).join(" ") + " " + instrument;
    return "https://www.ultimate-guitar.com/search.php?search_type=title&value=" + encodeURIComponent(query);
  }

  function renderSong(song, index, instrument) {
    var li = el("li", "song");

    var head = el("div", "song-head");
    head.appendChild(el("span", "song-num", String(index + 1)));
    var titles = el("div", "song-titles");
    titles.appendChild(el("h2", "song-name", song.title || "Untitled"));
    if (song.artist) titles.appendChild(el("p", "song-artist", song.artist));
    head.appendChild(titles);
    li.appendChild(head);

    if (song.analysis) {
      li.appendChild(el("p", "wtk-label", "What to know"));
      li.appendChild(el("p", "song-analysis", song.analysis));
    }

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

    var tab = el("a", "btn btn-tab", "View tab on Ultimate Guitar ↗");
    tab.href = tabUrl(song, instrument);
    tab.target = "_blank";
    tab.rel = "noopener";
    li.appendChild(tab);

    return li;
  }

  // Fill both panels once; hidden panels keep their lazy iframes unloaded
  // until shown, and loaded players survive switching back and forth.
  function renderAll() {
    var sections = (typeof SECTIONS !== "undefined" && SECTIONS) || {};
    KEYS.forEach(function (key) {
      var panel = document.getElementById("panel-" + key);
      var section = sections[key];
      if (!panel || !section) return;
      panel.innerHTML = "";
      var list = section.songs || [];
      if (!list.length) {
        panel.appendChild(el("p", "empty", "No songs here yet — check back soon."));
        return;
      }
      list.forEach(function (song, i) { panel.appendChild(renderSong(song, i, key)); });
    });
  }

  // Show one side: swap tabs, panels, headline, subhead, and playlist button.
  function selectSection(key, updateHash) {
    if (KEYS.indexOf(key) === -1) key = "bass";
    var section = (typeof SECTIONS !== "undefined" && SECTIONS[key]) || {};

    KEYS.forEach(function (k) {
      var btn = document.getElementById("tab-" + k);
      var panel = document.getElementById("panel-" + k);
      var isActive = k === key;
      if (btn) btn.setAttribute("aria-selected", isActive ? "true" : "false");
      if (panel) panel.hidden = !isActive;
    });

    var title = document.getElementById("site-title");
    if (title && section.title) {
      title.textContent = section.title;
      document.title = section.title;
    }
    var subhead = document.getElementById("site-subhead");
    if (subhead && section.subhead) subhead.textContent = section.subhead;

    var playlist = document.getElementById("playlist-link");
    if (playlist) {
      if (section.playlist) {
        playlist.href = section.playlist;
        playlist.style.display = "";
      } else {
        playlist.style.display = "none";
      }
    }

    if (updateHash) {
      if (window.history && history.replaceState) history.replaceState(null, "", "#" + key);
      else location.hash = key;
    }
  }

  function currentFromHash() {
    var key = (location.hash || "").replace("#", "");
    return KEYS.indexOf(key) !== -1 ? key : "bass";
  }

  function initTabs() {
    KEYS.forEach(function (key) {
      var btn = document.getElementById("tab-" + key);
      if (!btn) return;
      btn.addEventListener("click", function () { selectSection(key, true); });
      btn.addEventListener("keydown", function (e) {
        var i = KEYS.indexOf(key);
        var next = null;
        if (e.key === "ArrowRight") next = KEYS[(i + 1) % KEYS.length];
        else if (e.key === "ArrowLeft") next = KEYS[(i - 1 + KEYS.length) % KEYS.length];
        if (next) {
          e.preventDefault();
          selectSection(next, true);
          var nextBtn = document.getElementById("tab-" + next);
          if (nextBtn) nextBtn.focus();
        }
      });
    });
    window.addEventListener("hashchange", function () {
      selectSection(currentFromHash(), false);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderAll();
    initTabs();
    selectSection(currentFromHash(), false);
  });
})();
