---
slug: "auth-jwt-exp-27"
title: "Security Drill: Token expiry arithmetic #27"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700043650` and `exp: 1700044550`. The server's clock reads `1700044430` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it is not valid yet","No, it has expired","Yes","It depends on the signature only"],"answer":2,"explanation":"exp + leeway = 1700044580; now = 1700044430."},{"prompt":"A token has `iat: 1700028760` and `exp: 1700115160`. The server's clock reads `1700115250` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it has expired","Yes","It depends on the signature only","No, it is not valid yet"],"answer":0,"explanation":"exp + leeway = 1700115160; now = 1700115250."},{"prompt":"A token has `iat: 1700017608` and `exp: 1700021208`. The server's clock reads `1700021298` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["Yes","It depends on the signature only","No, it is not valid yet","No, it has expired"],"answer":3,"explanation":"exp + leeway = 1700021238; now = 1700021298."},{"prompt":"A token has `iat: 1700064036` and `exp: 1700150436`. The server's clock reads `1700150481` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it is not valid yet","Yes","No, it has expired"],"answer":3,"explanation":"exp + leeway = 1700150436; now = 1700150481."},{"prompt":"A token has `iat: 1700073583` and `exp: 1700074483`. The server's clock reads `1700074483` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["It depends on the signature only","Yes","No, it is not valid yet","No, it has expired"],"answer":1,"explanation":"exp + leeway = 1700074543; now = 1700074483."}]
---
# Security Drill: Token expiry arithmetic #27

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
