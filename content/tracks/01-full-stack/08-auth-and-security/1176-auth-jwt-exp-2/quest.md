---
slug: "auth-jwt-exp-2"
title: "Security Drill: Token expiry arithmetic #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700063389` and `exp: 1700064289`. The server's clock reads `1700064334` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it is not valid yet","Yes","It depends on the signature only","No, it has expired"],"answer":3,"explanation":"exp + leeway = 1700064289; now = 1700064334."},{"prompt":"A token has `iat: 1700039448` and `exp: 1700039748`. The server's clock reads `1700039748` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["Yes","No, it has expired","No, it is not valid yet","It depends on the signature only"],"answer":0,"explanation":"exp + leeway = 1700039808; now = 1700039748."},{"prompt":"A token has `iat: 1700074354` and `exp: 1700074654`. The server's clock reads `1700074534` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it has expired","No, it is not valid yet","Yes","It depends on the signature only"],"answer":2,"explanation":"exp + leeway = 1700074654; now = 1700074534."},{"prompt":"A token has `iat: 1700095162` and `exp: 1700096062`. The server's clock reads `1700095942` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["Yes","No, it is not valid yet","It depends on the signature only","No, it has expired"],"answer":0,"explanation":"exp + leeway = 1700096122; now = 1700095942."},{"prompt":"A token has `iat: 1700056663` and `exp: 1700143063`. The server's clock reads `1700143063` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["Yes","It depends on the signature only","No, it has expired","No, it is not valid yet"],"answer":0,"explanation":"exp + leeway = 1700143093; now = 1700143063."}]
---
# Security Drill: Token expiry arithmetic #2

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
