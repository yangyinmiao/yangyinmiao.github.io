# GitHub Pages Blog Template

A warm, content-first personal blog template for GitHub Pages.

## Preview

<img src="./assets/screenshots/template-en.png" alt="English homepage preview" width="100%">

<img src="./assets/screenshots/template-zh.png" alt="Chinese homepage preview" width="100%">

## Highlights

- Editorial-style homepage with a human tone
- English and Chinese UI toggle
- Light and dark theme toggle
- Blog, notes, and projects sections
- About page with editable profile data
- Responsive layout that works well on mobile and desktop
- No unsupported custom plugins required for GitHub Pages

## What is included

- `index.html` for the homepage
- `about.md`, `blog.md`, `notes.md`, `projects.md`
- `_posts/` for long-form articles
- `_notes/` for short updates, experiments, and snippets
- `_projects/` for project pages
- `_data/profile.yml` for your personal copy and links
- `assets/css/main.css` for the visual system
- `assets/js/theme.js` for theme and language switching

## Quick start

1. Fork or clone this repository.
2. Edit `_config.yml` with your site title and description.
3. Edit `_data/profile.yml` with your name, intro, current focus, and links.
4. Replace the sample content in `_posts`, `_notes`, `_projects`, and `about.md`.
5. Update the navigation or homepage modules if you want different sections.
6. Deploy to GitHub Pages from repository settings.

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. Open `Settings` > `Pages`.
3. Under `Build and deployment`, set `Source` to `Deploy from a branch`.
4. Choose the branch you want to publish, usually `main`, and the `/ (root)` folder.
5. Save the settings and wait for GitHub to publish the site.
6. If you use a custom domain, add it in the same `Pages` settings panel.

If GitHub Pages does not build on the first try, check the Actions tab for the build log.

## Personalization

- Change colors and spacing in `assets/css/main.css`
- Adjust the logo, icons, and card styling to fit your brand
- Rewrite the homepage and About copy so it sounds like you
- Use `RedNote` and `My Wechat` cards, or replace them with your own socials
- Keep the `current` list short and specific
- Add or remove homepage sections inside `_layouts/home.html`

## Content structure

- `_posts/` for long-form articles
- `_notes/` for short notes and experiments
- `_projects/` for project pages
- `about.md` for your bio and links
- `archive.md` for a complete index of content

## Local preview

Install dependencies and run Jekyll locally:

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000`.

If your Ruby version is not compatible with the gem set, use a version manager such as `rbenv` or `asdf`.

## Notes

- RSS has been removed from the template on purpose.
- The language toggle is client-side and remembers the last choice in the browser.
- The theme toggle also remembers the last choice in the browser.

## 中文版

See [README.zh.md](./README.zh.md).
