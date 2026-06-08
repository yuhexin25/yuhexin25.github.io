# Hexin Yu Personal Research Website

Academic-style student portfolio website built with Astro. The site highlights aviation analytics, transportation networks, data visualization projects, and research questions.

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the static site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```text
src/
  components/
    Footer.astro
    Layout.astro
    Navbar.astro
    ProjectCard.astro
  data/
    projects.ts
  pages/
    cv.astro
    index.astro
    projects.astro
    reading-notes/
      [id].astro
      index.astro
    research.astro
  content/
    reading-notes/
      week-1-airline-competition-sustainability.md
  styles/
    global.css
public/
  favicon.svg
  Hexin-Yu-CV.pdf
```

## GitHub Pages Deployment

This project is configured for static deployment with Astro.

1. Update `astro.config.mjs`:
   - Set `site` to `https://yuhexin25-oss.github.io`.
   - Set `base` to the repository name with surrounding slashes, `/hexinyu/`.
2. Push the repository to GitHub.
3. In GitHub, go to **Settings -> Pages** and select GitHub Actions as the deployment source.
4. Add a GitHub Actions workflow such as:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

## Customization Notes

- The CV download is served from `public/Hexin-Yu-CV.pdf`.
- Archived sample research notes live in `archived-content/observations/` and are not shown publicly.
- Update project links in `src/data/projects.ts`.
- Add future reading notes as Markdown files in `src/content/reading-notes/`; each file should include `title`, `description`, `date`, `dateRange`, and `sources` frontmatter.
