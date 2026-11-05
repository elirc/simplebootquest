---
slug: "auth-jwt-exp-74"
title: "Security Drill: Token expiry arithmetic #74"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700012342` and `exp: 1700015942`. The server's clock reads `1700015987` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["Yes","No, it is not valid yet","No, it has expired","It depends on the signature only"],"answer":0,"explanation":"exp + leeway = 1700016002; now = 1700015987."},{"prompt":"A token has `iat: 1700079866` and `exp: 1700166266`. The server's clock reads `1700166265` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["Yes","No, it has expired","It depends on the signature only","No, it is not valid yet"],"answer":0,"explanation":"exp + leeway = 1700166266; now = 1700166265."},{"prompt":"A token has `iat: 1700072523` and `exp: 1700073423`. The server's clock reads `1700073513` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["It depends on the signature only","Yes","No, it is not valid yet","No, it has expired"],"answer":3,"explanation":"exp + leeway = 1700073453; now = 1700073513."},{"prompt":"A token has `iat: 1700011833` and `exp: 1700098233`. The server's clock reads `1700098232` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["It depends on the signature only","Yes","No, it is not valid yet","No, it has expired"],"answer":1,"explanation":"exp + leeway = 1700098263; now = 1700098232."},{"prompt":"A token has `iat: 1700065028` and `exp: 1700151428`. The server's clock reads `1700151428` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["It depends on the signature only","Yes","No, it has expired","No, it is not valid yet"],"answer":2,"explanation":"exp + leeway = 1700151428; now = 1700151428."}]
---
# Security Drill: Token expiry arithmetic #74

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
