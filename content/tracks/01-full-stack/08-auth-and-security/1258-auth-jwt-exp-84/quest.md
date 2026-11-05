---
slug: "auth-jwt-exp-84"
title: "Security Drill: Token expiry arithmetic #84"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700035154` and `exp: 1700038754`. The server's clock reads `1700038799` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it is not valid yet","Yes","It depends on the signature only","No, it has expired"],"answer":1,"explanation":"exp + leeway = 1700038814; now = 1700038799."},{"prompt":"A token has `iat: 1700077137` and `exp: 1700163537`. The server's clock reads `1700163536` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["Yes","No, it has expired","It depends on the signature only","No, it is not valid yet"],"answer":0,"explanation":"exp + leeway = 1700163537; now = 1700163536."},{"prompt":"A token has `iat: 1700096743` and `exp: 1700097643`. The server's clock reads `1700097523` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it is not valid yet","No, it has expired","Yes"],"answer":3,"explanation":"exp + leeway = 1700097643; now = 1700097523."},{"prompt":"A token has `iat: 1700005899` and `exp: 1700006199`. The server's clock reads `1700006244` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it has expired","Yes","No, it is not valid yet"],"answer":2,"explanation":"exp + leeway = 1700006259; now = 1700006244."},{"prompt":"A token has `iat: 1700026715` and `exp: 1700030315`. The server's clock reads `1700030314` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["Yes","It depends on the signature only","No, it has expired","No, it is not valid yet"],"answer":0,"explanation":"exp + leeway = 1700030375; now = 1700030314."}]
---
# Security Drill: Token expiry arithmetic #84

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
