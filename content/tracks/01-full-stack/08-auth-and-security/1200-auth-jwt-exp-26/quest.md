---
slug: "auth-jwt-exp-26"
title: "Security Drill: Token expiry arithmetic #26"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700003826` and `exp: 1700090226`. The server's clock reads `1700090106` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it has expired","It depends on the signature only","Yes","No, it is not valid yet"],"answer":2,"explanation":"exp + leeway = 1700090256; now = 1700090106."},{"prompt":"A token has `iat: 1700084945` and `exp: 1700088545`. The server's clock reads `1700088590` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it has expired","It depends on the signature only","Yes","No, it is not valid yet"],"answer":2,"explanation":"exp + leeway = 1700088605; now = 1700088590."},{"prompt":"A token has `iat: 1700062776` and `exp: 1700066376`. The server's clock reads `1700066256` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it is not valid yet","Yes","No, it has expired","It depends on the signature only"],"answer":1,"explanation":"exp + leeway = 1700066376; now = 1700066256."},{"prompt":"A token has `iat: 1700085516` and `exp: 1700085816`. The server's clock reads `1700085861` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it has expired","No, it is not valid yet","Yes"],"answer":3,"explanation":"exp + leeway = 1700085876; now = 1700085861."},{"prompt":"A token has `iat: 1700009588` and `exp: 1700010488`. The server's clock reads `1700010368` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["Yes","No, it has expired","It depends on the signature only","No, it is not valid yet"],"answer":0,"explanation":"exp + leeway = 1700010488; now = 1700010368."}]
---
# Security Drill: Token expiry arithmetic #26

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
