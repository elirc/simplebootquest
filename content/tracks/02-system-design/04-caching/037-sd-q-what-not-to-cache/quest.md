---
slug: "sd-q-what-not-to-cache"
title: "What Not to Cache"
type: "quiz"
xp: 15
questions: [{"prompt": "Which header should a personalised API response carry so CDNs do not share it?", "options": ["Cache-Control: public, max-age=3600", "Cache-Control: private, no-store", "Vary: *"], "answer": 1}, {"prompt": "A user is removed from the admin role, but can still act as admin for 10 minutes. Why?", "options": ["A JWT or permission cache still holds the old role", "The database is slow", "React state"], "answer": 0}, {"prompt": "Why is caching 500 responses for a long time dangerous?", "options": ["It wastes memory", "A brief failure keeps being served long after the backend recovers", "It is illegal"], "answer": 1}, {"prompt": "A query takes 2 ms with an index and runs 5 times a minute. Should you cache it?", "options": ["Yes, always cache", "Probably not: the complexity and staleness are not worth it"], "answer": 1}, {"prompt": "What makes something a good caching candidate?", "options": ["It changes every second and is personal", "It is expensive to compute, read often, and fine to be slightly stale", "It is cheap and rarely used"], "answer": 1}]
---
# What Not to Cache

Caching is the easiest performance win, and an easy way to create **security bugs** and **confusing behaviour**.

Be careful with:
- **Personalised responses at shared caches.** If a CDN caches `/api/me` or a page with "Hi, Ada", the next visitor sees Ada's data. Mark these `Cache-Control: private, no-store`, or set `Vary` correctly.
- **Responses that depend on cookies or the `Authorization` header.** Most CDNs bypass the cache when these are present, but verify your configuration. Never key a shared cache on a URL alone for authenticated data.
- **Data that must be exact right now**: permissions after a role change, stock, prices at checkout.
- **Errors**: caching a 500 for an hour turns a blip into an outage. Cache error responses for seconds at most, if at all.
- **Things that are cheap anyway.** A cache adds complexity, staleness and another thing that can fail. A 2 ms indexed query doesn't need one.

Rule of thumb: measure first, cache what's **expensive, read often, and okay to be slightly stale**.
