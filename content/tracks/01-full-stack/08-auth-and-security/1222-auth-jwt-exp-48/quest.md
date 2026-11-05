---
slug: "auth-jwt-exp-48"
title: "Security Drill: Token expiry arithmetic #48"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700035057` and `exp: 1700035957`. The server's clock reads `1700036047` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it has expired","Yes","No, it is not valid yet"],"answer":1,"explanation":"exp + leeway = 1700036017; now = 1700036047."},{"prompt":"A token has `iat: 1700017458` and `exp: 1700021058`. The server's clock reads `1700021148` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it is not valid yet","It depends on the signature only","No, it has expired","Yes"],"answer":2,"explanation":"exp + leeway = 1700021118; now = 1700021148."},{"prompt":"A token has `iat: 1700080735` and `exp: 1700084335`. The server's clock reads `1700084334` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it is not valid yet","No, it has expired","Yes","It depends on the signature only"],"answer":2,"explanation":"exp + leeway = 1700084395; now = 1700084334."},{"prompt":"A token has `iat: 1700014536` and `exp: 1700018136`. The server's clock reads `1700018226` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["Yes","No, it has expired","It depends on the signature only","No, it is not valid yet"],"answer":1,"explanation":"exp + leeway = 1700018196; now = 1700018226."},{"prompt":"A token has `iat: 1700001458` and `exp: 1700001758`. The server's clock reads `1700001758` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["Yes","No, it has expired","It depends on the signature only","No, it is not valid yet"],"answer":0,"explanation":"exp + leeway = 1700001788; now = 1700001758."}]
---
# Security Drill: Token expiry arithmetic #48

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
