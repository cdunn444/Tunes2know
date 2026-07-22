/* ==========================================================================
 *  Tunes to Know — app logic
 *  Renders the songs from songs.js into the three tabs and handles tab
 *  switching. No dependencies — plain browser JavaScript.
 *  (You normally won't need to edit this file — songs live in songs.js.)
 * ========================================================================== */

(function () {
  "use strict";

  var TABS = ["know", "bass", "guitar"];

  // Build the Spotify embed URL for a given track id.
  function embedUrl(id) {
    return "https://open.spotify.com/embed/track/" + encodeURIComponent(id) + "?utm_source=generator";
  }

  // Create the DOM for a single song card.
  function renderSong(song) {
    var card = document.createElement("article");
    card.className = "song";

    // Optional label (title — artist) so the list is easy to scan.
    var label = [song.title, song.artist].filter(Boolean).join(" — ");
    if (label) {
      var meta = document.createElement("span");
      meta.className = "song-meta";
      meta.textContent = label;
      card.appendChild(meta);
    }

    if (song.note) {
      var note = document.createElement("p");
      note.className = "song-note";
      note.textContent = song.note;
      card.appendChild(note);
    }

    if (song.id) {
      var iframe = document.createElement("iframe");
      iframe.className = "song-embed";
      iframe.src = embedUrl(song.id);
      iframe.loading = "lazy";
      iframe.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
      iframe.setAttribute("title", label || "Spotify player");
      card.appendChild(iframe);
    } else {
      var placeholder = document.createElement("div");
      placeholder.className = "song-placeholder";
      placeholder.textContent = "🎵 A Spotify player will appear here once a track link is added.";
      card.appendChild(placeholder);
    }

    return card;
  }

  // Fill every panel with its songs.
  function renderAll() {
    var data = (typeof SONGS !== "undefined" && SONGS) || {};
    TABS.forEach(function (key) {
      var panel = document.getElementById("panel-" + key);
      if (!panel) return;
      var list = data[key] || [];
      panel.innerHTML = "";
      if (!list.length) {
        var empty = document.createElement("p");
        empty.className = "empty";
        empty.textContent = "No songs here yet — check back soon.";
        panel.appendChild(empty);
        return;
      }
      list.forEach(function (song) {
        panel.appendChild(renderSong(song));
      });
    });
  }

  // Show one tab, hide the others; optionally update the URL hash.
  function selectTab(key, updateHash) {
    if (TABS.indexOf(key) === -1) key = "know";
    TABS.forEach(function (k) {
      var btn = document.getElementById("tab-" + k);
      var panel = document.getElementById("panel-" + k);
      var isActive = k === key;
      if (btn) btn.setAttribute("aria-selected", isActive ? "true" : "false");
      if (panel) panel.hidden = !isActive;
    });
    if (updateHash) {
      if (window.history && history.replaceState) history.replaceState(null, "", "#" + key);
      else location.hash = key;
    }
  }

  function currentTabFromHash() {
    var key = (location.hash || "").replace("#", "");
    return TABS.indexOf(key) !== -1 ? key : "know";
  }

  // Wire up clicks + left/right arrow keys on the tab bar.
  function initTabs() {
    TABS.forEach(function (key) {
      var btn = document.getElementById("tab-" + key);
      if (!btn) return;
      btn.addEventListener("click", function () {
        selectTab(key, true);
      });
      btn.addEventListener("keydown", function (e) {
        var i = TABS.indexOf(key);
        var next = null;
        if (e.key === "ArrowRight") next = TABS[(i + 1) % TABS.length];
        else if (e.key === "ArrowLeft") next = TABS[(i - 1 + TABS.length) % TABS.length];
        if (next) {
          e.preventDefault();
          selectTab(next, true);
          var nextBtn = document.getElementById("tab-" + next);
          if (nextBtn) nextBtn.focus();
        }
      });
    });
    window.addEventListener("hashchange", function () {
      selectTab(currentTabFromHash(), false);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderAll();
    initTabs();
    selectTab(currentTabFromHash(), false);
  });
})();
