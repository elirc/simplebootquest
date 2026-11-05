---
slug: "auth-jwt-exp-81"
title: "Security Drill: Token expiry arithmetic #81"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700029268` and `exp: 1700115668`. The server's clock reads `1700115667` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["Yes","No, it has expired","No, it is not valid yet","It depends on the signature only"],"answer":0,"explanation":"exp + leeway = 1700115728; now = 1700115667."},{"prompt":"A token has `iat: 1700007466` and `exp: 1700008366`. The server's clock reads `1700008366` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["Yes","No, it has expired","No, it is not valid yet","It depends on the signature only"],"answer":0,"explanation":"exp + leeway = 1700008426; now = 1700008366."},{"prompt":"A token has `iat: 1700085671` and `exp: 1700086571`. The server's clock reads `1700086581` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["Yes","No, it is not valid yet","No, it has expired","It depends on the signature only"],"answer":2,"explanation":"exp + leeway = 1700086571; now = 1700086581."},{"prompt":"A token has `iat: 1700096212` and `exp: 1700097112`. The server's clock reads `1700097122` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it has expired","It depends on the signature only","Yes","No, it is not valid yet"],"answer":2,"explanation":"exp + leeway = 1700097142; now = 1700097122."},{"prompt":"A token has `iat: 1700014074` and `exp: 1700014374`. The server's clock reads `1700014419` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it is not valid yet","No, it has expired","It depends on the signature only","Yes"],"answer":3,"explanation":"exp + leeway = 1700014434; now = 1700014419."}]
---
# Security Drill: Token expiry arithmetic #81

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
