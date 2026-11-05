---
slug: "auth-jwt-exp-72"
title: "Security Drill: Token expiry arithmetic #72"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700063030` and `exp: 1700063330`. The server's clock reads `1700063340` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it is not valid yet","Yes","No, it has expired"],"answer":3,"explanation":"exp + leeway = 1700063330; now = 1700063340."},{"prompt":"A token has `iat: 1700081752` and `exp: 1700168152`. The server's clock reads `1700168162` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it has expired","No, it is not valid yet","Yes","It depends on the signature only"],"answer":0,"explanation":"exp + leeway = 1700168152; now = 1700168162."},{"prompt":"A token has `iat: 1700004032` and `exp: 1700007632`. The server's clock reads `1700007631` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it is not valid yet","No, it has expired","Yes","It depends on the signature only"],"answer":2,"explanation":"exp + leeway = 1700007692; now = 1700007631."},{"prompt":"A token has `iat: 1700055346` and `exp: 1700055646`. The server's clock reads `1700055736` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it has expired","No, it is not valid yet","Yes","It depends on the signature only"],"answer":0,"explanation":"exp + leeway = 1700055706; now = 1700055736."},{"prompt":"A token has `iat: 1700003552` and `exp: 1700003852`. The server's clock reads `1700003732` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["Yes","No, it is not valid yet","No, it has expired","It depends on the signature only"],"answer":0,"explanation":"exp + leeway = 1700003882; now = 1700003732."}]
---
# Security Drill: Token expiry arithmetic #72

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
