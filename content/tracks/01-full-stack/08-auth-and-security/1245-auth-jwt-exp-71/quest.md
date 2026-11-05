---
slug: "auth-jwt-exp-71"
title: "Security Drill: Token expiry arithmetic #71"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700075341` and `exp: 1700075641`. The server's clock reads `1700075641` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it has expired","No, it is not valid yet","Yes","It depends on the signature only"],"answer":0,"explanation":"exp + leeway = 1700075641; now = 1700075641."},{"prompt":"A token has `iat: 1700005367` and `exp: 1700005667`. The server's clock reads `1700005667` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it is not valid yet","Yes","No, it has expired","It depends on the signature only"],"answer":1,"explanation":"exp + leeway = 1700005697; now = 1700005667."},{"prompt":"A token has `iat: 1700059198` and `exp: 1700145598`. The server's clock reads `1700145598` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["Yes","No, it is not valid yet","No, it has expired","It depends on the signature only"],"answer":2,"explanation":"exp + leeway = 1700145598; now = 1700145598."},{"prompt":"A token has `iat: 1700035434` and `exp: 1700039034`. The server's clock reads `1700039034` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it has expired","It depends on the signature only","No, it is not valid yet","Yes"],"answer":3,"explanation":"exp + leeway = 1700039094; now = 1700039034."},{"prompt":"A token has `iat: 1700034100` and `exp: 1700037700`. The server's clock reads `1700037745` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it has expired","Yes","It depends on the signature only","No, it is not valid yet"],"answer":0,"explanation":"exp + leeway = 1700037700; now = 1700037745."}]
---
# Security Drill: Token expiry arithmetic #71

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
