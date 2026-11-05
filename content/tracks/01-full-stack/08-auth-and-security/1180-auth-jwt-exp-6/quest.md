---
slug: "auth-jwt-exp-6"
title: "Security Drill: Token expiry arithmetic #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700043260` and `exp: 1700129660`. The server's clock reads `1700129660` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it is not valid yet","Yes","It depends on the signature only","No, it has expired"],"answer":1,"explanation":"exp + leeway = 1700129690; now = 1700129660."},{"prompt":"A token has `iat: 1700017573` and `exp: 1700021173`. The server's clock reads `1700021173` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["Yes","No, it has expired","No, it is not valid yet","It depends on the signature only"],"answer":0,"explanation":"exp + leeway = 1700021233; now = 1700021173."},{"prompt":"A token has `iat: 1700065291` and `exp: 1700068891`. The server's clock reads `1700068936` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it has expired","It depends on the signature only","No, it is not valid yet","Yes"],"answer":0,"explanation":"exp + leeway = 1700068891; now = 1700068936."},{"prompt":"A token has `iat: 1700024103` and `exp: 1700110503`. The server's clock reads `1700110503` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it is not valid yet","Yes","No, it has expired","It depends on the signature only"],"answer":2,"explanation":"exp + leeway = 1700110503; now = 1700110503."},{"prompt":"A token has `iat: 1700099378` and `exp: 1700100278`. The server's clock reads `1700100288` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["Yes","No, it has expired","No, it is not valid yet","It depends on the signature only"],"answer":1,"explanation":"exp + leeway = 1700100278; now = 1700100288."}]
---
# Security Drill: Token expiry arithmetic #6

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
