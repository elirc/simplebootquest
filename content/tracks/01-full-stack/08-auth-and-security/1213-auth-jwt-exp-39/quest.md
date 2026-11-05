---
slug: "auth-jwt-exp-39"
title: "Security Drill: Token expiry arithmetic #39"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700076052` and `exp: 1700076352`. The server's clock reads `1700076397` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["Yes","No, it is not valid yet","It depends on the signature only","No, it has expired"],"answer":0,"explanation":"exp + leeway = 1700076412; now = 1700076397."},{"prompt":"A token has `iat: 1700020651` and `exp: 1700021551`. The server's clock reads `1700021596` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["Yes","No, it is not valid yet","It depends on the signature only","No, it has expired"],"answer":3,"explanation":"exp + leeway = 1700021581; now = 1700021596."},{"prompt":"A token has `iat: 1700000053` and `exp: 1700000953`. The server's clock reads `1700000953` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it has expired","No, it is not valid yet","Yes"],"answer":1,"explanation":"exp + leeway = 1700000953; now = 1700000953."},{"prompt":"A token has `iat: 1700048709` and `exp: 1700052309`. The server's clock reads `1700052189` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it has expired","Yes","It depends on the signature only","No, it is not valid yet"],"answer":1,"explanation":"exp + leeway = 1700052309; now = 1700052189."},{"prompt":"A token has `iat: 1700039968` and `exp: 1700043568`. The server's clock reads `1700043567` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it is not valid yet","It depends on the signature only","No, it has expired","Yes"],"answer":3,"explanation":"exp + leeway = 1700043598; now = 1700043567."}]
---
# Security Drill: Token expiry arithmetic #39

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
