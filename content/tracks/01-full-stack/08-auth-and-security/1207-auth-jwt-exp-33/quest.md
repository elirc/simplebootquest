---
slug: "auth-jwt-exp-33"
title: "Security Drill: Token expiry arithmetic #33"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700060714` and `exp: 1700061614`. The server's clock reads `1700061704` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it has expired","No, it is not valid yet","Yes"],"answer":1,"explanation":"exp + leeway = 1700061674; now = 1700061704."},{"prompt":"A token has `iat: 1700031981` and `exp: 1700118381`. The server's clock reads `1700118391` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["Yes","It depends on the signature only","No, it is not valid yet","No, it has expired"],"answer":0,"explanation":"exp + leeway = 1700118441; now = 1700118391."},{"prompt":"A token has `iat: 1700010236` and `exp: 1700011136`. The server's clock reads `1700011135` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["It depends on the signature only","Yes","No, it has expired","No, it is not valid yet"],"answer":1,"explanation":"exp + leeway = 1700011136; now = 1700011135."},{"prompt":"A token has `iat: 1700079354` and `exp: 1700082954`. The server's clock reads `1700083044` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["Yes","No, it has expired","No, it is not valid yet","It depends on the signature only"],"answer":1,"explanation":"exp + leeway = 1700083014; now = 1700083044."},{"prompt":"A token has `iat: 1700054018` and `exp: 1700140418`. The server's clock reads `1700140428` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it is not valid yet","It depends on the signature only","No, it has expired","Yes"],"answer":2,"explanation":"exp + leeway = 1700140418; now = 1700140428."}]
---
# Security Drill: Token expiry arithmetic #33

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
