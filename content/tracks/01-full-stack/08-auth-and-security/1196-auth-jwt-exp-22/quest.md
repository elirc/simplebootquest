---
slug: "auth-jwt-exp-22"
title: "Security Drill: Token expiry arithmetic #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700016759` and `exp: 1700020359`. The server's clock reads `1700020449` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it has expired","Yes","No, it is not valid yet"],"answer":1,"explanation":"exp + leeway = 1700020419; now = 1700020449."},{"prompt":"A token has `iat: 1700082252` and `exp: 1700168652`. The server's clock reads `1700168742` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it has expired","It depends on the signature only","Yes","No, it is not valid yet"],"answer":0,"explanation":"exp + leeway = 1700168652; now = 1700168742."},{"prompt":"A token has `iat: 1700017634` and `exp: 1700021234`. The server's clock reads `1700021234` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it is not valid yet","Yes","No, it has expired"],"answer":3,"explanation":"exp + leeway = 1700021234; now = 1700021234."},{"prompt":"A token has `iat: 1700047546` and `exp: 1700047846`. The server's clock reads `1700047856` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["Yes","No, it is not valid yet","No, it has expired","It depends on the signature only"],"answer":2,"explanation":"exp + leeway = 1700047846; now = 1700047856."},{"prompt":"A token has `iat: 1700034582` and `exp: 1700034882`. The server's clock reads `1700034972` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["It depends on the signature only","Yes","No, it has expired","No, it is not valid yet"],"answer":2,"explanation":"exp + leeway = 1700034942; now = 1700034972."}]
---
# Security Drill: Token expiry arithmetic #22

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
