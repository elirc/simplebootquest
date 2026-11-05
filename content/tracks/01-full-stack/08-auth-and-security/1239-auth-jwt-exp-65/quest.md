---
slug: "auth-jwt-exp-65"
title: "Security Drill: Token expiry arithmetic #65"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700007018` and `exp: 1700093418`. The server's clock reads `1700093418` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it is not valid yet","No, it has expired","Yes"],"answer":2,"explanation":"exp + leeway = 1700093418; now = 1700093418."},{"prompt":"A token has `iat: 1700004635` and `exp: 1700004935`. The server's clock reads `1700004980` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["Yes","No, it has expired","It depends on the signature only","No, it is not valid yet"],"answer":1,"explanation":"exp + leeway = 1700004935; now = 1700004980."},{"prompt":"A token has `iat: 1700052934` and `exp: 1700056534`. The server's clock reads `1700056579` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["Yes","No, it is not valid yet","No, it has expired","It depends on the signature only"],"answer":2,"explanation":"exp + leeway = 1700056564; now = 1700056579."},{"prompt":"A token has `iat: 1700081660` and `exp: 1700081960`. The server's clock reads `1700081960` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["Yes","No, it is not valid yet","No, it has expired","It depends on the signature only"],"answer":0,"explanation":"exp + leeway = 1700082020; now = 1700081960."},{"prompt":"A token has `iat: 1700020877` and `exp: 1700107277`. The server's clock reads `1700107277` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it has expired","Yes","No, it is not valid yet"],"answer":1,"explanation":"exp + leeway = 1700107277; now = 1700107277."}]
---
# Security Drill: Token expiry arithmetic #65

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
