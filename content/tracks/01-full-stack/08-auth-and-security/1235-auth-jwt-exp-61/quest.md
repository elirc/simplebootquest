---
slug: "auth-jwt-exp-61"
title: "Security Drill: Token expiry arithmetic #61"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700058526` and `exp: 1700144926`. The server's clock reads `1700144936` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it has expired","It depends on the signature only","Yes","No, it is not valid yet"],"answer":2,"explanation":"exp + leeway = 1700144986; now = 1700144936."},{"prompt":"A token has `iat: 1700041550` and `exp: 1700042450`. The server's clock reads `1700042460` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it has expired","It depends on the signature only","Yes","No, it is not valid yet"],"answer":2,"explanation":"exp + leeway = 1700042480; now = 1700042460."},{"prompt":"A token has `iat: 1700018223` and `exp: 1700019123`. The server's clock reads `1700019123` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["Yes","No, it is not valid yet","No, it has expired","It depends on the signature only"],"answer":2,"explanation":"exp + leeway = 1700019123; now = 1700019123."},{"prompt":"A token has `iat: 1700003735` and `exp: 1700004035`. The server's clock reads `1700004080` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["Yes","No, it has expired","No, it is not valid yet","It depends on the signature only"],"answer":1,"explanation":"exp + leeway = 1700004065; now = 1700004080."},{"prompt":"A token has `iat: 1700058955` and `exp: 1700059855`. The server's clock reads `1700059945` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it is not valid yet","It depends on the signature only","No, it has expired","Yes"],"answer":2,"explanation":"exp + leeway = 1700059885; now = 1700059945."}]
---
# Security Drill: Token expiry arithmetic #61

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
