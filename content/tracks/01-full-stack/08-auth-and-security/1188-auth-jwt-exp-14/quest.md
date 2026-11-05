---
slug: "auth-jwt-exp-14"
title: "Security Drill: Token expiry arithmetic #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700072124` and `exp: 1700073024`. The server's clock reads `1700073034` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it is not valid yet","No, it has expired","Yes"],"answer":2,"explanation":"exp + leeway = 1700073024; now = 1700073034."},{"prompt":"A token has `iat: 1700090251` and `exp: 1700176651`. The server's clock reads `1700176651` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it has expired","It depends on the signature only","Yes","No, it is not valid yet"],"answer":2,"explanation":"exp + leeway = 1700176711; now = 1700176651."},{"prompt":"A token has `iat: 1700052868` and `exp: 1700056468`. The server's clock reads `1700056467` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["It depends on the signature only","Yes","No, it is not valid yet","No, it has expired"],"answer":1,"explanation":"exp + leeway = 1700056468; now = 1700056467."},{"prompt":"A token has `iat: 1700008577` and `exp: 1700012177`. The server's clock reads `1700012176` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["Yes","No, it is not valid yet","No, it has expired","It depends on the signature only"],"answer":0,"explanation":"exp + leeway = 1700012207; now = 1700012176."},{"prompt":"A token has `iat: 1700095173` and `exp: 1700095473`. The server's clock reads `1700095483` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it has expired","Yes","No, it is not valid yet","It depends on the signature only"],"answer":1,"explanation":"exp + leeway = 1700095533; now = 1700095483."}]
---
# Security Drill: Token expiry arithmetic #14

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
