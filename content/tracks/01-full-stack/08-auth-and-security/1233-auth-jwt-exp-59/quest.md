---
slug: "auth-jwt-exp-59"
title: "Security Drill: Token expiry arithmetic #59"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700003217` and `exp: 1700089617`. The server's clock reads `1700089497` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it has expired","No, it is not valid yet","Yes"],"answer":3,"explanation":"exp + leeway = 1700089677; now = 1700089497."},{"prompt":"A token has `iat: 1700095387` and `exp: 1700098987`. The server's clock reads `1700098986` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it is not valid yet","It depends on the signature only","No, it has expired","Yes"],"answer":3,"explanation":"exp + leeway = 1700098987; now = 1700098986."},{"prompt":"A token has `iat: 1700072785` and `exp: 1700073685`. The server's clock reads `1700073684` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["Yes","It depends on the signature only","No, it is not valid yet","No, it has expired"],"answer":0,"explanation":"exp + leeway = 1700073715; now = 1700073684."},{"prompt":"A token has `iat: 1700047873` and `exp: 1700048773`. The server's clock reads `1700048783` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["Yes","No, it has expired","No, it is not valid yet","It depends on the signature only"],"answer":1,"explanation":"exp + leeway = 1700048773; now = 1700048783."},{"prompt":"A token has `iat: 1700010133` and `exp: 1700013733`. The server's clock reads `1700013613` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it is not valid yet","Yes","No, it has expired"],"answer":2,"explanation":"exp + leeway = 1700013763; now = 1700013613."}]
---
# Security Drill: Token expiry arithmetic #59

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
