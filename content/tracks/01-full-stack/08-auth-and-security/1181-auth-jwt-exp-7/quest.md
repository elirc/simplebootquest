---
slug: "auth-jwt-exp-7"
title: "Security Drill: Token expiry arithmetic #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700048338` and `exp: 1700051938`. The server's clock reads `1700051948` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it has expired","Yes","No, it is not valid yet"],"answer":2,"explanation":"exp + leeway = 1700051968; now = 1700051948."},{"prompt":"A token has `iat: 1700018578` and `exp: 1700019478`. The server's clock reads `1700019523` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["Yes","It depends on the signature only","No, it has expired","No, it is not valid yet"],"answer":0,"explanation":"exp + leeway = 1700019538; now = 1700019523."},{"prompt":"A token has `iat: 1700040136` and `exp: 1700041036`. The server's clock reads `1700041046` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it has expired","It depends on the signature only","No, it is not valid yet","Yes"],"answer":3,"explanation":"exp + leeway = 1700041066; now = 1700041046."},{"prompt":"A token has `iat: 1700014547` and `exp: 1700014847`. The server's clock reads `1700014937` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it is not valid yet","No, it has expired","Yes","It depends on the signature only"],"answer":1,"explanation":"exp + leeway = 1700014847; now = 1700014937."},{"prompt":"A token has `iat: 1700044641` and `exp: 1700131041`. The server's clock reads `1700131040` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["Yes","No, it has expired","It depends on the signature only","No, it is not valid yet"],"answer":0,"explanation":"exp + leeway = 1700131071; now = 1700131040."}]
---
# Security Drill: Token expiry arithmetic #7

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
