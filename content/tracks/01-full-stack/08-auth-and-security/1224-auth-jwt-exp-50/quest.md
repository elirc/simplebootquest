---
slug: "auth-jwt-exp-50"
title: "Security Drill: Token expiry arithmetic #50"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700075530` and `exp: 1700076430`. The server's clock reads `1700076430` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it has expired","No, it is not valid yet","Yes"],"answer":3,"explanation":"exp + leeway = 1700076460; now = 1700076430."},{"prompt":"A token has `iat: 1700016974` and `exp: 1700020574`. The server's clock reads `1700020574` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["It depends on the signature only","Yes","No, it has expired","No, it is not valid yet"],"answer":2,"explanation":"exp + leeway = 1700020574; now = 1700020574."},{"prompt":"A token has `iat: 1700052311` and `exp: 1700052611`. The server's clock reads `1700052701` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it has expired","It depends on the signature only","Yes","No, it is not valid yet"],"answer":0,"explanation":"exp + leeway = 1700052671; now = 1700052701."},{"prompt":"A token has `iat: 1700021433` and `exp: 1700025033`. The server's clock reads `1700025078` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it has expired","Yes","It depends on the signature only","No, it is not valid yet"],"answer":0,"explanation":"exp + leeway = 1700025033; now = 1700025078."},{"prompt":"A token has `iat: 1700083335` and `exp: 1700083635`. The server's clock reads `1700083635` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it has expired","No, it is not valid yet","It depends on the signature only","Yes"],"answer":0,"explanation":"exp + leeway = 1700083635; now = 1700083635."}]
---
# Security Drill: Token expiry arithmetic #50

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
