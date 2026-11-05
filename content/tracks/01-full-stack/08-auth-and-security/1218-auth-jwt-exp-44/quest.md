---
slug: "auth-jwt-exp-44"
title: "Security Drill: Token expiry arithmetic #44"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700094829` and `exp: 1700095729`. The server's clock reads `1700095728` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it is not valid yet","No, it has expired","Yes","It depends on the signature only"],"answer":2,"explanation":"exp + leeway = 1700095759; now = 1700095728."},{"prompt":"A token has `iat: 1700072728` and `exp: 1700159128`. The server's clock reads `1700159127` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it has expired","It depends on the signature only","No, it is not valid yet","Yes"],"answer":3,"explanation":"exp + leeway = 1700159188; now = 1700159127."},{"prompt":"A token has `iat: 1700020549` and `exp: 1700106949`. The server's clock reads `1700106949` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it has expired","Yes","It depends on the signature only","No, it is not valid yet"],"answer":0,"explanation":"exp + leeway = 1700106949; now = 1700106949."},{"prompt":"A token has `iat: 1700042683` and `exp: 1700046283`. The server's clock reads `1700046283` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it has expired","No, it is not valid yet","Yes"],"answer":3,"explanation":"exp + leeway = 1700046343; now = 1700046283."},{"prompt":"A token has `iat: 1700069833` and `exp: 1700070733`. The server's clock reads `1700070613` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it has expired","It depends on the signature only","Yes","No, it is not valid yet"],"answer":2,"explanation":"exp + leeway = 1700070733; now = 1700070613."}]
---
# Security Drill: Token expiry arithmetic #44

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
