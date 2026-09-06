# Portfolio - Noah CHARRIN-BOURRAT

Personal portfolio and showcase website for Noah CHARRIN-BOURRAT, a student in computer development at Ynov Toulouse. This project presents his background, skills, projects, and makes it easy to get in touch.

## About the project

This site is the second version of a modern portfolio, inspired by a creative and dynamic visual style, including:

- an immersive landing page
- an "About" section with academic and professional background
- a project section with descriptions and GitHub links
- a contact form
- light/dark theme support
- smooth navigation with interactive scrolling
- animations and an original design

## Tech stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- react-i18next for internationalization
- Lucide React for icons
- Docker + Nginx for deployment

## Features

- Custom, modern, responsive design
- Dedicated sections: home, about, projects, contact
- Light/dark mode management
- Multi-language support (French available, architecture ready for expansion)
- Project display with tags, status, and external links
- Contact form integrated with FormSubmit
- Production-ready build

## Project structure

```bash
portfolio/
├── src/
│   ├── component/
│   │   ├── sections/
│   │   ├── Background.tsx
│   │   ├── Overlay.tsx
│   │   ├── ThemeProvider.tsx
│   │   └── ...
│   ├── utils/
│   │   └── i18n/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── Dockerfile
├── docker-compose.yaml
├── nginx.conf
├── package.json
├── tsconfig.json
├── vite.config.ts
├── index.html
└── README.md
```

## Prerequisites

- Node.js 20+
- npm

## Installation

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Then open the URL shown by Vite in your browser.

## Production build

```bash
npm run build
```

## Code quality check

```bash
npm run lint
```

## Docker

The project is ready to run with Docker.

### Build the image

```bash
docker build -t portfolio .
```

### Run with Docker Compose

```bash
docker compose up --build
```

The site will be served at:

- http://localhost

## Deployment

The Dockerfile uses a Node image to build the application and Nginx to serve the generated static files.

## Contact

- Website: https://cbnoah.com
- CV: https://cv.cbnoah.com
- GitHub: https://github.cbnoah.com
- Email: contact@cbnoah.com
