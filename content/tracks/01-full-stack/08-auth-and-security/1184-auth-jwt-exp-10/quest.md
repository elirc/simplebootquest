---
slug: "auth-jwt-exp-10"
title: "Security Drill: Token expiry arithmetic #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700005714` and `exp: 1700006614`. The server's clock reads `1700006494` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it is not valid yet","Yes","No, it has expired","It depends on the signature only"],"answer":1,"explanation":"exp + leeway = 1700006644; now = 1700006494."},{"prompt":"A token has `iat: 1700088808` and `exp: 1700092408`. The server's clock reads `1700092498` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it is not valid yet","No, it has expired","Yes","It depends on the signature only"],"answer":1,"explanation":"exp + leeway = 1700092408; now = 1700092498."},{"prompt":"A token has `iat: 1700041675` and `exp: 1700045275`. The server's clock reads `1700045155` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["Yes","No, it is not valid yet","It depends on the signature only","No, it has expired"],"answer":0,"explanation":"exp + leeway = 1700045305; now = 1700045155."},{"prompt":"A token has `iat: 1700036671` and `exp: 1700036971`. The server's clock reads `1700036970` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["Yes","It depends on the signature only","No, it has expired","No, it is not valid yet"],"answer":0,"explanation":"exp + leeway = 1700036971; now = 1700036970."},{"prompt":"A token has `iat: 1700003793` and `exp: 1700004693`. The server's clock reads `1700004693` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["Yes","It depends on the signature only","No, it has expired","No, it is not valid yet"],"answer":0,"explanation":"exp + leeway = 1700004723; now = 1700004693."}]
---
# Security Drill: Token expiry arithmetic #10

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
