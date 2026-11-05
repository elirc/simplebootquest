---
slug: "auth-jwt-exp-16"
title: "Security Drill: Token expiry arithmetic #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700079325` and `exp: 1700082925`. The server's clock reads `1700082970` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it has expired","It depends on the signature only","Yes","No, it is not valid yet"],"answer":0,"explanation":"exp + leeway = 1700082925; now = 1700082970."},{"prompt":"A token has `iat: 1700033244` and `exp: 1700036844`. The server's clock reads `1700036724` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it is not valid yet","Yes","No, it has expired"],"answer":2,"explanation":"exp + leeway = 1700036874; now = 1700036724."},{"prompt":"A token has `iat: 1700054010` and `exp: 1700054910`. The server's clock reads `1700054910` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it has expired","Yes","No, it is not valid yet","It depends on the signature only"],"answer":1,"explanation":"exp + leeway = 1700054970; now = 1700054910."},{"prompt":"A token has `iat: 1700028263` and `exp: 1700028563`. The server's clock reads `1700028563` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it has expired","Yes","No, it is not valid yet","It depends on the signature only"],"answer":1,"explanation":"exp + leeway = 1700028623; now = 1700028563."},{"prompt":"A token has `iat: 1700024288` and `exp: 1700110688`. The server's clock reads `1700110733` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it is not valid yet","No, it has expired","Yes"],"answer":3,"explanation":"exp + leeway = 1700110748; now = 1700110733."}]
---
# Security Drill: Token expiry arithmetic #16

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
