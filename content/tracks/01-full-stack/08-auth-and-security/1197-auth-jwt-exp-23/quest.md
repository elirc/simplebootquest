---
slug: "auth-jwt-exp-23"
title: "Security Drill: Token expiry arithmetic #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700099087` and `exp: 1700099987`. The server's clock reads `1700100032` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["Yes","No, it is not valid yet","It depends on the signature only","No, it has expired"],"answer":3,"explanation":"exp + leeway = 1700099987; now = 1700100032."},{"prompt":"A token has `iat: 1700027325` and `exp: 1700028225`. The server's clock reads `1700028225` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it is not valid yet","No, it has expired","Yes"],"answer":3,"explanation":"exp + leeway = 1700028255; now = 1700028225."},{"prompt":"A token has `iat: 1700054574` and `exp: 1700140974`. The server's clock reads `1700140854` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it is not valid yet","Yes","No, it has expired","It depends on the signature only"],"answer":1,"explanation":"exp + leeway = 1700141004; now = 1700140854."},{"prompt":"A token has `iat: 1700080145` and `exp: 1700166545`. The server's clock reads `1700166555` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it has expired","Yes","It depends on the signature only","No, it is not valid yet"],"answer":1,"explanation":"exp + leeway = 1700166575; now = 1700166555."},{"prompt":"A token has `iat: 1700076642` and `exp: 1700077542`. The server's clock reads `1700077552` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it is not valid yet","It depends on the signature only","Yes","No, it has expired"],"answer":3,"explanation":"exp + leeway = 1700077542; now = 1700077552."}]
---
# Security Drill: Token expiry arithmetic #23

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
