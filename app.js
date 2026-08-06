/* ==========================================================================
 *  25 Tunes to Know — app logic
 *  Renders both sides (bass / guitar) from songs.js and handles the
 *  Side A/B switcher. Plain browser JavaScript, no dependencies.
 *  (You normally only edit songs.js.)
 * ========================================================================== */

(function () {
  "use strict";

  var KEYS = ["bass", "guitar", "artists"];

  // What the record's label wears per page: vinyl sides for the
  // instruments, a star for the artists.
  var LETTERS = { bass: "B", guitar: "A", artists: "★" };

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

  function artistEmbedUrl(id) {
    return "https://open.spotify.com/embed/artist/" + encodeURIComponent(id) + "?utm_source=generator";
  }

  // Where "View tab" points: a pinned URL if given, else a UG search that
  // includes the instrument so bass and guitar songs find the right tabs.
  function tabUrl(song, instrument) {
    if (song.tab && song.tab.trim()) return song.tab.trim();
    var query = [song.artist, song.title].filter(Boolean).join(" ") + " " + instrument;
    return "https://www.ultimate-guitar.com/search.php?search_type=title&value=" + encodeURIComponent(query);
  }

  function renderSong(song, index, key) {
    var isArtist = key === "artists"; // artist cards embed the artist page, no tab link
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
      iframe.className = "song-embed" + (isArtist ? " embed-artist" : "");
      iframe.src = isArtist ? artistEmbedUrl(song.id) : embedUrl(song.id);
      iframe.loading = "lazy";
      iframe.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
      iframe.setAttribute("title", (song.title || "This") + " — Spotify player");
      li.appendChild(iframe);
    } else {
      li.appendChild(el("div", "song-placeholder",
        "🎵 Spotify player appears here once this " + (isArtist ? "artist's" : "song's") + " link is added."));
    }

    if (!isArtist) {
      var tab = el("a", "btn btn-tab", "View tab on Ultimate Guitar ↗");
      tab.href = tabUrl(song, key);
      tab.target = "_blank";
      tab.rel = "noopener";
      li.appendChild(tab);
    }

    return li;
  }

  // Draw a small chord diagram (nut, 3 frets, 6 strings) as an inline SVG.
  // frets: low E → high e; -1 = don't play, 0 = open, 1+ = fret number.
  function chordDiagram(frets) {
    var NS = "http://www.w3.org/2000/svg";
    var W = 104, H = 122, LEFT = 12, GAP = 16;          // string geometry
    var NUT_Y = 16, TOP = 21, FRET_H = 24;              // fret geometry
    var svg = document.createElementNS(NS, "svg");
    svg.setAttribute("viewBox", "0 0 " + W + " " + H);
    svg.setAttribute("class", "chord-svg");
    svg.setAttribute("aria-hidden", "true");

    function shape(tag, attrs) {
      var node = document.createElementNS(NS, tag);
      for (var k in attrs) node.setAttribute(k, attrs[k]);
      svg.appendChild(node);
      return node;
    }

    // Nut (thick bar), fret lines, strings
    shape("rect", { x: LEFT - 1, y: NUT_Y, width: GAP * 5 + 2, height: 4, rx: 1, "class": "cd-nut" });
    for (var f = 1; f <= 4; f++) {
      shape("line", { x1: LEFT, y1: TOP + f * FRET_H, x2: LEFT + GAP * 5, y2: TOP + f * FRET_H, "class": "cd-line" });
    }
    for (var s = 0; s < 6; s++) {
      shape("line", { x1: LEFT + s * GAP, y1: NUT_Y, x2: LEFT + s * GAP, y2: TOP + 4 * FRET_H, "class": "cd-line" });
    }

    // Per-string markers: x (muted), o (open), or a dot on the fret
    frets.forEach(function (fret, i) {
      var x = LEFT + i * GAP;
      if (fret < 0) {
        var t = shape("text", { x: x, y: 11, "class": "cd-mark" });
        t.textContent = "×";
      } else if (fret === 0) {
        shape("circle", { cx: x, cy: 8, r: 3.4, "class": "cd-open" });
      } else {
        shape("circle", { cx: x, cy: TOP + (fret - 0.5) * FRET_H, r: 6.5, "class": "cd-dot" });
      }
    });

    return svg;
  }

  // Optional per-side intro card (e.g. the guitar chord primer).
  function renderIntro(intro) {
    var li = el("li", "song intro-card");
    if (intro.title) li.appendChild(el("h2", "intro-title", intro.title));
    if (intro.text) li.appendChild(el("p", "song-analysis", intro.text));
    if (intro.chords && intro.chords.length) {
      var grid = el("div", "chord-grid");
      intro.chords.forEach(function (chord) {
        if (chord && chord.frets) {
          var card = el("div", "chord-card");
          card.appendChild(el("span", "chord-name", chord.name));
          card.appendChild(chordDiagram(chord.frets));
          grid.appendChild(card);
        } else {
          // Fallback: a plain chip for entries without fingering data.
          grid.appendChild(el("span", "chord", chord.name || String(chord)));
        }
      });
      li.appendChild(grid);
    }
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
      if (section.intro) panel.appendChild(renderIntro(section.intro));
      var list = section.songs || [];
      if (!list.length) {
        panel.appendChild(el("p", "empty", "No songs here yet — check back soon."));
        return;
      }
      list.forEach(function (song, i) { panel.appendChild(renderSong(song, i, key)); });
    });
  }

  // Show one page: swap tabs, panels, headline, subhead, and playlist button.
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

    var headline = section.headline || "25 Tunes to Know";
    var title = document.getElementById("site-title");
    if (title) title.textContent = headline;
    document.title = headline;

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
      // A picked page starts from its top. The jump must be instant — a
      // smooth scroll would stream scroll events past the record menu's
      // close-on-scroll handler and shut it. ("instant" also overrides the
      // site's CSS smooth-scrolling; ancient browsers fall through.)
      try { window.scrollTo({ top: 0, left: 0, behavior: "instant" }); }
      catch (e) { window.scrollTo(0, 0); }
      if (window.history && history.replaceState) history.replaceState(null, "", "#" + key);
      else location.hash = key;
    }
  }

  function currentFromHash() {
    var key = (location.hash || "").replace("#", "");
    return KEYS.indexOf(key) !== -1 ? key : "bass";
  }

  /* --- The record menu ---------------------------------------------------
     The record sits top-left like the site's logo: tap it and the pages fan
     out to its right. Picking one swaps the content and re-letters the
     record's label; the menu stays open until the record is tapped again or
     the page is scrolled. It starts open on load so the options introduce
     themselves. */
  var recordCtl = null;

  function currentKey() {
    for (var i = 0; i < KEYS.length; i++) {
      var btn = document.getElementById("tab-" + KEYS[i]);
      if (btn && btn.getAttribute("aria-selected") === "true") return KEYS[i];
    }
    return "bass";
  }

  function initRecord() {
    var stage = document.getElementById("switch-stage");
    var record = document.getElementById("record-toggle");
    var letter = document.getElementById("record-letter");
    if (!stage || !record || !letter) return;

    function sync() {
      letter.textContent = LETTERS[currentKey()] || "B";
    }

    function setOpen(open) {
      stage.dataset.state = open ? "open" : "closed";
      record.setAttribute("aria-expanded", open ? "true" : "false");
    }
    function isOpen() { return stage.dataset.state === "open"; }

    sync();
    setOpen(true); // land with the menu introduced

    record.addEventListener("click", function () { setOpen(!isOpen()); });

    // Scrolling tucks the menu away, leaving just the floating record.
    window.addEventListener("scroll", function () {
      if (isOpen() && window.scrollY > 8) setOpen(false);
    }, { passive: true });

    recordCtl = { sync: sync };
  }

  function initTabs() {
    KEYS.forEach(function (key) {
      var btn = document.getElementById("tab-" + key);
      if (!btn) return;
      btn.addEventListener("click", function () {
        selectSection(key, true);
        if (recordCtl) recordCtl.sync();
      });
      btn.addEventListener("keydown", function (e) {
        var i = KEYS.indexOf(key);
        var next = null;
        if (e.key === "ArrowRight") next = KEYS[(i + 1) % KEYS.length];
        else if (e.key === "ArrowLeft") next = KEYS[(i - 1 + KEYS.length) % KEYS.length];
        if (next) {
          e.preventDefault();
          selectSection(next, true);
          if (recordCtl) recordCtl.sync();
          var nextBtn = document.getElementById("tab-" + next);
          if (nextBtn) nextBtn.focus();
        }
      });
    });
    window.addEventListener("hashchange", function () {
      selectSection(currentFromHash(), false);
      if (recordCtl) recordCtl.sync();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderAll();
    initTabs();
    selectSection(currentFromHash(), false);
    initRecord();
  });
})();
