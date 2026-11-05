---
slug: "auth-jwt-exp-13"
title: "Security Drill: Token expiry arithmetic #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700065037` and `exp: 1700068637`. The server's clock reads `1700068647` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it is not valid yet","It depends on the signature only","Yes","No, it has expired"],"answer":2,"explanation":"exp + leeway = 1700068697; now = 1700068647."},{"prompt":"A token has `iat: 1700002964` and `exp: 1700006564`. The server's clock reads `1700006609` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it is not valid yet","No, it has expired","Yes"],"answer":3,"explanation":"exp + leeway = 1700006624; now = 1700006609."},{"prompt":"A token has `iat: 1700000822` and `exp: 1700087222`. The server's clock reads `1700087312` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it has expired","No, it is not valid yet","Yes","It depends on the signature only"],"answer":0,"explanation":"exp + leeway = 1700087282; now = 1700087312."},{"prompt":"A token has `iat: 1700095118` and `exp: 1700095418`. The server's clock reads `1700095428` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it has expired","No, it is not valid yet","Yes","It depends on the signature only"],"answer":2,"explanation":"exp + leeway = 1700095448; now = 1700095428."},{"prompt":"A token has `iat: 1700086212` and `exp: 1700086512`. The server's clock reads `1700086392` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["Yes","No, it has expired","It depends on the signature only","No, it is not valid yet"],"answer":0,"explanation":"exp + leeway = 1700086512; now = 1700086392."}]
---
# Security Drill: Token expiry arithmetic #13

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
