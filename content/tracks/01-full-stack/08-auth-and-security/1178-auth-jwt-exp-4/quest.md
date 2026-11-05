---
slug: "auth-jwt-exp-4"
title: "Security Drill: Token expiry arithmetic #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700091577` and `exp: 1700091877`. The server's clock reads `1700091967` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["Yes","No, it has expired","No, it is not valid yet","It depends on the signature only"],"answer":1,"explanation":"exp + leeway = 1700091937; now = 1700091967."},{"prompt":"A token has `iat: 1700004814` and `exp: 1700005714`. The server's clock reads `1700005714` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it has expired","No, it is not valid yet","Yes","It depends on the signature only"],"answer":2,"explanation":"exp + leeway = 1700005774; now = 1700005714."},{"prompt":"A token has `iat: 1700019660` and `exp: 1700020560`. The server's clock reads `1700020570` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["Yes","No, it is not valid yet","It depends on the signature only","No, it has expired"],"answer":3,"explanation":"exp + leeway = 1700020560; now = 1700020570."},{"prompt":"A token has `iat: 1700018123` and `exp: 1700019023`. The server's clock reads `1700019068` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["It depends on the signature only","Yes","No, it is not valid yet","No, it has expired"],"answer":1,"explanation":"exp + leeway = 1700019083; now = 1700019068."},{"prompt":"A token has `iat: 1700007646` and `exp: 1700094046`. The server's clock reads `1700094056` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it is not valid yet","It depends on the signature only","Yes","No, it has expired"],"answer":2,"explanation":"exp + leeway = 1700094076; now = 1700094056."}]
---
# Security Drill: Token expiry arithmetic #4

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
