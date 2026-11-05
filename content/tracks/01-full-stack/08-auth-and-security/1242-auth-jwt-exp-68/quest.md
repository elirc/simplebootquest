---
slug: "auth-jwt-exp-68"
title: "Security Drill: Token expiry arithmetic #68"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700061772` and `exp: 1700148172`. The server's clock reads `1700148172` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["Yes","No, it has expired","It depends on the signature only","No, it is not valid yet"],"answer":0,"explanation":"exp + leeway = 1700148232; now = 1700148172."},{"prompt":"A token has `iat: 1700055741` and `exp: 1700059341`. The server's clock reads `1700059221` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it has expired","Yes","No, it is not valid yet","It depends on the signature only"],"answer":1,"explanation":"exp + leeway = 1700059371; now = 1700059221."},{"prompt":"A token has `iat: 1700026693` and `exp: 1700030293`. The server's clock reads `1700030293` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["Yes","No, it is not valid yet","No, it has expired","It depends on the signature only"],"answer":2,"explanation":"exp + leeway = 1700030293; now = 1700030293."},{"prompt":"A token has `iat: 1700016836` and `exp: 1700103236`. The server's clock reads `1700103246` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["Yes","No, it has expired","It depends on the signature only","No, it is not valid yet"],"answer":0,"explanation":"exp + leeway = 1700103266; now = 1700103246."},{"prompt":"A token has `iat: 1700048166` and `exp: 1700049066`. The server's clock reads `1700049111` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it has expired","Yes","No, it is not valid yet","It depends on the signature only"],"answer":1,"explanation":"exp + leeway = 1700049126; now = 1700049111."}]
---
# Security Drill: Token expiry arithmetic #68

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
