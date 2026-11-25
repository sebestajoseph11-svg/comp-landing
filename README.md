# Feltworks — company landing

Frontend landing site for **Feltworks**: a software + game studio that deploys play-money games as a service.

## Stack

- Vite + React
- Tailwind CSS, with a stylesheet beside each component and page
- No backend (contact form is a local placeholder)

## Layout

- `src/components/ui` — reusable pieces (Button, Modal, TextField) and their CSS
- `src/components/layout` — header and footer shared by every page
- `src/pages` — one folder per page. Home sections live in `src/pages/home/sections`
- `src/hooks`, `src/styles`, `src/brand.js`

## Rename the brand

Edit `src/brand.js` — name, legal name, tagline, email, and domain live in one place.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```
