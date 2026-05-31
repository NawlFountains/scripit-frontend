# ScriptIt Frontend

A React frontend for the ScriptIt API.

🔗 [Live](https://scripit.vercel.app)

## Stack
- React
- Typescript
- Vite
- Tailwind CSS
- React Router

## Run locally

```bash
npm install
npm run dev
```

## Environment variables

Create a `.env` file in the root:
VITE_API_URL=http://localhost:8000

For production set `VITE_API_URL` to your deployed API URL in Vercel's environment variables settings.

## Pages

- `/` — Home, list of available scripts
- `/pdf_splitter` — Split a PDF by page range
- `/letterboxd_watchlist` — Get a Letterboxd watchlist
- `/letterboxd_intersect` — Intersect two or more Letterboxd watchlists
