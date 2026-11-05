---
slug: "auth-jwt-exp-58"
title: "Security Drill: Token expiry arithmetic #58"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700045173` and `exp: 1700045473`. The server's clock reads `1700045518` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it has expired","It depends on the signature only","Yes","No, it is not valid yet"],"answer":0,"explanation":"exp + leeway = 1700045503; now = 1700045518."},{"prompt":"A token has `iat: 1700087385` and `exp: 1700173785`. The server's clock reads `1700173795` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it is not valid yet","Yes","It depends on the signature only","No, it has expired"],"answer":3,"explanation":"exp + leeway = 1700173785; now = 1700173795."},{"prompt":"A token has `iat: 1700043564` and `exp: 1700043864`. The server's clock reads `1700043954` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it has expired","Yes","No, it is not valid yet","It depends on the signature only"],"answer":0,"explanation":"exp + leeway = 1700043924; now = 1700043954."},{"prompt":"A token has `iat: 1700017911` and `exp: 1700021511`. The server's clock reads `1700021510` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it is not valid yet","Yes","It depends on the signature only","No, it has expired"],"answer":1,"explanation":"exp + leeway = 1700021571; now = 1700021510."},{"prompt":"A token has `iat: 1700012126` and `exp: 1700015726`. The server's clock reads `1700015771` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it has expired","Yes","No, it is not valid yet","It depends on the signature only"],"answer":0,"explanation":"exp + leeway = 1700015756; now = 1700015771."}]
---
# Security Drill: Token expiry arithmetic #58

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
