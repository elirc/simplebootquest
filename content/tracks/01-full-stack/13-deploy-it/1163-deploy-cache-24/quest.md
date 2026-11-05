---
slug: "deploy-cache-24"
title: "Deploy Drill: Is the cached copy fresh? #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"A browser holds a response with `Cache-Control: no-cache` that is **6s** old. What happens on the next request?","options":["It must not be cached at all","Fresh: serve it from cache","It must revalidate with the server first","Stale: revalidate (e.g. If-None-Match → 304)"],"answer":2},{"prompt":"A browser holds a response with `Cache-Control: no-store` that is **2848s** old. What happens on the next request?","options":["Stale: revalidate (e.g. If-None-Match → 304)","It must revalidate with the server first","It must not be cached at all","Fresh: serve it from cache"],"answer":2},{"prompt":"A CDN holds a response with `Cache-Control: no-cache` that is **512s** old. What happens on the next request?","options":["It must not be cached at all","Fresh: serve it from cache","Stale: revalidate (e.g. If-None-Match → 304)","It must revalidate with the server first"],"answer":3},{"prompt":"A browser holds a response with `Cache-Control: no-store` that is **20s** old. What happens on the next request?","options":["It must not be cached at all","Stale: revalidate (e.g. If-None-Match → 304)","Fresh: serve it from cache","It must revalidate with the server first"],"answer":0},{"prompt":"A browser holds a response with `Cache-Control: public, max-age=86400` that is **161077s** old. What happens on the next request?","options":["It must revalidate with the server first","It must not be cached at all","Stale: revalidate (e.g. If-None-Match → 304)","Fresh: serve it from cache"],"answer":2}]
---
# Deploy Drill: Is the cached copy fresh? #24

A response with `Cache-Control: max-age=N` is **fresh** for N seconds after it was generated (the `Age` header says how old a CDN copy already is). `no-cache` means "store it, but revalidate before every use", `no-store` means never store it, and `s-maxage` overrides `max-age` for shared caches (CDNs) only.
