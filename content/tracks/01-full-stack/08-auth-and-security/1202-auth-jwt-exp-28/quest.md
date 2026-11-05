---
slug: "auth-jwt-exp-28"
title: "Security Drill: Token expiry arithmetic #28"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700056472` and `exp: 1700060072`. The server's clock reads `1700060082` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it is not valid yet","It depends on the signature only","Yes","No, it has expired"],"answer":2,"explanation":"exp + leeway = 1700060132; now = 1700060082."},{"prompt":"A token has `iat: 1700093039` and `exp: 1700093939`. The server's clock reads `1700093819` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it has expired","Yes","No, it is not valid yet","It depends on the signature only"],"answer":1,"explanation":"exp + leeway = 1700093939; now = 1700093819."},{"prompt":"A token has `iat: 1700033610` and `exp: 1700037210`. The server's clock reads `1700037090` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it is not valid yet","No, it has expired","Yes","It depends on the signature only"],"answer":2,"explanation":"exp + leeway = 1700037210; now = 1700037090."},{"prompt":"A token has `iat: 1700052238` and `exp: 1700052538`. The server's clock reads `1700052538` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["Yes","No, it is not valid yet","It depends on the signature only","No, it has expired"],"answer":0,"explanation":"exp + leeway = 1700052598; now = 1700052538."},{"prompt":"A token has `iat: 1700008456` and `exp: 1700012056`. The server's clock reads `1700012056` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it has expired","It depends on the signature only","Yes","No, it is not valid yet"],"answer":2,"explanation":"exp + leeway = 1700012116; now = 1700012056."}]
---
# Security Drill: Token expiry arithmetic #28

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
