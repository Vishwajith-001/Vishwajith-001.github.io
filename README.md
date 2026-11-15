# Indunil Vishwajith — Mechatronics Engineering Portfolio

Personal portfolio website for **Indunil Vishwajith**, a mechatronics engineer from Kandy, Sri Lanka, focused on
industrial automation (PLC and pneumatics), embedded control systems and machine design.

Live site (planned): **https://indunil.me**

## Features

- Hero section with profile, engineering focus areas and key stats
- About, skills, experience and education sections, plus publication, certifications and leadership
- 12 engineering projects with category filters, an outcome summary on every card, and a detail popup with an image gallery
- Dark and light themes (the choice is remembered per browser)
- Responsive layout from phone to wide desktop
- Accessible: skip link, labelled form fields, keyboard-safe popup, visible focus styles and reduced-motion support
- SEO-ready: meta and Open Graph tags, a social share image, Person structured data, `robots.txt`, `sitemap.xml` and a 404 page
- Print stylesheet, so the page prints as a clean one-pager
- Contact form that opens the visitor's email app (no backend needed)

## Tech stack

Plain **HTML, CSS and JavaScript**: no framework and no build step.

- Fonts: Inter, Space Grotesk and JetBrains Mono (Google Fonts)
- Icons: Font Awesome 6 (cdnjs)
- Images: WebP, optimised with Pillow; a few project images come from [Unsplash](https://unsplash.com)

## Project structure

```
├── index.html          # Page content and layout
├── style.css           # Theme tokens, layout, components, responsive and print styles
├── script.js           # Project data, cards, filters, popup, navigation, theme, contact form
├── 404.html            # Not-found page
├── robots.txt
├── sitemap.xml
├── assets/             # Optimised images (WebP), favicons and the social share image
└── _source/images/     # Original full-size images (not used by the site)
```

## Run locally

Any static file server works. With Python:

```bash
python -m http.server 5500
```

Then open http://localhost:5500.

## Editing content

- **Projects:** edit the `projects` array at the top of `script.js`. Each entry has a title, categories, image, short
  text, outcome, description, features, tags and optional links. Set `featured: true` to show a project as the
  full-width flagship card.
- **Project images:** put the image in `assets/` (WebP preferred, about 1400 px wide at most) and set the project's
  `image` field to its path. Add a `gallery` array to show several images in the popup.
- **Everything else** (about, skills, experience, contact) is in `index.html`.
- **Colours and fonts** are CSS variables at the top of `style.css`. The `body.light` block holds the light theme.

## Branching and versioning

Every update is developed on its own numbered feature branch (`feature/NN-short-name`). Each branch is created
from the previous one, so the newest branch always holds the latest version of the site. `main` is not updated
during development. When the project is finished, the newest feature branch will be merged into `main`.

## Contact

- Email: indunil.n.vishwajith@gmail.com
- LinkedIn: [linkedin.com/in/vishwajith-w](https://www.linkedin.com/in/vishwajith-w/)

© 2026 Indunil Vishwajith. All rights reserved.
