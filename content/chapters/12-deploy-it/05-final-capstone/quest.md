---
slug: deploy-final-capstone
title: "Final Quest: Ship Your Capstone"
type: project
xp: 250
boss: true
requirements:
  - "Your full-stack CRUD app (TypeScript + Express + PostgreSQL + React) is deployed and reachable at a public URL"
  - "Config is validated at startup; production secrets live only in the hosting platform's environment settings"
  - "`prisma migrate deploy` runs automatically as part of each deploy"
  - "A `/health` endpoint that checks the database, configured as the platform's health check"
  - "The server shuts down gracefully on SIGTERM (stops accepting connections, finishes requests, disconnects Prisma)"
  - "Production security: helmet, rate limiting on auth, Secure cookies, HTTPS only"
  - "Structured request logging (e.g. pino) with no passwords or tokens in the logs"
  - "CI runs your tests on every push; deploys happen only from the main branch"
  - "A README with: what it is, a screenshot, the live URL, the tech stack, an architecture diagram, how to run it locally, and what you'd build next"
---
# Final Quest: Ship Your Capstone

This is it. Everything you've learned (JavaScript, TypeScript, Node, Express, SQL, Prisma, auth, React, testing) comes together in one deployed, production-quality app that you can put on your CV.

## A simple, robust deployment

1. **Database:** create a managed Postgres instance (Neon, Supabase, Railway or Render all have free tiers) and copy its connection string.
2. **App:** deploy one Node service that serves the API *and* the built React app:

```ts
// After your API routes:
app.use(express.static(path.join(__dirname, '../../web/dist')));
app.get('/{*splat}', (req, res) => res.sendFile(path.join(__dirname, '../../web/dist/index.html'))); // SPA fallback
```

3. **Build & start commands** on your platform:

```bash
npm ci && npm run build && npx prisma migrate deploy   # build
node apps/api/dist/server.js                           # start
```

4. **Environment variables:** `DATABASE_URL`, `JWT_SECRET` (generate one with `openssl rand -hex 32`), `NODE_ENV=production`.

## Graceful shutdown

```ts
const server = app.listen(env.port);
process.on('SIGTERM', () => {
  server.close(async () => {
    await prisma.$disconnect();
    process.exit(0);
  });
});
```

## After you ship

- Share it! Post the link, and ask a friend to sign up and try to break it.
- Write a short blog post on what you'd do differently. Reflection is how juniors become seniors.
- Read this platform's own source code: it was built with exactly the stack and patterns you just learned. Start with `BUILDING.md`.

Submit the repository URL **and** the live URL. Congratulations, you're a full-stack developer. 🎓
