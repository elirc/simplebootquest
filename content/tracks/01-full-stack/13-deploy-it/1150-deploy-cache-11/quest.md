---
slug: "deploy-cache-11"
title: "Deploy Drill: Is the cached copy fresh? #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"A CDN holds a response with `Cache-Control: public, max-age=60, s-maxage=30` that is **61s** old. What happens on the next request?","options":["Stale: revalidate (e.g. If-None-Match → 304)","It must not be cached at all","Fresh: serve it from cache","It must revalidate with the server first"],"answer":0},{"prompt":"A browser holds a response with `Cache-Control: no-store` that is **101299s** old. What happens on the next request?","options":["Fresh: serve it from cache","Stale: revalidate (e.g. If-None-Match → 304)","It must revalidate with the server first","It must not be cached at all"],"answer":3},{"prompt":"A browser holds a response with `Cache-Control: public, max-age=300, s-maxage=600` that is **447s** old. What happens on the next request?","options":["It must not be cached at all","Fresh: serve it from cache","It must revalidate with the server first","Stale: revalidate (e.g. If-None-Match → 304)"],"answer":3},{"prompt":"A CDN holds a response with `Cache-Control: no-store` that is **37s** old. What happens on the next request?","options":["It must not be cached at all","It must revalidate with the server first","Stale: revalidate (e.g. If-None-Match → 304)","Fresh: serve it from cache"],"answer":0},{"prompt":"A browser holds a response with `Cache-Control: public, max-age=86400` that is **43020s** old. What happens on the next request?","options":["Stale: revalidate (e.g. If-None-Match → 304)","It must revalidate with the server first","Fresh: serve it from cache","It must not be cached at all"],"answer":2}]
---
# Deploy Drill: Is the cached copy fresh? #11

A response with `Cache-Control: max-age=N` is **fresh** for N seconds after it was generated (the `Age` header says how old a CDN copy already is). `no-cache` means "store it, but revalidate before every use", `no-store` means never store it, and `s-maxage` overrides `max-age` for shared caches (CDNs) only.
