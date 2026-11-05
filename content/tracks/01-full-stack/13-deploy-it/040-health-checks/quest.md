---
slug: deploy-health-checks
title: Health Checks
type: code
language: ts
xp: 25
hints: ["`Promise.allSettled` plus a timeout wrapper around each check."]
resources: [{"title": "Kubernetes: Liveness and readiness probes", "url": "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/"}]
---
# Health Checks

Hosting platforms (Render, Fly.io, Railway, Kubernetes) repeatedly call an endpoint like `GET /health` to decide whether your instance is healthy:

- **`200`** → keep sending it traffic.
- **`503 Service Unavailable`** → stop routing traffic to it, and restart it if this keeps happening.

A useful health check verifies its **dependencies** too:

```ts
app.get('/health', async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ status: 'ok' });
  } catch {
    res.status(503).json({ status: 'error', checks: { database: 'down' } });
  }
});
```

Each check needs a **timeout**. A hung database connection shouldn't make the health check hang too.

## Your task

Implement `createHealthHandler(checks, { timeoutMs, now })`. `checks` is an object of named async functions (e.g. `{ database: () => prisma.$queryRaw... }`).

It returns an Express-style `async (req, res)` handler that:

- runs every check **in parallel**,
- treats a check as failed if it throws or takes longer than `timeoutMs`,
- responds with `res.status(code).json(body)`, where:
  - `code` is `200` if every check passed, otherwise `503`
  - `body` is `{ status: 'ok' | 'error', checks: { [name]: 'up' | 'down' }, durationMs }`, and `durationMs` comes from the injected `now()` (end minus start).
