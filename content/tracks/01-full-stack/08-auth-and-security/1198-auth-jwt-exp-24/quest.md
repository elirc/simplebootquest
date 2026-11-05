---
slug: "auth-jwt-exp-24"
title: "Security Drill: Token expiry arithmetic #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700087632` and `exp: 1700091232`. The server's clock reads `1700091242` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["It depends on the signature only","Yes","No, it is not valid yet","No, it has expired"],"answer":1,"explanation":"exp + leeway = 1700091292; now = 1700091242."},{"prompt":"A token has `iat: 1700028692` and `exp: 1700032292`. The server's clock reads `1700032172` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["It depends on the signature only","Yes","No, it has expired","No, it is not valid yet"],"answer":1,"explanation":"exp + leeway = 1700032292; now = 1700032172."},{"prompt":"A token has `iat: 1700049399` and `exp: 1700135799`. The server's clock reads `1700135809` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["Yes","It depends on the signature only","No, it has expired","No, it is not valid yet"],"answer":0,"explanation":"exp + leeway = 1700135859; now = 1700135809."},{"prompt":"A token has `iat: 1700089161` and `exp: 1700092761`. The server's clock reads `1700092760` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["Yes","It depends on the signature only","No, it is not valid yet","No, it has expired"],"answer":0,"explanation":"exp + leeway = 1700092821; now = 1700092760."},{"prompt":"A token has `iat: 1700044822` and `exp: 1700048422`. The server's clock reads `1700048512` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["It depends on the signature only","Yes","No, it has expired","No, it is not valid yet"],"answer":2,"explanation":"exp + leeway = 1700048422; now = 1700048512."}]
---
# Security Drill: Token expiry arithmetic #24

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
