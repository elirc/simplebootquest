---
slug: "auth-jwt-exp-45"
title: "Security Drill: Token expiry arithmetic #45"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700038162` and `exp: 1700124562`. The server's clock reads `1700124562` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it has expired","Yes","No, it is not valid yet","It depends on the signature only"],"answer":1,"explanation":"exp + leeway = 1700124592; now = 1700124562."},{"prompt":"A token has `iat: 1700058026` and `exp: 1700058926`. The server's clock reads `1700059016` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it has expired","It depends on the signature only","No, it is not valid yet","Yes"],"answer":0,"explanation":"exp + leeway = 1700058926; now = 1700059016."},{"prompt":"A token has `iat: 1700098166` and `exp: 1700099066`. The server's clock reads `1700099065` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["Yes","No, it is not valid yet","No, it has expired","It depends on the signature only"],"answer":0,"explanation":"exp + leeway = 1700099126; now = 1700099065."},{"prompt":"A token has `iat: 1700060303` and `exp: 1700146703`. The server's clock reads `1700146583` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it is not valid yet","No, it has expired","Yes"],"answer":3,"explanation":"exp + leeway = 1700146733; now = 1700146583."},{"prompt":"A token has `iat: 1700089740` and `exp: 1700090640`. The server's clock reads `1700090520` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["Yes","It depends on the signature only","No, it is not valid yet","No, it has expired"],"answer":0,"explanation":"exp + leeway = 1700090670; now = 1700090520."}]
---
# Security Drill: Token expiry arithmetic #45

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
