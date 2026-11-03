# Limulus promotional site

> **Active development:** Limulus is under active development, and breaking changes are still occurring.
> Features, APIs, and file formats may change between versions.
> **We welcome your feedback!** [Report a bug, suggest a feature, or share your experience](https://github.com/LimulusGraph/clients/issues).

A responsive, build-free static site for GitHub Pages. HTML, CSS, and vanilla JavaScript; no package installation or build step required.

## Preview

From this folder, run `python3 -m http.server 8000`, then visit `http://localhost:8000`. You can also open `index.html` directly.

## Publish on GitHub Pages

1. Push the **contents of this folder** to the repository you want to host.
2. In the repository's **Settings → Pages**, select **Deploy from a branch** and choose `main` and `/ (root)`.
3. GitHub will show the published URL in Pages settings once deployment finishes.

For a root user/organization site, the repository must be named `<owner>.github.io`. For the `LimulusGraph` organization, that is `LimulusGraph.github.io`. The requested local folder name `limulus.github.io` can remain unchanged. A repository named `limulus.github.io` under `LimulusGraph` can also be served as a project site at `https://limulusgraph.github.io/limulus.github.io/`. Relative asset URLs support either arrangement.

## Replace the media placeholders

Search `index.html` for `SCREENSHOT SLOT` and `VIDEO SLOT`. The page contains two screenshot slots and one video slot; they are intentionally labeled and are not presented as actual product captures.

- Put screenshots in `assets/`, preferably compressed WebP images. Replace the corresponding `.media-placeholder` element with `<img class="media-asset" src="assets/browser-workspace.webp" alt="Describe what the screenshot shows" loading="lazy" width="1600" height="900">`. Use a second filename for VS Code.
- Put a demo MP4 and poster image in `assets/`. Replace `.video-placeholder` with `<video class="media-asset" controls preload="metadata" poster="assets/demo-poster.webp"><source src="assets/demo.mp4" type="video/mp4"><track kind="captions" src="assets/demo.en.vtt" srclang="en" label="English" default></video>`. Add a WebVTT captions file for narrated demos. Update the “Demo coming soon” caption when the video is ready.
- For large demos, use an externally hosted video embed instead of committing large files. Give the iframe an accessible title and an aspect ratio.

## Customize

- Brand colors and typography are defined at the top of `styles.css`.
- The existing mascot is copied unchanged from `org-repo/profile/logo.jpg`.
- Fonts load from Google Fonts, with local system and Georgia fallbacks.
- The graph controls highlight illustrative paths; they do not execute Python.
- Download and documentation links point to `LimulusGraph/clients`. Product content follows the local clients README.
- Animations respect reduced-motion preferences. Sections remain readable without JavaScript; graph controls use native buttons and announce the selected path.

No deployment has been performed by creating these files.
