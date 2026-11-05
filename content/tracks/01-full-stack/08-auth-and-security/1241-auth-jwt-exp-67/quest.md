---
slug: "auth-jwt-exp-67"
title: "Security Drill: Token expiry arithmetic #67"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700092374` and `exp: 1700092674`. The server's clock reads `1700092719` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["Yes","It depends on the signature only","No, it has expired","No, it is not valid yet"],"answer":0,"explanation":"exp + leeway = 1700092734; now = 1700092719."},{"prompt":"A token has `iat: 1700019325` and `exp: 1700020225`. The server's clock reads `1700020235` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it has expired","No, it is not valid yet","Yes"],"answer":3,"explanation":"exp + leeway = 1700020255; now = 1700020235."},{"prompt":"A token has `iat: 1700096208` and `exp: 1700182608`. The server's clock reads `1700182653` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["Yes","No, it is not valid yet","No, it has expired","It depends on the signature only"],"answer":0,"explanation":"exp + leeway = 1700182668; now = 1700182653."},{"prompt":"A token has `iat: 1700012821` and `exp: 1700013121`. The server's clock reads `1700013131` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["It depends on the signature only","Yes","No, it is not valid yet","No, it has expired"],"answer":1,"explanation":"exp + leeway = 1700013151; now = 1700013131."},{"prompt":"A token has `iat: 1700085485` and `exp: 1700086385`. The server's clock reads `1700086475` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it has expired","Yes","It depends on the signature only","No, it is not valid yet"],"answer":0,"explanation":"exp + leeway = 1700086445; now = 1700086475."}]
---
# Security Drill: Token expiry arithmetic #67

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
