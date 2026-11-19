# Jason Hsu’s portfolio

A responsive React portfolio for [jasonhsu.ca](https://jasonhsu.ca). The home page pairs short project summaries with two interactive project demos. Open a project to read about the implementation, dates, and results.

## Local development

```sh
npm ci
npm start
```

Open http://localhost:3000. Run `npm test -- --watchAll=false` for the interface tests or `npm run build` for the production site. `npm run deploy` uses the existing GitHub Pages configuration and custom domain.

## Editing the portfolio

- `src/data/portfolio.js` contains selected work, project links, and contact details.
- `src/data/resume.js` contains the skill groups.
- `src/components/StudyViewer.js` switches between a simulated tree measurement and an automatic basketball scorekeeper. The demos run locally in the browser, using generated camera backdrops and sample geometry. The photo in the personal section is an original BasketBot project frame.
- `src/App.js` contains the introduction and personal background. `src/App.css` defines the responsive layout.
- `public/resume/Jason-Hsu-Resume.pdf` is the single-page public résumé linked from the site.
