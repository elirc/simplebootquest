---
slug: "auth-jwt-exp-90"
title: "Security Drill: Token expiry arithmetic #90"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700048370` and `exp: 1700048670`. The server's clock reads `1700048550` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["Yes","It depends on the signature only","No, it is not valid yet","No, it has expired"],"answer":0,"explanation":"exp + leeway = 1700048700; now = 1700048550."},{"prompt":"A token has `iat: 1700098816` and `exp: 1700185216`. The server's clock reads `1700185096` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["Yes","No, it is not valid yet","No, it has expired","It depends on the signature only"],"answer":0,"explanation":"exp + leeway = 1700185246; now = 1700185096."},{"prompt":"A token has `iat: 1700039322` and `exp: 1700042922`. The server's clock reads `1700043012` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it is not valid yet","No, it has expired","It depends on the signature only","Yes"],"answer":1,"explanation":"exp + leeway = 1700042982; now = 1700043012."},{"prompt":"A token has `iat: 1700000893` and `exp: 1700001193`. The server's clock reads `1700001073` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["Yes","No, it is not valid yet","No, it has expired","It depends on the signature only"],"answer":0,"explanation":"exp + leeway = 1700001223; now = 1700001073."},{"prompt":"A token has `iat: 1700040697` and `exp: 1700041597`. The server's clock reads `1700041477` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it is not valid yet","No, it has expired","Yes"],"answer":3,"explanation":"exp + leeway = 1700041657; now = 1700041477."}]
---
# Security Drill: Token expiry arithmetic #90

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
