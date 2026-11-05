---
slug: "auth-jwt-exp-20"
title: "Security Drill: Token expiry arithmetic #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700075042` and `exp: 1700075942`. The server's clock reads `1700075822` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it is not valid yet","No, it has expired","It depends on the signature only","Yes"],"answer":3,"explanation":"exp + leeway = 1700075942; now = 1700075822."},{"prompt":"A token has `iat: 1700047644` and `exp: 1700047944`. The server's clock reads `1700047954` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it is not valid yet","Yes","It depends on the signature only","No, it has expired"],"answer":1,"explanation":"exp + leeway = 1700047974; now = 1700047954."},{"prompt":"A token has `iat: 1700016145` and `exp: 1700017045`. The server's clock reads `1700017044` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["Yes","It depends on the signature only","No, it has expired","No, it is not valid yet"],"answer":0,"explanation":"exp + leeway = 1700017075; now = 1700017044."},{"prompt":"A token has `iat: 1700021318` and `exp: 1700022218`. The server's clock reads `1700022308` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["Yes","It depends on the signature only","No, it is not valid yet","No, it has expired"],"answer":3,"explanation":"exp + leeway = 1700022218; now = 1700022308."},{"prompt":"A token has `iat: 1700050138` and `exp: 1700053738`. The server's clock reads `1700053748` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it has expired","Yes","It depends on the signature only","No, it is not valid yet"],"answer":0,"explanation":"exp + leeway = 1700053738; now = 1700053748."}]
---
# Security Drill: Token expiry arithmetic #20

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
