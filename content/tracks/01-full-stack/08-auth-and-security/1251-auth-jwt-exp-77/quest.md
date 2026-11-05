---
slug: "auth-jwt-exp-77"
title: "Security Drill: Token expiry arithmetic #77"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700035806` and `exp: 1700036106`. The server's clock reads `1700036196` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it has expired","Yes","No, it is not valid yet"],"answer":1,"explanation":"exp + leeway = 1700036136; now = 1700036196."},{"prompt":"A token has `iat: 1700080176` and `exp: 1700080476`. The server's clock reads `1700080356` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it is not valid yet","No, it has expired","Yes","It depends on the signature only"],"answer":2,"explanation":"exp + leeway = 1700080506; now = 1700080356."},{"prompt":"A token has `iat: 1700080329` and `exp: 1700081229`. The server's clock reads `1700081228` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["Yes","No, it has expired","No, it is not valid yet","It depends on the signature only"],"answer":0,"explanation":"exp + leeway = 1700081289; now = 1700081228."},{"prompt":"A token has `iat: 1700070382` and `exp: 1700156782`. The server's clock reads `1700156827` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it is not valid yet","Yes","No, it has expired"],"answer":3,"explanation":"exp + leeway = 1700156782; now = 1700156827."},{"prompt":"A token has `iat: 1700011666` and `exp: 1700015266`. The server's clock reads `1700015276` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it has expired","No, it is not valid yet","Yes"],"answer":3,"explanation":"exp + leeway = 1700015296; now = 1700015276."}]
---
# Security Drill: Token expiry arithmetic #77

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
