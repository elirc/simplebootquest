---
slug: "deploy-cache-40"
title: "Deploy Drill: Is the cached copy fresh? #40"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"A browser holds a response with `Cache-Control: no-cache` that is **35739s** old. What happens on the next request?","options":["Fresh: serve it from cache","Stale: revalidate (e.g. If-None-Match → 304)","It must not be cached at all","It must revalidate with the server first"],"answer":3},{"prompt":"A CDN holds a response with `Cache-Control: no-cache` that is **132073s** old. What happens on the next request?","options":["Stale: revalidate (e.g. If-None-Match → 304)","It must not be cached at all","Fresh: serve it from cache","It must revalidate with the server first"],"answer":3},{"prompt":"A browser holds a response with `Cache-Control: public, max-age=300, s-maxage=600` that is **338s** old. What happens on the next request?","options":["Stale: revalidate (e.g. If-None-Match → 304)","Fresh: serve it from cache","It must not be cached at all","It must revalidate with the server first"],"answer":0},{"prompt":"A browser holds a response with `Cache-Control: no-store` that is **39293s** old. What happens on the next request?","options":["Stale: revalidate (e.g. If-None-Match → 304)","It must revalidate with the server first","It must not be cached at all","Fresh: serve it from cache"],"answer":2},{"prompt":"A CDN holds a response with `Cache-Control: no-cache` that is **2768s** old. What happens on the next request?","options":["Stale: revalidate (e.g. If-None-Match → 304)","It must revalidate with the server first","It must not be cached at all","Fresh: serve it from cache"],"answer":1}]
---
# Deploy Drill: Is the cached copy fresh? #40

A response with `Cache-Control: max-age=N` is **fresh** for N seconds after it was generated (the `Age` header says how old a CDN copy already is). `no-cache` means "store it, but revalidate before every use", `no-store` means never store it, and `s-maxage` overrides `max-age` for shared caches (CDNs) only.
