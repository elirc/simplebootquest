---
slug: "node-p-graceful-shutdown"
title: "Practice: Graceful Shutdown"
type: "code"
language: "js"
xp: 15
hints: ["Track a \"settled\" version of each promise (`p.then(() => {}, () => {})`) so failures never break `drain`.", "Remove each entry from a `Set` when it settles, and have `drain` await everything still in the set."]
resources: [{"title": "Node.js: server.close()", "url": "https://nodejs.org/api/net.html#serverclosecallback"}]
---
# Practice: Graceful Shutdown

When you deploy, the platform sends your process `SIGTERM`. A **graceful** server stops accepting new requests, waits for in-flight requests to finish, then exits. Killing it mid-request loses writes and returns errors to users.

```js
process.on('SIGTERM', async () => {
  server.close();         // stop accepting connections
  await tracker.drain();  // let in-flight work finish
  await prisma.$disconnect();
  process.exit(0);
});
```

## Your task
Write `createTracker()` returning:
- `track(promise)`: records in-flight work and returns the same promise. After `drain()` has been called, it throws `Error('Shutting down')` instead.
- `active()`: how many tracked promises haven't settled yet (a rejection counts as settled).
- `drain()`: returns a promise that resolves once nothing is active (immediately if nothing is). It must never reject, even if tracked work fails.
