---
slug: "sd-q-sessions-at-scale"
title: "Sessions at Scale"
type: "quiz"
xp: 15
questions: [{"prompt": "What is the main drawback of sticky sessions?", "options": ["They are slow", "Losing an instance (crash or deploy) logs out its users, and load spreads unevenly", "They need JWTs"], "answer": 1}, {"prompt": "Which approach makes \"log out everywhere\" easiest?", "options": ["Long-lived JWTs", "Server-side sessions in a shared store: delete the user's rows", "Sticky sessions"], "answer": 1}, {"prompt": "Why is a Redis session lookup acceptable on every request?", "options": ["It is not", "It takes well under a millisecond on the same network, which is tiny next to typical request time", "Redis caches HTTP"], "answer": 1}, {"prompt": "Your SPA is on app.example.com and the API on api.example.com. Are they the same site for SameSite purposes?", "options": ["No", "Yes: they share the registrable domain example.com, so SameSite=Lax cookies are sent"], "answer": 1}, {"prompt": "With JWT access tokens, how do you limit the damage of a stolen token?", "options": ["Make it last a year", "Keep it short-lived (minutes) and rotate refresh tokens", "Put the password in it"], "answer": 1}]
---
# Sessions at Scale

Once there are several API instances, **where does the session live?**

1. **Sticky sessions**: the load balancer pins a user to one instance. It's easy, but uneven, and users lose their session when that instance dies or is deployed. Avoid it.
2. **A shared session store** (Redis or a `sessions` table): any instance can look up the session id from the cookie. Revocation is easy, at the cost of one fast lookup per request.
3. **Stateless tokens** (signed JWTs in a cookie): there's no lookup, but you can't revoke a token before it expires without adding state back (a denylist or a token version).

A pragmatic default for a CRUD app is **option 2 with Postgres or Redis**, or **option 3 with short expiry plus a refresh token**. Both work behind any load balancer.

Also: if the frontend and API share a site, keep the cookie `HttpOnly; Secure; SameSite=Lax`. If they're on different sites, you'll need `SameSite=None; Secure` plus CSRF protection.
