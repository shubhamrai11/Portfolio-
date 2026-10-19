# Shubham Rai — Portfolio

Plain HTML, CSS and JavaScript. No build step.

## Run it
Open `index.html` in a browser, or serve the folder (e.g. `npx serve .`) so routing and images behave like production.

## Files
- `index.html` — page shell: preloader, nav, transition overlay, cursor, fluid canvas
- `style.css` — design tokens and all layouts
- `main.js` — content (`CONFIG` at the top) and the motion engine
- `assets/shubham.jpg` — portrait

## Edit content
Everything lives in `CONFIG` at the top of `main.js`: name, contact details, summary, experience, skills, education and projects.

## Project images
Project images come from the live client sites (Chao, Say it with a Pin, FirstJob, Eureka Geeks on Facebook).
Each image loads in this order: local file in `assets/projects/` → the live-site URL → a labelled placeholder.

Save local copies once (recommended — the Facebook links expire after a few days):
double-click `download-images.bat`, or run
```
powershell -ExecutionPolicy Bypass -File .\download-images.ps1
```
Each project in `CONFIG` has `image` (card cover), `wide` (project page hero) and `gallery` (two images).
An empty path shows a placeholder with the recommended size. The source URLs live in `IMAGE_SOURCES` at the top of `main.js`.

## Libraries (CDN)
GSAP 3.13 (Draggable, InertiaPlugin, EasePack) and Lenis 1.1.13.

## Pages
`#home`, `#work`, `#about`, `#contact`, project pages `#p-<slug>`, and a 404 for anything else.
