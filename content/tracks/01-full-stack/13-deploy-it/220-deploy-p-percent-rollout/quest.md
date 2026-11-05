---
slug: "deploy-p-percent-rollout"
title: "Practice: Percentage Rollouts"
type: "code"
language: "js"
xp: 15
hints: ["Never use `Math.random()` for rollouts: a user would flip between variants on every request."]
---
# Practice: Percentage Rollouts

Shipping a risky feature to **5% of users first** (a canary) limits the blast radius. The assignment must be **sticky**: the same user always gets the same answer, or they see the feature flicker on and off between requests.

The standard trick is to hash `flagName + userId` into a bucket from 0 to 99 and enable the feature when `bucket < percent`. Including the flag name means each flag gets a *different* 5% of users.

## Your task
1. `fnv1a(str)`: 32-bit FNV-1a (start with `0x811c9dc5`; for each char code, `hash ^= code` and then `hash = Math.imul(hash, 0x01000193)`), returned as an unsigned integer (`>>> 0`).
2. `bucket(flag, userId)` → `fnv1a(`${flag}:${userId}`) % 100`.
3. `isEnabled(flag, userId, percent)`: percent ≤ 0 → false, ≥ 100 → true, otherwise `bucket < percent`.

Increasing the percentage only **adds** users. Nobody who had the feature loses it.
