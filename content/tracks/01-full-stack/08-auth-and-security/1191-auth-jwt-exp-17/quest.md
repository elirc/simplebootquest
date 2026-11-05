---
slug: "auth-jwt-exp-17"
title: "Security Drill: Token expiry arithmetic #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700018007` and `exp: 1700104407`. The server's clock reads `1700104497` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it is not valid yet","No, it has expired","Yes","It depends on the signature only"],"answer":1,"explanation":"exp + leeway = 1700104467; now = 1700104497."},{"prompt":"A token has `iat: 1700018878` and `exp: 1700022478`. The server's clock reads `1700022478` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["It depends on the signature only","Yes","No, it is not valid yet","No, it has expired"],"answer":1,"explanation":"exp + leeway = 1700022508; now = 1700022478."},{"prompt":"A token has `iat: 1700049936` and `exp: 1700050236`. The server's clock reads `1700050246` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it has expired","It depends on the signature only","Yes","No, it is not valid yet"],"answer":0,"explanation":"exp + leeway = 1700050236; now = 1700050246."},{"prompt":"A token has `iat: 1700002951` and `exp: 1700089351`. The server's clock reads `1700089361` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["Yes","No, it is not valid yet","No, it has expired","It depends on the signature only"],"answer":2,"explanation":"exp + leeway = 1700089351; now = 1700089361."},{"prompt":"A token has `iat: 1700020866` and `exp: 1700107266`. The server's clock reads `1700107146` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["It depends on the signature only","Yes","No, it is not valid yet","No, it has expired"],"answer":1,"explanation":"exp + leeway = 1700107296; now = 1700107146."}]
---
# Security Drill: Token expiry arithmetic #17

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
