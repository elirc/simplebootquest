---
slug: "auth-jwt-exp-63"
title: "Security Drill: Token expiry arithmetic #63"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700089085` and `exp: 1700175485`. The server's clock reads `1700175485` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it is not valid yet","Yes","No, it has expired","It depends on the signature only"],"answer":2,"explanation":"exp + leeway = 1700175485; now = 1700175485."},{"prompt":"A token has `iat: 1700012163` and `exp: 1700098563`. The server's clock reads `1700098562` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it has expired","Yes","No, it is not valid yet","It depends on the signature only"],"answer":1,"explanation":"exp + leeway = 1700098563; now = 1700098562."},{"prompt":"A token has `iat: 1700092727` and `exp: 1700093027`. The server's clock reads `1700093027` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it is not valid yet","It depends on the signature only","Yes","No, it has expired"],"answer":2,"explanation":"exp + leeway = 1700093057; now = 1700093027."},{"prompt":"A token has `iat: 1700022677` and `exp: 1700109077`. The server's clock reads `1700109087` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it has expired","Yes","No, it is not valid yet"],"answer":2,"explanation":"exp + leeway = 1700109137; now = 1700109087."},{"prompt":"A token has `iat: 1700097859` and `exp: 1700101459`. The server's clock reads `1700101459` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["It depends on the signature only","Yes","No, it has expired","No, it is not valid yet"],"answer":1,"explanation":"exp + leeway = 1700101489; now = 1700101459."}]
---
# Security Drill: Token expiry arithmetic #63

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
