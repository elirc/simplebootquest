---
slug: "auth-jwt-exp-29"
title: "Security Drill: Token expiry arithmetic #29"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700088794` and `exp: 1700175194`. The server's clock reads `1700175284` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["Yes","No, it has expired","It depends on the signature only","No, it is not valid yet"],"answer":1,"explanation":"exp + leeway = 1700175254; now = 1700175284."},{"prompt":"A token has `iat: 1700035234` and `exp: 1700035534`. The server's clock reads `1700035579` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["Yes","No, it has expired","No, it is not valid yet","It depends on the signature only"],"answer":1,"explanation":"exp + leeway = 1700035564; now = 1700035579."},{"prompt":"A token has `iat: 1700030619` and `exp: 1700030919`. The server's clock reads `1700030929` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it is not valid yet","Yes","It depends on the signature only","No, it has expired"],"answer":3,"explanation":"exp + leeway = 1700030919; now = 1700030929."},{"prompt":"A token has `iat: 1700001643` and `exp: 1700002543`. The server's clock reads `1700002543` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it is not valid yet","Yes","No, it has expired"],"answer":2,"explanation":"exp + leeway = 1700002603; now = 1700002543."},{"prompt":"A token has `iat: 1700028581` and `exp: 1700029481`. The server's clock reads `1700029361` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["It depends on the signature only","Yes","No, it is not valid yet","No, it has expired"],"answer":1,"explanation":"exp + leeway = 1700029511; now = 1700029361."}]
---
# Security Drill: Token expiry arithmetic #29

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
