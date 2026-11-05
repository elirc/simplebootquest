---
slug: "auth-jwt-exp-11"
title: "Security Drill: Token expiry arithmetic #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700029745` and `exp: 1700116145`. The server's clock reads `1700116145` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it is not valid yet","Yes","It depends on the signature only","No, it has expired"],"answer":1,"explanation":"exp + leeway = 1700116175; now = 1700116145."},{"prompt":"A token has `iat: 1700073458` and `exp: 1700077058`. The server's clock reads `1700077058` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["Yes","No, it is not valid yet","No, it has expired","It depends on the signature only"],"answer":2,"explanation":"exp + leeway = 1700077058; now = 1700077058."},{"prompt":"A token has `iat: 1700059143` and `exp: 1700060043`. The server's clock reads `1700060042` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it is not valid yet","Yes","It depends on the signature only","No, it has expired"],"answer":1,"explanation":"exp + leeway = 1700060043; now = 1700060042."},{"prompt":"A token has `iat: 1700014747` and `exp: 1700101147`. The server's clock reads `1700101192` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it is not valid yet","Yes","No, it has expired","It depends on the signature only"],"answer":2,"explanation":"exp + leeway = 1700101177; now = 1700101192."},{"prompt":"A token has `iat: 1700046358` and `exp: 1700047258`. The server's clock reads `1700047257` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["Yes","It depends on the signature only","No, it is not valid yet","No, it has expired"],"answer":0,"explanation":"exp + leeway = 1700047288; now = 1700047257."}]
---
# Security Drill: Token expiry arithmetic #11

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
