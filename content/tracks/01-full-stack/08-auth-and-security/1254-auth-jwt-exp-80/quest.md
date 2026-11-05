---
slug: "auth-jwt-exp-80"
title: "Security Drill: Token expiry arithmetic #80"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700023590` and `exp: 1700109990`. The server's clock reads `1700109870` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it has expired","It depends on the signature only","No, it is not valid yet","Yes"],"answer":3,"explanation":"exp + leeway = 1700110020; now = 1700109870."},{"prompt":"A token has `iat: 1700061629` and `exp: 1700061929`. The server's clock reads `1700061928` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["Yes","No, it has expired","It depends on the signature only","No, it is not valid yet"],"answer":0,"explanation":"exp + leeway = 1700061989; now = 1700061928."},{"prompt":"A token has `iat: 1700074016` and `exp: 1700160416`. The server's clock reads `1700160506` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it has expired","It depends on the signature only","No, it is not valid yet","Yes"],"answer":0,"explanation":"exp + leeway = 1700160416; now = 1700160506."},{"prompt":"A token has `iat: 1700065283` and `exp: 1700065583`. The server's clock reads `1700065463` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it is not valid yet","Yes","It depends on the signature only","No, it has expired"],"answer":1,"explanation":"exp + leeway = 1700065613; now = 1700065463."},{"prompt":"A token has `iat: 1700091193` and `exp: 1700091493`. The server's clock reads `1700091538` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it has expired","No, it is not valid yet","It depends on the signature only","Yes"],"answer":3,"explanation":"exp + leeway = 1700091553; now = 1700091538."}]
---
# Security Drill: Token expiry arithmetic #80

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
