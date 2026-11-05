---
slug: "deploy-cache-30"
title: "Deploy Drill: Is the cached copy fresh? #30"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"A CDN holds a response with `Cache-Control: no-store` that is **55s** old. What happens on the next request?","options":["Fresh: serve it from cache","It must revalidate with the server first","It must not be cached at all","Stale: revalidate (e.g. If-None-Match → 304)"],"answer":2},{"prompt":"A CDN holds a response with `Cache-Control: public, max-age=86400` that is **81584s** old. What happens on the next request?","options":["It must revalidate with the server first","Fresh: serve it from cache","It must not be cached at all","Stale: revalidate (e.g. If-None-Match → 304)"],"answer":1},{"prompt":"A CDN holds a response with `Cache-Control: public, max-age=300` that is **198s** old. What happens on the next request?","options":["Fresh: serve it from cache","It must revalidate with the server first","It must not be cached at all","Stale: revalidate (e.g. If-None-Match → 304)"],"answer":0},{"prompt":"A browser holds a response with `Cache-Control: public, max-age=3600, s-maxage=600` that is **4305s** old. What happens on the next request?","options":["It must not be cached at all","Stale: revalidate (e.g. If-None-Match → 304)","It must revalidate with the server first","Fresh: serve it from cache"],"answer":1},{"prompt":"A browser holds a response with `Cache-Control: public, max-age=3600, s-maxage=7200` that is **6103s** old. What happens on the next request?","options":["It must revalidate with the server first","Fresh: serve it from cache","It must not be cached at all","Stale: revalidate (e.g. If-None-Match → 304)"],"answer":3}]
---
# Deploy Drill: Is the cached copy fresh? #30

A response with `Cache-Control: max-age=N` is **fresh** for N seconds after it was generated (the `Age` header says how old a CDN copy already is). `no-cache` means "store it, but revalidate before every use", `no-store` means never store it, and `s-maxage` overrides `max-age` for shared caches (CDNs) only.
