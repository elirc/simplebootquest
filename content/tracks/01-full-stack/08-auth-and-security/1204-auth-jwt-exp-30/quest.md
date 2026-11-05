---
slug: "auth-jwt-exp-30"
title: "Security Drill: Token expiry arithmetic #30"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700074459` and `exp: 1700078059`. The server's clock reads `1700078059` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it has expired","It depends on the signature only","Yes","No, it is not valid yet"],"answer":2,"explanation":"exp + leeway = 1700078119; now = 1700078059."},{"prompt":"A token has `iat: 1700041405` and `exp: 1700127805`. The server's clock reads `1700127815` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it is not valid yet","No, it has expired","Yes"],"answer":3,"explanation":"exp + leeway = 1700127865; now = 1700127815."},{"prompt":"A token has `iat: 1700002767` and `exp: 1700003667`. The server's clock reads `1700003757` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it has expired","Yes","It depends on the signature only","No, it is not valid yet"],"answer":0,"explanation":"exp + leeway = 1700003667; now = 1700003757."},{"prompt":"A token has `iat: 1700056519` and `exp: 1700142919`. The server's clock reads `1700143009` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it has expired","Yes","It depends on the signature only","No, it is not valid yet"],"answer":0,"explanation":"exp + leeway = 1700142919; now = 1700143009."},{"prompt":"A token has `iat: 1700075407` and `exp: 1700075707`. The server's clock reads `1700075752` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it is not valid yet","Yes","No, it has expired","It depends on the signature only"],"answer":1,"explanation":"exp + leeway = 1700075767; now = 1700075752."}]
---
# Security Drill: Token expiry arithmetic #30

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
