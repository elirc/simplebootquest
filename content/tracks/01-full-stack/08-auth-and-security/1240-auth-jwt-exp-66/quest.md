---
slug: "auth-jwt-exp-66"
title: "Security Drill: Token expiry arithmetic #66"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700074442` and `exp: 1700160842`. The server's clock reads `1700160887` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it is not valid yet","Yes","No, it has expired","It depends on the signature only"],"answer":1,"explanation":"exp + leeway = 1700160902; now = 1700160887."},{"prompt":"A token has `iat: 1700051054` and `exp: 1700051954`. The server's clock reads `1700051834` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it has expired","It depends on the signature only","No, it is not valid yet","Yes"],"answer":3,"explanation":"exp + leeway = 1700052014; now = 1700051834."},{"prompt":"A token has `iat: 1700058669` and `exp: 1700059569`. The server's clock reads `1700059449` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["Yes","No, it is not valid yet","It depends on the signature only","No, it has expired"],"answer":0,"explanation":"exp + leeway = 1700059629; now = 1700059449."},{"prompt":"A token has `iat: 1700098784` and `exp: 1700099084`. The server's clock reads `1700099174` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it is not valid yet","No, it has expired","Yes"],"answer":2,"explanation":"exp + leeway = 1700099144; now = 1700099174."},{"prompt":"A token has `iat: 1700006460` and `exp: 1700092860`. The server's clock reads `1700092950` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it is not valid yet","Yes","No, it has expired","It depends on the signature only"],"answer":2,"explanation":"exp + leeway = 1700092890; now = 1700092950."}]
---
# Security Drill: Token expiry arithmetic #66

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
