# Personlized Content Dashboard Content:
This is the Frontend Only Dashboard with a mock datta  static of news, movie recommedations socila posts on the entrie to single feed.

## Stack
- Next.js
- TypeScript
- Redux
- dnd-kit
- Framer Motion
- Tailwind Css
- Vitest
- Playwright
Server Send Events
- NexAuth
- Prisma 
- react-i18next for Multi Language

## Data
The Data is Static with alll the Content: (news, movie, social posts)
All the mock data are the postdd from a tmdb for the image
All the Everything else the placeholder
User accounts and profielre are sotre don the database

## Run:
```bash
pnpm install
pnpm dev
```

## Features
-  feed with news, movie recommendations, and social posts
- Category preferences (technology, sports, finance, entertainment, social)
  across reloads
- Drag-and-drop reordering 
- Debounced search
- Infinite scroll 
- Trending section
- Favorites section
- Theme Toggle Dark/Light
- Simulated breaking item every quarter minute
- Languager Switcher with persisted.
- Signup Signin With a Real Account.


## Env:
DATABASE_URL:Our Postgres db
AUTH_SECRET: random openssl string

**The WebSocker/SEE, real time update Need to Add**