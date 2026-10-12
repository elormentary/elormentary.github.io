// ============================================================================
//  PROGRESSIVE LOGO
//  The header always ships the lightweight still logo (SVG/PNG) so it appears
//  instantly, even on a slow connection. If an animated logo video is set
//  (data-logo-video on .logo), we buffer it in the background and only swap it
//  in once it can play through smoothly — then hide the still image.
//  The video download only starts after the page itself has finished loading
//  (so it never competes with content), and is skipped on data-saver.
//  Runs on every page (loaded with defer); no-ops when no video is set.
// ============================================================================
(function initProgressiveLogo() {
  const logo = document.querySelector(".logo[data-logo-video]");
  if (!logo) return;

  const src = (logo.getAttribute("data-logo-video") || "").trim();
  if (!src) return; // still logo only

  const img = logo.querySelector("img");

  const video = document.createElement("video");
  video.className = "logo-video";
  video.muted = true;            // required for autoplay
  video.loop = true;
  video.autoplay = true;
  video.playsInline = true;
  video.setAttribute("playsinline", ""); // iOS Safari attribute form
  video.setAttribute("aria-label", (img && img.alt) || "logo");
  video.preload = "auto";

  let swapped = false;
  function swap() {
    if (swapped) return;
    swapped = true;
    logo.appendChild(video);
    video.play().catch(function () {}); // ignore autoplay rejections
    if (img) img.style.display = "none";
  }

  // Swap once there's enough buffered to play through without stalling.
  video.addEventListener("canplaythrough", swap, { once: true });

  if (navigator.connection && navigator.connection.saveData) return; // still logo only
  function start() {
    video.src = src;
    video.load(); // kick off buffering
  }
  if (document.readyState === "complete") start();
  else window.addEventListener("load", start, { once: true });
})();
