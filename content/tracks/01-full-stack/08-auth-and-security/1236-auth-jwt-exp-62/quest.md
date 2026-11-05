---
slug: "auth-jwt-exp-62"
title: "Security Drill: Token expiry arithmetic #62"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700084701` and `exp: 1700085001`. The server's clock reads `1700085091` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it has expired","It depends on the signature only","Yes","No, it is not valid yet"],"answer":0,"explanation":"exp + leeway = 1700085001; now = 1700085091."},{"prompt":"A token has `iat: 1700080364` and `exp: 1700081264`. The server's clock reads `1700081264` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it is not valid yet","No, it has expired","Yes","It depends on the signature only"],"answer":2,"explanation":"exp + leeway = 1700081324; now = 1700081264."},{"prompt":"A token has `iat: 1700066344` and `exp: 1700069944`. The server's clock reads `1700069944` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it has expired","Yes","It depends on the signature only","No, it is not valid yet"],"answer":1,"explanation":"exp + leeway = 1700069974; now = 1700069944."},{"prompt":"A token has `iat: 1700045836` and `exp: 1700046736`. The server's clock reads `1700046781` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["Yes","No, it has expired","No, it is not valid yet","It depends on the signature only"],"answer":1,"explanation":"exp + leeway = 1700046736; now = 1700046781."},{"prompt":"A token has `iat: 1700090558` and `exp: 1700091458`. The server's clock reads `1700091548` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it is not valid yet","No, it has expired","Yes","It depends on the signature only"],"answer":1,"explanation":"exp + leeway = 1700091518; now = 1700091548."}]
---
# Security Drill: Token expiry arithmetic #62

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
