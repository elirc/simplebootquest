---
slug: "auth-jwt-exp-35"
title: "Security Drill: Token expiry arithmetic #35"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700064274` and `exp: 1700150674`. The server's clock reads `1700150674` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["It depends on the signature only","Yes","No, it has expired","No, it is not valid yet"],"answer":1,"explanation":"exp + leeway = 1700150734; now = 1700150674."},{"prompt":"A token has `iat: 1700096389` and `exp: 1700097289`. The server's clock reads `1700097379` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it has expired","It depends on the signature only","Yes","No, it is not valid yet"],"answer":0,"explanation":"exp + leeway = 1700097349; now = 1700097379."},{"prompt":"A token has `iat: 1700010263` and `exp: 1700011163`. The server's clock reads `1700011162` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["Yes","No, it is not valid yet","It depends on the signature only","No, it has expired"],"answer":0,"explanation":"exp + leeway = 1700011193; now = 1700011162."},{"prompt":"A token has `iat: 1700086885` and `exp: 1700090485`. The server's clock reads `1700090365` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["Yes","No, it has expired","No, it is not valid yet","It depends on the signature only"],"answer":0,"explanation":"exp + leeway = 1700090485; now = 1700090365."},{"prompt":"A token has `iat: 1700055148` and `exp: 1700056048`. The server's clock reads `1700056047` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it has expired","No, it is not valid yet","Yes"],"answer":3,"explanation":"exp + leeway = 1700056078; now = 1700056047."}]
---
# Security Drill: Token expiry arithmetic #35

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
