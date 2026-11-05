---
slug: "auth-jwt-exp-82"
title: "Security Drill: Token expiry arithmetic #82"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700089307` and `exp: 1700175707`. The server's clock reads `1700175717` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it has expired","Yes","It depends on the signature only","No, it is not valid yet"],"answer":1,"explanation":"exp + leeway = 1700175737; now = 1700175717."},{"prompt":"A token has `iat: 1700039584` and `exp: 1700039884`. The server's clock reads `1700039884` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["Yes","It depends on the signature only","No, it has expired","No, it is not valid yet"],"answer":0,"explanation":"exp + leeway = 1700039914; now = 1700039884."},{"prompt":"A token has `iat: 1700005742` and `exp: 1700006042`. The server's clock reads `1700006042` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["It depends on the signature only","Yes","No, it is not valid yet","No, it has expired"],"answer":3,"explanation":"exp + leeway = 1700006042; now = 1700006042."},{"prompt":"A token has `iat: 1700082265` and `exp: 1700085865`. The server's clock reads `1700085864` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it is not valid yet","No, it has expired","Yes"],"answer":3,"explanation":"exp + leeway = 1700085925; now = 1700085864."},{"prompt":"A token has `iat: 1700015604` and `exp: 1700102004`. The server's clock reads `1700102003` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it has expired","It depends on the signature only","No, it is not valid yet","Yes"],"answer":3,"explanation":"exp + leeway = 1700102034; now = 1700102003."}]
---
# Security Drill: Token expiry arithmetic #82

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
