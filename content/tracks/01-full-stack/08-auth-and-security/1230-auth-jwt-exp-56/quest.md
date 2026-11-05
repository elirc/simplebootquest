---
slug: "auth-jwt-exp-56"
title: "Security Drill: Token expiry arithmetic #56"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700043029` and `exp: 1700046629`. The server's clock reads `1700046509` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it has expired","It depends on the signature only","No, it is not valid yet","Yes"],"answer":3,"explanation":"exp + leeway = 1700046659; now = 1700046509."},{"prompt":"A token has `iat: 1700064181` and `exp: 1700150581`. The server's clock reads `1700150581` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it has expired","No, it is not valid yet","Yes"],"answer":1,"explanation":"exp + leeway = 1700150581; now = 1700150581."},{"prompt":"A token has `iat: 1700020678` and `exp: 1700024278`. The server's clock reads `1700024158` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["Yes","It depends on the signature only","No, it is not valid yet","No, it has expired"],"answer":0,"explanation":"exp + leeway = 1700024338; now = 1700024158."},{"prompt":"A token has `iat: 1700037518` and `exp: 1700123918`. The server's clock reads `1700123798` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it has expired","It depends on the signature only","No, it is not valid yet","Yes"],"answer":3,"explanation":"exp + leeway = 1700123948; now = 1700123798."},{"prompt":"A token has `iat: 1700069410` and `exp: 1700069710`. The server's clock reads `1700069720` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["Yes","It depends on the signature only","No, it has expired","No, it is not valid yet"],"answer":0,"explanation":"exp + leeway = 1700069740; now = 1700069720."}]
---
# Security Drill: Token expiry arithmetic #56

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
