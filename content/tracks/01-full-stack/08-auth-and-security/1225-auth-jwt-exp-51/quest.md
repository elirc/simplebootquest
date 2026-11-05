---
slug: "auth-jwt-exp-51"
title: "Security Drill: Token expiry arithmetic #51"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700050195` and `exp: 1700050495`. The server's clock reads `1700050375` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["Yes","No, it has expired","No, it is not valid yet","It depends on the signature only"],"answer":0,"explanation":"exp + leeway = 1700050555; now = 1700050375."},{"prompt":"A token has `iat: 1700006183` and `exp: 1700092583`. The server's clock reads `1700092463` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it has expired","Yes","It depends on the signature only","No, it is not valid yet"],"answer":1,"explanation":"exp + leeway = 1700092643; now = 1700092463."},{"prompt":"A token has `iat: 1700005397` and `exp: 1700006297`. The server's clock reads `1700006307` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it has expired","It depends on the signature only","No, it is not valid yet","Yes"],"answer":3,"explanation":"exp + leeway = 1700006327; now = 1700006307."},{"prompt":"A token has `iat: 1700094378` and `exp: 1700094678`. The server's clock reads `1700094688` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it has expired","No, it is not valid yet","Yes","It depends on the signature only"],"answer":2,"explanation":"exp + leeway = 1700094738; now = 1700094688."},{"prompt":"A token has `iat: 1700011892` and `exp: 1700012792`. The server's clock reads `1700012882` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["Yes","It depends on the signature only","No, it has expired","No, it is not valid yet"],"answer":2,"explanation":"exp + leeway = 1700012792; now = 1700012882."}]
---
# Security Drill: Token expiry arithmetic #51

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
