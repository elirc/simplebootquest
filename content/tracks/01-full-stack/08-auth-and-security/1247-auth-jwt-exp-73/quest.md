---
slug: "auth-jwt-exp-73"
title: "Security Drill: Token expiry arithmetic #73"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700054947` and `exp: 1700055847`. The server's clock reads `1700055892` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it has expired","It depends on the signature only","Yes","No, it is not valid yet"],"answer":2,"explanation":"exp + leeway = 1700055907; now = 1700055892."},{"prompt":"A token has `iat: 1700089834` and `exp: 1700176234`. The server's clock reads `1700176244` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it has expired","It depends on the signature only","No, it is not valid yet","Yes"],"answer":3,"explanation":"exp + leeway = 1700176264; now = 1700176244."},{"prompt":"A token has `iat: 1700016559` and `exp: 1700020159`. The server's clock reads `1700020249` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it is not valid yet","No, it has expired","Yes","It depends on the signature only"],"answer":1,"explanation":"exp + leeway = 1700020189; now = 1700020249."},{"prompt":"A token has `iat: 1700009203` and `exp: 1700009503`. The server's clock reads `1700009383` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it has expired","No, it is not valid yet","It depends on the signature only","Yes"],"answer":3,"explanation":"exp + leeway = 1700009563; now = 1700009383."},{"prompt":"A token has `iat: 1700074320` and `exp: 1700075220`. The server's clock reads `1700075219` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["Yes","It depends on the signature only","No, it is not valid yet","No, it has expired"],"answer":0,"explanation":"exp + leeway = 1700075250; now = 1700075219."}]
---
# Security Drill: Token expiry arithmetic #73

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
