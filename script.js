// ============================================================================
//  DUAL-PLAYER PORTFOLIO
//  Two independent player sections are driven by this file:
//    #bass        — genre filters only            (bassTracks)
//    #production  — credit + genre filters        (productionTracks)
//  Each section owns its own filter state, track grid, mobile playlist and
//  <audio> element. Starting playback in one section pauses the other.
// ============================================================================

function safeGtag() {
  if (typeof gtag === "function") gtag.apply(null, arguments);
}

function isLive(track) {
  if (track.ttl && new Date() < new Date(track.ttl)) return false;
  return true;
}

const allPlayers = [];

function createPlayer(cfg) {
  const root = document.getElementById(cfg.sectionId);
  if (!root || !Array.isArray(cfg.tracks)) return;

  const els = {
    creditRow: root.querySelector(".credit-buttons"),
    creditSub: root.querySelector(".sub-credit-buttons"),
    genreRow: root.querySelector(".genre-buttons"),
    genreSub: root.querySelector(".sub-genre-buttons"),
    clearWrap: root.querySelector(".clear-filters-wrapper"),
    clearBtn: root.querySelector(".clear-filters"),
    grid: root.querySelector(".track-grid"),
    mobile: root.querySelector(".mobile-track-list"),
    audio: root.querySelector("audio.player"),
  };
  const hasCredits = !!(cfg.hierarchy.creditsBroad && els.creditRow);
  const blurbEls = [...root.querySelectorAll(".section-blurb")];

  const state = {
    credit: { broad: null, sub: null },
    genre: { broad: null, sub: null },
  };
  let currentPlayingFile = null;
  let filteredTracks = [];

  // -------------------------------------------------------------- filtering

  function trackMatches(track, st) {
    const creditMatch = !hasCredits || (
      (!st.credit.broad || (track.creditsBroad || []).includes(st.credit.broad)) &&
      (!st.credit.sub || (track.credits || []).includes(st.credit.sub)));
    const genreMatch =
      (!st.genre.broad || (track.genresBroad || []).includes(st.genre.broad)) &&
      (!st.genre.sub || (track.genres || []).includes(st.genre.sub));
    return creditMatch && genreMatch && isLive(track);
  }

  function getFilteredTracks() {
    return cfg.tracks.filter(t => trackMatches(t, state));
  }

  // Each player only touches its own URL parameters (prefixed with its key),
  // so both sections can be deep-linked at once.
  function updateURLParams() {
    const params = new URLSearchParams(window.location.search);
    const set = (name, value) => value ? params.set(name, value) : params.delete(name);
    set(cfg.key + "_credit_broad", state.credit.broad);
    set(cfg.key + "_credit_sub", state.credit.sub);
    set(cfg.key + "_genre_broad", state.genre.broad);
    set(cfg.key + "_genre_sub", state.genre.sub);
    const query = params.toString();
    const hash = window.location.hash || "#" + cfg.sectionId;
    window.history.replaceState({}, "", window.location.pathname + (query ? "?" + query : "") + hash);
  }

  function loadFiltersFromURL() {
    const params = new URLSearchParams(window.location.search);
    state.credit.broad = params.get(cfg.key + "_credit_broad");
    state.credit.sub = params.get(cfg.key + "_credit_sub");
    state.genre.broad = params.get(cfg.key + "_genre_broad");
    state.genre.sub = params.get(cfg.key + "_genre_sub");
  }

  // -------------------------------------------------------- filter buttons

  function renderCategory(type) {
    const isCredit = type === "credit";
    if (isCredit && !hasCredits) return;
    const hierarchyRoot = isCredit ? cfg.hierarchy.creditsBroad : cfg.hierarchy.genresBroad;
    const broadContainer = isCredit ? els.creditRow : els.genreRow;
    const subContainer = isCredit ? els.creditSub : els.genreSub;
    const otherType = isCredit ? "genre" : "credit";
    if (!hierarchyRoot || !broadContainer) return;

    broadContainer.innerHTML = "";
    subContainer.innerHTML = "";

    Object.keys(hierarchyRoot).forEach(broad => {
      const hasMatches = cfg.tracks.some(track =>
        trackMatches(track, { ...state, [type]: { broad, sub: null } }));
      if (!hasMatches) return;

      const btn = document.createElement("button");
      btn.textContent = broad;
      btn.classList.toggle("active", state[type].broad === broad);
      btn.onclick = () => {
        state[type].broad = state[type].broad === broad ? null : broad;
        state[type].sub = null;
        safeGtag("event", "filter_tracks_" + type, { section: cfg.key, value: state[type].broad });
        updateURLParams();
        renderCategory(type);
        renderCategory(otherType);
        renderTracks();
      };
      broadContainer.appendChild(btn);
    });

    const activeBroad = state[type].broad;
    if (!activeBroad || !hierarchyRoot[activeBroad]) return;

    const subs = hierarchyRoot[activeBroad];
    if (subs.length <= 1) {
      state[type].sub = null;
      return;
    }

    subs.forEach(sub => {
      const hasMatches = cfg.tracks.some(track =>
        trackMatches(track, { ...state, [type]: { ...state[type], sub } }));
      if (!hasMatches) return;

      const btn = document.createElement("button");
      btn.textContent = sub;
      btn.classList.toggle("active", state[type].sub === sub);
      btn.onclick = () => {
        state[type].sub = state[type].sub === sub ? null : sub;
        safeGtag("event", "filter_tracks_" + type + "_sub", { section: cfg.key, value: state[type].sub });
        updateURLParams();
        renderCategory(type);
        renderCategory(otherType);
        renderTracks();
      };
      subContainer.appendChild(btn);
    });
  }

  function updateClearButton() {
    const anyActive = state.credit.broad || state.credit.sub || state.genre.broad || state.genre.sub;
    els.clearWrap.style.display = anyActive ? "block" : "none";
  }

  // Swap the section blurb to match the active credit filter, most specific
  // first: sub-credit ("Mixing"), then broad ("Production"), then the default
  // blurb (the one with no data-credit). Sections with a single blurb are
  // left alone.
  function updateBlurb() {
    if (blurbEls.length < 2) return;
    const candidates = [state.credit.sub, state.credit.broad, ""];
    let chosen = null;
    for (const c of candidates) {
      if (c === null || c === undefined) continue;
      chosen = blurbEls.find(el => (el.dataset.credit || "") === c);
      if (chosen) break;
    }
    blurbEls.forEach(el => { el.style.display = el === chosen ? "" : "none"; });
  }

  els.clearBtn.onclick = () => {
    state.credit.broad = state.credit.sub = null;
    state.genre.broad = state.genre.sub = null;
    updateURLParams();
    renderCategory("credit");
    renderCategory("genre");
    renderTracks();
  };

  // ---------------------------------------------------------- track render

  // The line under the title: credits for the production player,
  // genres for the bass player (which has no credits).
  function metaLine(track) {
    return hasCredits ? (track.credits || []).join(", ") : (track.genres || []).join(", ");
  }

  function renderTracks() {
    filteredTracks = getFilteredTracks();

    els.grid.innerHTML = "";
    filteredTracks.forEach(track => {
      const div = document.createElement("div");
      div.className = "track";
      div.dataset.file = track.file;
      div.innerHTML = `
        <div class="track-desktop">
          <img src="${track.artwork}" alt="${track.title}">
          <div class="track-details">
            <div class="track-title">${track.title}</div>
            <div class="track-credits">${metaLine(track)}</div>
            ${hasCredits ? `<div class="track-genres"><strong>Genres:</strong> ${(track.genres || []).join(", ")}</div>` : ""}
            ${track.disclaimer ? `<div class="track-disclaimer">${track.disclaimer}</div>` : ""}
          </div>
        </div>
      `;
      div.onclick = () => onTrackClick(track);
      if (track.file === currentPlayingFile) div.classList.add("playing");
      els.grid.appendChild(div);
    });

    els.mobile.innerHTML = "";
    filteredTracks.forEach(track => {
      const row = document.createElement("div");
      row.className = "mobile-track-row";
      row.dataset.file = track.file;
      row.innerHTML = `
        <img class="mobile-track-art" src="${track.artwork}" alt="${track.title}">
        <div class="mobile-track-text">
          <div class="mobile-track-title">${track.title}</div>
          <div class="mobile-track-artist">${metaLine(track)}</div>
          ${track.disclaimer ? `<div class="mobile-track-disclaimer">${track.disclaimer}</div>` : ""}
        </div>
        <div class="mobile-track-indicator"><i class="fas fa-play"></i></div>
      `;
      row.onclick = () => onTrackClick(track);
      if (track.file === currentPlayingFile) row.classList.add("playing");
      els.mobile.appendChild(row);
    });

    updateClearButton();
    updateBlurb();
  }

  // ---------------------------------------------------------------- audio

  function highlightPlaying() {
    root.querySelectorAll(".track, .mobile-track-row").forEach(el =>
      el.classList.toggle("playing", el.dataset.file === currentPlayingFile));
  }

  function onTrackClick(track) {
    if (els.audio.src.includes(track.file)) {
      els.audio.paused ? els.audio.play() : els.audio.pause();
    } else {
      playSpecificTrack(track);
    }
  }

  function playSpecificTrack(track) {
    els.audio.src = track.file;
    els.audio.play();
    currentPlayingFile = track.file;
    safeGtag("event", "play_track", {
      section: cfg.key,
      track_title: track.title,
      credits: (track.credits || []).join(", "),
      genres: (track.genres || []).join(", "),
    });
    highlightPlaying();
  }

  els.audio.addEventListener("play", () => {
    // one player at a time site-wide
    for (const other of allPlayers) {
      if (other.audio !== els.audio) other.audio.pause();
    }
    highlightPlaying();
  });

  els.audio.addEventListener("ended", () => {
    if (!filteredTracks.length) return;
    const index = filteredTracks.findIndex(t => t.file === currentPlayingFile);
    playSpecificTrack(filteredTracks[(index + 1) % filteredTracks.length]);
  });

  // ------------------------------------------------------------ scrolling

  (function enableDragScroll(container) {
    let isDown = false, startX = 0, scrollLeft = 0;
    container.addEventListener("mousedown", e => {
      isDown = true;
      startX = e.pageX;
      scrollLeft = container.scrollLeft;
    });
    container.addEventListener("mouseleave", () => isDown = false);
    container.addEventListener("mouseup", () => isDown = false);
    container.addEventListener("mousemove", e => {
      if (!isDown) return;
      e.preventDefault();
      container.scrollLeft = scrollLeft - (e.pageX - startX) * 1.5;
    });
  })(els.grid);

  root.querySelector(".scroll-btn.left").onclick = () =>
    els.grid.scrollBy({ left: -els.grid.clientWidth * 0.8, behavior: "smooth" });
  root.querySelector(".scroll-btn.right").onclick = () =>
    els.grid.scrollBy({ left: els.grid.clientWidth * 0.8, behavior: "smooth" });

  // -------------------------------------------------------------- initial

  loadFiltersFromURL();
  renderCategory("credit");
  renderCategory("genre");
  renderTracks();

  allPlayers.push({ audio: els.audio });
}

// ============================================================================
//  FEATURED VIDEO
//  The section hides itself until a YouTube video id is set in the editor.
// ============================================================================
(function initFeaturedVideo() {
  const sec = document.getElementById("featured-video");
  if (!sec) return;
  const id = (sec.dataset.videoId || "").trim();
  if (!id) { sec.style.display = "none"; return; }
  sec.querySelector("iframe").src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(id);
})();

// =============================================
// ROBUST FIX FOR INSTAGRAM/FACEBOOK BROKEN HASHES
// =============================================
(function () {
  const originalURL = window.location.href;
  let extractedHash = null;

  const encodedHashMatch = originalURL.match(/%23([A-Za-z0-9\-_]+)/);
  if (encodedHashMatch) {
    extractedHash = "#" + encodedHashMatch[1];
  }
  if (window.location.hash && window.location.hash !== "") {
    extractedHash = window.location.hash;
  }

  const url = new URL(window.location.href);
  const params = url.searchParams;
  ["fbclid", "brid", "gclid", "utm_source", "utm_medium", "utm_campaign"]
    .forEach(p => params.delete(p));

  let cleanURL = window.location.pathname;
  const remaining = params.toString();
  if (remaining) cleanURL += "?" + remaining;
  if (extractedHash) cleanURL += extractedHash;

  window.history.replaceState({}, "", cleanURL);

  if (extractedHash) {
    window.addEventListener("load", () => {
      const target = document.querySelector(extractedHash);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  }
})();

// INITIAL RENDER
if (typeof hierarchy !== "undefined") {
  createPlayer({
    key: "bass",
    sectionId: "bass",
    tracks: typeof bassTracks !== "undefined" ? bassTracks : [],
    hierarchy: hierarchy.bass || {},
  });
  createPlayer({
    key: "prod",
    sectionId: "production",
    tracks: typeof productionTracks !== "undefined" ? productionTracks : [],
    hierarchy: hierarchy.production || {},
  });
}
