---
slug: "deploy-p-health-checks"
title: "Practice: Readiness Checks with Timeouts"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["Use `Promise.all` over checks that each catch their own errors, so one failure does not reject the whole thing.", "Race each check against a timer that rejects with `new Error(\"timeout\")`."]
---
# Practice: Readiness Checks with Timeouts

Load balancers and Kubernetes call a **readiness** endpoint to decide whether to send traffic to an instance. It should check the dependencies, but a hanging database check must not hang the endpoint itself. Every check needs a **timeout**.

Not all dependencies are equal: if the database is down, the app is down. If the email provider is down, the app is just **degraded**.

## Your task
Write `async runChecks(checks, { timeoutMs })`, where `checks` is `[{ name, critical, run }]` and `run` is an async function that resolves when healthy and rejects (or hangs) when not. Run all checks **in parallel** and resolve:

```js
{ status: 'ok' | 'degraded' | 'down', checks: { [name]: { ok, error?, ms } } }
```

- A check that takes longer than `timeoutMs` fails with error `'timeout'`. Otherwise the error is the rejection's message.
- `ms` is the elapsed time (use `Date.now()`). The tests only check that it's a number.
- `status`: `'down'` if any critical check failed, else `'degraded'` if any non-critical check failed, else `'ok'`.
- Also write `httpStatus(result)`: 503 for down, 200 otherwise (a degraded instance can still serve traffic).
