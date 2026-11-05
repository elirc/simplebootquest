---
slug: "auth-jwt-exp-60"
title: "Security Drill: Token expiry arithmetic #60"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700028281` and `exp: 1700114681`. The server's clock reads `1700114681` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["It depends on the signature only","Yes","No, it has expired","No, it is not valid yet"],"answer":2,"explanation":"exp + leeway = 1700114681; now = 1700114681."},{"prompt":"A token has `iat: 1700097410` and `exp: 1700101010`. The server's clock reads `1700101010` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it has expired","It depends on the signature only","Yes","No, it is not valid yet"],"answer":2,"explanation":"exp + leeway = 1700101040; now = 1700101010."},{"prompt":"A token has `iat: 1700053530` and `exp: 1700057130`. The server's clock reads `1700057010` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["Yes","No, it has expired","It depends on the signature only","No, it is not valid yet"],"answer":0,"explanation":"exp + leeway = 1700057130; now = 1700057010."},{"prompt":"A token has `iat: 1700098778` and `exp: 1700185178`. The server's clock reads `1700185178` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it is not valid yet","No, it has expired","Yes","It depends on the signature only"],"answer":1,"explanation":"exp + leeway = 1700185178; now = 1700185178."},{"prompt":"A token has `iat: 1700013723` and `exp: 1700100123`. The server's clock reads `1700100133` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it has expired","Yes","It depends on the signature only","No, it is not valid yet"],"answer":1,"explanation":"exp + leeway = 1700100183; now = 1700100133."}]
---
# Security Drill: Token expiry arithmetic #60

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
