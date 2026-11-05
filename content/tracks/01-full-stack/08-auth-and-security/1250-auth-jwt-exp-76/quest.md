---
slug: "auth-jwt-exp-76"
title: "Security Drill: Token expiry arithmetic #76"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700053250` and `exp: 1700056850`. The server's clock reads `1700056849` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it has expired","No, it is not valid yet","It depends on the signature only","Yes"],"answer":3,"explanation":"exp + leeway = 1700056880; now = 1700056849."},{"prompt":"A token has `iat: 1700072579` and `exp: 1700158979`. The server's clock reads `1700158989` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it has expired","No, it is not valid yet","Yes"],"answer":3,"explanation":"exp + leeway = 1700159039; now = 1700158989."},{"prompt":"A token has `iat: 1700066047` and `exp: 1700066947`. The server's clock reads `1700066827` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["Yes","No, it is not valid yet","No, it has expired","It depends on the signature only"],"answer":0,"explanation":"exp + leeway = 1700066947; now = 1700066827."},{"prompt":"A token has `iat: 1700094562` and `exp: 1700098162`. The server's clock reads `1700098207` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it is not valid yet","Yes","It depends on the signature only","No, it has expired"],"answer":1,"explanation":"exp + leeway = 1700098222; now = 1700098207."},{"prompt":"A token has `iat: 1700019947` and `exp: 1700020247`. The server's clock reads `1700020246` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["It depends on the signature only","Yes","No, it is not valid yet","No, it has expired"],"answer":1,"explanation":"exp + leeway = 1700020307; now = 1700020246."}]
---
# Security Drill: Token expiry arithmetic #76

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
