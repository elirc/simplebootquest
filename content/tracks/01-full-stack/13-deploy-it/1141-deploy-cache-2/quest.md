---
slug: "deploy-cache-2"
title: "Deploy Drill: Is the cached copy fresh? #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"A browser holds a response with `Cache-Control: no-store` that is **469s** old. What happens on the next request?","options":["It must not be cached at all","It must revalidate with the server first","Fresh: serve it from cache","Stale: revalidate (e.g. If-None-Match → 304)"],"answer":0},{"prompt":"A browser holds a response with `Cache-Control: no-store` that is **77791s** old. What happens on the next request?","options":["It must not be cached at all","Fresh: serve it from cache","It must revalidate with the server first","Stale: revalidate (e.g. If-None-Match → 304)"],"answer":0},{"prompt":"A browser holds a response with `Cache-Control: no-cache` that is **2675s** old. What happens on the next request?","options":["It must revalidate with the server first","Stale: revalidate (e.g. If-None-Match → 304)","It must not be cached at all","Fresh: serve it from cache"],"answer":0},{"prompt":"A CDN holds a response with `Cache-Control: public, max-age=86400` that is **123263s** old. What happens on the next request?","options":["It must revalidate with the server first","Stale: revalidate (e.g. If-None-Match → 304)","It must not be cached at all","Fresh: serve it from cache"],"answer":1},{"prompt":"A browser holds a response with `Cache-Control: public, max-age=60, s-maxage=30` that is **19s** old. What happens on the next request?","options":["Fresh: serve it from cache","Stale: revalidate (e.g. If-None-Match → 304)","It must revalidate with the server first","It must not be cached at all"],"answer":0}]
---
# Deploy Drill: Is the cached copy fresh? #2

A response with `Cache-Control: max-age=N` is **fresh** for N seconds after it was generated (the `Age` header says how old a CDN copy already is). `no-cache` means "store it, but revalidate before every use", `no-store` means never store it, and `s-maxage` overrides `max-age` for shared caches (CDNs) only.
