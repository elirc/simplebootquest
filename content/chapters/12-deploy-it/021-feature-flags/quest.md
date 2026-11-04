---
slug: "deploy-feature-flags"
title: "Feature Flags & Gradual Rollouts"
type: "code"
language: "ts"
xp: 25
hints: ["Reuse the FNV-1a loop, then take `(hash >>> 0) % 100`.", "Check deny before allow, so a denied user is never let in."]
resources: [{"title": "Martin Fowler: Feature toggles", "url": "https://martinfowler.com/articles/feature-toggles.html"}]
---
# Feature Flags & Gradual Rollouts

Deploying code and **releasing** a feature don't have to happen at the same time. Feature flags let you ship code switched off, then turn it on for staff, then 5% of users, then everyone. If something breaks, you switch it off without a redeploy.

Percentage rollouts must be **sticky**: the same user should get the same answer on every request. The trick is to hash `flagName + userId` into a bucket from 0–99:

```ts
bucket('new-checkout', 'user_42')  // always 37
enabled if bucket < rolloutPercent
```

Including the flag name in the hash means different flags don't always pick the same 5% of users.

## Your task

1. `bucket(flag, userId)`: FNV-1a 32-bit hash (as in Chapter 4) of `"<flag>:<userId>"`, modulo 100.
2. `isEnabled(flags, flagName, user)`, where `flags[flagName]` is `{ enabled: boolean, allow?: string[], deny?: string[], rollout?: number }`:
   - an unknown flag or `enabled: false` → false
   - the user id in `deny` → false; in `allow` → true
   - `rollout` (0–100) given → `bucket < rollout`
   - otherwise → true
