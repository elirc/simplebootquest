---
slug: "auth-p-refresh-rotation"
title: "Practice: Refresh Token Rotation"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
resources: [{"title": "Auth0: Refresh token rotation", "url": "https://auth0.com/docs/secure/tokens/refresh-tokens/refresh-token-rotation"}]
---
# Practice: Refresh Token Rotation

Short-lived access tokens (≈15 min) plus long-lived **refresh tokens** is a common setup. To limit the damage of a stolen refresh token, **rotate** it: every use returns a new refresh token and invalidates the old one.

**Reuse detection** is the clever part. If an *old* (already used) refresh token shows up again, someone copied it. You can't tell whether the attacker or the user is presenting it, so you **revoke the whole family** (every token descended from the same login).

## Your task
Write `createRefreshStore({ newToken })` returning:
- `issue(userId)`: starts a new family and returns a token.
- `rotate(token)`:
  - Current token → returns `{ ok: true, userId, token: <new token> }`, and the old one becomes "used".
  - A used token from a family → **revoke the family** and return `{ ok: false, reason: 'reuse detected' }`. The family's current token stops working too.
  - Unknown or revoked → `{ ok: false, reason: 'invalid' }`.
