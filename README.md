# Jason Hsu — Portfolio

A responsive React portfolio with experience, selected projects, education, and technical skills.

Live site: https://jasonhsu93.github.io/personal-portfolio

## Local development

```sh
npm ci
npm start
```

Open http://localhost:3000. Run `npm run build` for a production build, or `npm test -- --watchAll=false` for the tests. The production asset paths support GitHub Pages at `/personal-portfolio/`.

## Content and design

- `src/data/resume.js`: experience and skills aligned with the September 2026 resume.
- `src/App.js`: introduction, education, and the photo from `src/assets/img/New Profile Picture.JPG`.
- `src/components/Projects.js`: original project summaries, plus the Peezs channel.
- `src/App.css`: responsive layouts, locally hosted Centra fonts, and reduced-motion styles.
- `public/favicon.svg`: JH monogram, also supplied as an ICO and 192/512px PNG app icons.

The contact links open an email client; the portfolio does not require the legacy `server.js` mail server.
