---
slug: "auth-jwt-exp-43"
title: "Security Drill: Token expiry arithmetic #43"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700075614` and `exp: 1700076514`. The server's clock reads `1700076513` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it is not valid yet","Yes","No, it has expired","It depends on the signature only"],"answer":1,"explanation":"exp + leeway = 1700076544; now = 1700076513."},{"prompt":"A token has `iat: 1700006210` and `exp: 1700007110`. The server's clock reads `1700007155` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it is not valid yet","No, it has expired","Yes"],"answer":2,"explanation":"exp + leeway = 1700007110; now = 1700007155."},{"prompt":"A token has `iat: 1700063634` and `exp: 1700063934`. The server's clock reads `1700063979` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it has expired","Yes","No, it is not valid yet","It depends on the signature only"],"answer":1,"explanation":"exp + leeway = 1700063994; now = 1700063979."},{"prompt":"A token has `iat: 1700086990` and `exp: 1700087290`. The server's clock reads `1700087290` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["Yes","It depends on the signature only","No, it has expired","No, it is not valid yet"],"answer":0,"explanation":"exp + leeway = 1700087320; now = 1700087290."},{"prompt":"A token has `iat: 1700036596` and `exp: 1700122996`. The server's clock reads `1700123041` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it is not valid yet","It depends on the signature only","No, it has expired","Yes"],"answer":2,"explanation":"exp + leeway = 1700122996; now = 1700123041."}]
---
# Security Drill: Token expiry arithmetic #43

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
