---
slug: "auth-jwt-exp-38"
title: "Security Drill: Token expiry arithmetic #38"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700053470` and `exp: 1700054370`. The server's clock reads `1700054250` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it is not valid yet","No, it has expired","Yes","It depends on the signature only"],"answer":2,"explanation":"exp + leeway = 1700054430; now = 1700054250."},{"prompt":"A token has `iat: 1700052129` and `exp: 1700055729`. The server's clock reads `1700055739` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it has expired","No, it is not valid yet","Yes"],"answer":3,"explanation":"exp + leeway = 1700055759; now = 1700055739."},{"prompt":"A token has `iat: 1700038702` and `exp: 1700039002`. The server's clock reads `1700038882` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it has expired","It depends on the signature only","Yes","No, it is not valid yet"],"answer":2,"explanation":"exp + leeway = 1700039032; now = 1700038882."},{"prompt":"A token has `iat: 1700093734` and `exp: 1700097334`. The server's clock reads `1700097424` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it is not valid yet","Yes","No, it has expired"],"answer":3,"explanation":"exp + leeway = 1700097364; now = 1700097424."},{"prompt":"A token has `iat: 1700052088` and `exp: 1700138488`. The server's clock reads `1700138578` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it is not valid yet","No, it has expired","Yes"],"answer":2,"explanation":"exp + leeway = 1700138548; now = 1700138578."}]
---
# Security Drill: Token expiry arithmetic #38

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
