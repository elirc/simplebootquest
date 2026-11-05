---
slug: "auth-jwt-exp-12"
title: "Security Drill: Token expiry arithmetic #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700034409` and `exp: 1700120809`. The server's clock reads `1700120689` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it is not valid yet","It depends on the signature only","Yes","No, it has expired"],"answer":2,"explanation":"exp + leeway = 1700120839; now = 1700120689."},{"prompt":"A token has `iat: 1700062222` and `exp: 1700062522`. The server's clock reads `1700062521` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it has expired","It depends on the signature only","No, it is not valid yet","Yes"],"answer":3,"explanation":"exp + leeway = 1700062552; now = 1700062521."},{"prompt":"A token has `iat: 1700070144` and `exp: 1700070444`. The server's clock reads `1700070454` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["Yes","No, it has expired","It depends on the signature only","No, it is not valid yet"],"answer":1,"explanation":"exp + leeway = 1700070444; now = 1700070454."},{"prompt":"A token has `iat: 1700080694` and `exp: 1700080994`. The server's clock reads `1700080874` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it has expired","No, it is not valid yet","Yes","It depends on the signature only"],"answer":2,"explanation":"exp + leeway = 1700081024; now = 1700080874."},{"prompt":"A token has `iat: 1700036295` and `exp: 1700037195`. The server's clock reads `1700037195` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["Yes","No, it is not valid yet","No, it has expired","It depends on the signature only"],"answer":0,"explanation":"exp + leeway = 1700037255; now = 1700037195."}]
---
# Security Drill: Token expiry arithmetic #12

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
