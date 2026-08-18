# Personlized Content Dashboard Content:
This is the Frontend Only Dashboard with a mock data static of news content, movie recommendations social posts on the Entire Single Feed With other Extensive Features.

## Stack
- Next.js
- TypeScript
- Redux
- dnd-kit
- Framer Motion
- Tailwind Css
- Vitest
- Playwright
- Server Send Events
- NextAuth
- Prisma 
- react-i18next for Multi Language

## Data
The Data is Static with all the Content: (news, movie, social posts)
All the mock data are the Takend From the Online Resources.
All the Everything else the placeholder
The User Accounts And Profile Are Stored on the Postgres Db.

## Run:
```bash
pnpm install
pnpm dev
```

## Features
- feed with news, movie recommendations, and social posts
- Category preferences (technology, sports, finance, entertainment, social) across reloads
- Drag-and-drop reordering 
- Debounced search
- Infinite scroll 
- Trending section
- Favorites section
- Theme Toggle Dark/Light
- Simulated breaking item every quarter minute
- Languager Switcher with persisted.
- Signup Signin With a Real Account.
- Server Send Events Real Time Updates.

## Env:
DATABASE_URL:Our Postgres db
AUTH_SECRET: random openssl string
