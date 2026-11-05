---
slug: "auth-jwt-exp-64"
title: "Security Drill: Token expiry arithmetic #64"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700003728` and `exp: 1700004028`. The server's clock reads `1700004038` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it is not valid yet","Yes","No, it has expired","It depends on the signature only"],"answer":2,"explanation":"exp + leeway = 1700004028; now = 1700004038."},{"prompt":"A token has `iat: 1700019047` and `exp: 1700022647`. The server's clock reads `1700022692` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["Yes","No, it has expired","No, it is not valid yet","It depends on the signature only"],"answer":0,"explanation":"exp + leeway = 1700022707; now = 1700022692."},{"prompt":"A token has `iat: 1700072345` and `exp: 1700073245`. The server's clock reads `1700073245` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it is not valid yet","Yes","No, it has expired","It depends on the signature only"],"answer":1,"explanation":"exp + leeway = 1700073305; now = 1700073245."},{"prompt":"A token has `iat: 1700090609` and `exp: 1700090909`. The server's clock reads `1700090954` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["Yes","No, it is not valid yet","It depends on the signature only","No, it has expired"],"answer":3,"explanation":"exp + leeway = 1700090909; now = 1700090954."},{"prompt":"A token has `iat: 1700026389` and `exp: 1700029989`. The server's clock reads `1700030034` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it has expired","No, it is not valid yet","Yes","It depends on the signature only"],"answer":0,"explanation":"exp + leeway = 1700030019; now = 1700030034."}]
---
# Security Drill: Token expiry arithmetic #64

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
