---
slug: "auth-jwt-exp-18"
title: "Security Drill: Token expiry arithmetic #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700052391` and `exp: 1700052691`. The server's clock reads `1700052701` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it has expired","Yes","No, it is not valid yet","It depends on the signature only"],"answer":1,"explanation":"exp + leeway = 1700052721; now = 1700052701."},{"prompt":"A token has `iat: 1700047125` and `exp: 1700133525`. The server's clock reads `1700133615` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it is not valid yet","It depends on the signature only","Yes","No, it has expired"],"answer":3,"explanation":"exp + leeway = 1700133525; now = 1700133615."},{"prompt":"A token has `iat: 1700022623` and `exp: 1700109023`. The server's clock reads `1700108903` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["It depends on the signature only","Yes","No, it has expired","No, it is not valid yet"],"answer":1,"explanation":"exp + leeway = 1700109053; now = 1700108903."},{"prompt":"A token has `iat: 1700095320` and `exp: 1700095620`. The server's clock reads `1700095665` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["It depends on the signature only","Yes","No, it is not valid yet","No, it has expired"],"answer":1,"explanation":"exp + leeway = 1700095680; now = 1700095665."},{"prompt":"A token has `iat: 1700033789` and `exp: 1700034689`. The server's clock reads `1700034569` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it has expired","No, it is not valid yet","Yes"],"answer":3,"explanation":"exp + leeway = 1700034689; now = 1700034569."}]
---
# Security Drill: Token expiry arithmetic #18

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
