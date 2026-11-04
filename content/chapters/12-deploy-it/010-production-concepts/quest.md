---
slug: deploy-production-concepts
title: Dev vs Production
type: quiz
xp: 15
questions:
  - prompt: "What does `vite build` produce?"
    options: ["A Node server", "Static HTML, JS and CSS files that any web server or CDN can host", "A Docker image"]
    answer: 1
  - prompt: "Your API needs a different DATABASE_URL in production. Where does it come from?"
    options: ["A production branch with the URL hard-coded", "Environment variables set in your hosting platform", "The frontend"]
    answer: 1
  - prompt: "When should database migrations run in production?"
    options: ["Never", "As part of each deploy, before the new code starts serving traffic (`prisma migrate deploy`)", "Manually from your laptop"]
    answer: 1
  - prompt: "What's a health check endpoint for?"
    options: ["Showing users a status page", "Letting the platform know whether an instance is alive and ready, so it can restart it or route traffic away", "Collecting analytics"]
    answer: 1
  - prompt: "Why should the server shut down gracefully on SIGTERM?"
    options: ["To finish in-flight requests and close DB connections before exiting during deploys", "To delete logs", "It's optional and has no effect"]
    answer: 0
  - prompt: "What should production logs look like?"
    options: ["console.log('here!!')", "Structured (JSON) lines with a level, message, and context like request id — and no secrets or passwords", "Nothing — logs slow the app down"]
    answer: 1
resources: [{"title": "The Twelve-Factor App", "url": "https://12factor.net/"}, {"title": "Render: Deploy a Node app", "url": "https://render.com/docs/deploy-node-express-app"}]
---
# Dev vs Production

| | Development | Production |
|-|-------------|------------|
| Frontend | Vite dev server with hot reload | `vite build` → static files on a CDN, or served by your API |
| Backend | `tsx watch` | Compiled/bundled JS run with `node` |
| Config | `.env` file | Environment variables in the hosting dashboard |
| Database | Docker on your laptop | Managed Postgres (Neon, Supabase, Railway, RDS...) |
| Errors | Stack traces in the terminal | Logged and monitored (Sentry), with generic messages to users |

### The Twelve-Factor App

A classic checklist for deployable apps. The most important factors:

- **Config in the environment:** the same build runs in staging and production, and only the env vars differ.
- **Stateless processes:** don't store sessions or uploads on the server's disk. Instances get replaced at any time.
- **Logs as event streams:** write to stdout and let the platform collect them.
- **Dev/prod parity:** use Postgres locally too, not SQLite.

### One deploy, two options

1. **Single service:** the Express server serves the API *and* the built React files. One URL, no CORS, cookies just work. (This app does this!)
2. **Separate services:** the frontend on a static host and the API elsewhere. This scales independently, but now you need CORS and cross-site cookie configuration.
