---
slug: "auth-jwt-exp-8"
title: "Security Drill: Token expiry arithmetic #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700052492` and `exp: 1700056092`. The server's clock reads `1700056091` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["Yes","It depends on the signature only","No, it is not valid yet","No, it has expired"],"answer":0,"explanation":"exp + leeway = 1700056152; now = 1700056091."},{"prompt":"A token has `iat: 1700086824` and `exp: 1700087724`. The server's clock reads `1700087814` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["Yes","It depends on the signature only","No, it has expired","No, it is not valid yet"],"answer":2,"explanation":"exp + leeway = 1700087754; now = 1700087814."},{"prompt":"A token has `iat: 1700083522` and `exp: 1700087122`. The server's clock reads `1700087121` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it has expired","It depends on the signature only","No, it is not valid yet","Yes"],"answer":3,"explanation":"exp + leeway = 1700087182; now = 1700087121."},{"prompt":"A token has `iat: 1700091651` and `exp: 1700095251`. The server's clock reads `1700095251` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it is not valid yet","No, it has expired","Yes"],"answer":2,"explanation":"exp + leeway = 1700095251; now = 1700095251."},{"prompt":"A token has `iat: 1700096145` and `exp: 1700096445`. The server's clock reads `1700096455` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it has expired","No, it is not valid yet","Yes","It depends on the signature only"],"answer":2,"explanation":"exp + leeway = 1700096475; now = 1700096455."}]
---
# Security Drill: Token expiry arithmetic #8

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
