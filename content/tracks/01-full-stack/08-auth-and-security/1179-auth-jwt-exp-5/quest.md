---
slug: "auth-jwt-exp-5"
title: "Security Drill: Token expiry arithmetic #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700096769` and `exp: 1700183169`. The server's clock reads `1700183169` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it is not valid yet","No, it has expired","Yes"],"answer":3,"explanation":"exp + leeway = 1700183229; now = 1700183169."},{"prompt":"A token has `iat: 1700012639` and `exp: 1700099039`. The server's clock reads `1700099049` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it is not valid yet","Yes","No, it has expired","It depends on the signature only"],"answer":1,"explanation":"exp + leeway = 1700099099; now = 1700099049."},{"prompt":"A token has `iat: 1700030595` and `exp: 1700034195`. The server's clock reads `1700034194` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it has expired","Yes","It depends on the signature only","No, it is not valid yet"],"answer":1,"explanation":"exp + leeway = 1700034255; now = 1700034194."},{"prompt":"A token has `iat: 1700075207` and `exp: 1700076107`. The server's clock reads `1700076106` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it has expired","Yes","No, it is not valid yet","It depends on the signature only"],"answer":1,"explanation":"exp + leeway = 1700076137; now = 1700076106."},{"prompt":"A token has `iat: 1700028941` and `exp: 1700032541`. The server's clock reads `1700032551` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["It depends on the signature only","Yes","No, it is not valid yet","No, it has expired"],"answer":1,"explanation":"exp + leeway = 1700032601; now = 1700032551."}]
---
# Security Drill: Token expiry arithmetic #5

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
