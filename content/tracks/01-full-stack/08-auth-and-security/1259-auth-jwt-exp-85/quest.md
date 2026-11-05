---
slug: "auth-jwt-exp-85"
title: "Security Drill: Token expiry arithmetic #85"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700082189` and `exp: 1700083089`. The server's clock reads `1700083179` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["Yes","It depends on the signature only","No, it has expired","No, it is not valid yet"],"answer":2,"explanation":"exp + leeway = 1700083119; now = 1700083179."},{"prompt":"A token has `iat: 1700052443` and `exp: 1700138843`. The server's clock reads `1700138888` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it has expired","Yes","It depends on the signature only","No, it is not valid yet"],"answer":1,"explanation":"exp + leeway = 1700138903; now = 1700138888."},{"prompt":"A token has `iat: 1700052867` and `exp: 1700139267`. The server's clock reads `1700139266` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it has expired","No, it is not valid yet","Yes"],"answer":3,"explanation":"exp + leeway = 1700139327; now = 1700139266."},{"prompt":"A token has `iat: 1700076676` and `exp: 1700076976`. The server's clock reads `1700076976` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it has expired","Yes","No, it is not valid yet","It depends on the signature only"],"answer":1,"explanation":"exp + leeway = 1700077006; now = 1700076976."},{"prompt":"A token has `iat: 1700048261` and `exp: 1700048561`. The server's clock reads `1700048441` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["Yes","No, it has expired","No, it is not valid yet","It depends on the signature only"],"answer":0,"explanation":"exp + leeway = 1700048561; now = 1700048441."}]
---
# Security Drill: Token expiry arithmetic #85

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
