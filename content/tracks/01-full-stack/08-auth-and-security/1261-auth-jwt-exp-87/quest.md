---
slug: "auth-jwt-exp-87"
title: "Security Drill: Token expiry arithmetic #87"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700044978` and `exp: 1700045278`. The server's clock reads `1700045368` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it has expired","No, it is not valid yet","Yes"],"answer":1,"explanation":"exp + leeway = 1700045308; now = 1700045368."},{"prompt":"A token has `iat: 1700072276` and `exp: 1700158676`. The server's clock reads `1700158766` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it is not valid yet","It depends on the signature only","Yes","No, it has expired"],"answer":3,"explanation":"exp + leeway = 1700158676; now = 1700158766."},{"prompt":"A token has `iat: 1700003633` and `exp: 1700004533`. The server's clock reads `1700004543` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it has expired","Yes","No, it is not valid yet","It depends on the signature only"],"answer":1,"explanation":"exp + leeway = 1700004563; now = 1700004543."},{"prompt":"A token has `iat: 1700046803` and `exp: 1700047103`. The server's clock reads `1700046983` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it is not valid yet","Yes","It depends on the signature only","No, it has expired"],"answer":1,"explanation":"exp + leeway = 1700047133; now = 1700046983."},{"prompt":"A token has `iat: 1700053106` and `exp: 1700056706`. The server's clock reads `1700056706` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it is not valid yet","Yes","It depends on the signature only","No, it has expired"],"answer":1,"explanation":"exp + leeway = 1700056736; now = 1700056706."}]
---
# Security Drill: Token expiry arithmetic #87

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
