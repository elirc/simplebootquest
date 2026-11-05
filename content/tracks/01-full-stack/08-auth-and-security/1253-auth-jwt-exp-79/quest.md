---
slug: "auth-jwt-exp-79"
title: "Security Drill: Token expiry arithmetic #79"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700083125` and `exp: 1700169525`. The server's clock reads `1700169570` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it is not valid yet","It depends on the signature only","Yes","No, it has expired"],"answer":2,"explanation":"exp + leeway = 1700169585; now = 1700169570."},{"prompt":"A token has `iat: 1700056365` and `exp: 1700056665`. The server's clock reads `1700056710` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["Yes","It depends on the signature only","No, it has expired","No, it is not valid yet"],"answer":2,"explanation":"exp + leeway = 1700056695; now = 1700056710."},{"prompt":"A token has `iat: 1700081028` and `exp: 1700167428`. The server's clock reads `1700167427` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["Yes","No, it is not valid yet","It depends on the signature only","No, it has expired"],"answer":0,"explanation":"exp + leeway = 1700167458; now = 1700167427."},{"prompt":"A token has `iat: 1700094422` and `exp: 1700095322`. The server's clock reads `1700095322` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it has expired","Yes","No, it is not valid yet"],"answer":1,"explanation":"exp + leeway = 1700095322; now = 1700095322."},{"prompt":"A token has `iat: 1700087520` and `exp: 1700091120`. The server's clock reads `1700091130` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it is not valid yet","Yes","No, it has expired"],"answer":3,"explanation":"exp + leeway = 1700091120; now = 1700091130."}]
---
# Security Drill: Token expiry arithmetic #79

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
