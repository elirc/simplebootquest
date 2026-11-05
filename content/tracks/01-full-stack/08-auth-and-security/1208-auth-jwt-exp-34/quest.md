---
slug: "auth-jwt-exp-34"
title: "Security Drill: Token expiry arithmetic #34"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700054230` and `exp: 1700054530`. The server's clock reads `1700054410` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it is not valid yet","It depends on the signature only","No, it has expired","Yes"],"answer":3,"explanation":"exp + leeway = 1700054560; now = 1700054410."},{"prompt":"A token has `iat: 1700002964` and `exp: 1700089364`. The server's clock reads `1700089374` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it is not valid yet","No, it has expired","Yes","It depends on the signature only"],"answer":2,"explanation":"exp + leeway = 1700089424; now = 1700089374."},{"prompt":"A token has `iat: 1700022784` and `exp: 1700109184`. The server's clock reads `1700109194` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it has expired","It depends on the signature only","Yes","No, it is not valid yet"],"answer":2,"explanation":"exp + leeway = 1700109214; now = 1700109194."},{"prompt":"A token has `iat: 1700009121` and `exp: 1700009421`. The server's clock reads `1700009511` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it has expired","Yes","No, it is not valid yet","It depends on the signature only"],"answer":0,"explanation":"exp + leeway = 1700009421; now = 1700009511."},{"prompt":"A token has `iat: 1700071913` and `exp: 1700158313`. The server's clock reads `1700158403` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["It depends on the signature only","Yes","No, it has expired","No, it is not valid yet"],"answer":2,"explanation":"exp + leeway = 1700158313; now = 1700158403."}]
---
# Security Drill: Token expiry arithmetic #34

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
