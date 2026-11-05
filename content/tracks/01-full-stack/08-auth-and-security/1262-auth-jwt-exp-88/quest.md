---
slug: "auth-jwt-exp-88"
title: "Security Drill: Token expiry arithmetic #88"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700066412` and `exp: 1700066712`. The server's clock reads `1700066722` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it is not valid yet","It depends on the signature only","No, it has expired","Yes"],"answer":3,"explanation":"exp + leeway = 1700066742; now = 1700066722."},{"prompt":"A token has `iat: 1700009570` and `exp: 1700095970`. The server's clock reads `1700095969` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it has expired","No, it is not valid yet","Yes","It depends on the signature only"],"answer":2,"explanation":"exp + leeway = 1700095970; now = 1700095969."},{"prompt":"A token has `iat: 1700079207` and `exp: 1700082807`. The server's clock reads `1700082807` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it has expired","It depends on the signature only","Yes","No, it is not valid yet"],"answer":2,"explanation":"exp + leeway = 1700082837; now = 1700082807."},{"prompt":"A token has `iat: 1700070015` and `exp: 1700070915`. The server's clock reads `1700070914` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it has expired","No, it is not valid yet","Yes","It depends on the signature only"],"answer":2,"explanation":"exp + leeway = 1700070975; now = 1700070914."},{"prompt":"A token has `iat: 1700032190` and `exp: 1700035790`. The server's clock reads `1700035789` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it is not valid yet","Yes","It depends on the signature only","No, it has expired"],"answer":1,"explanation":"exp + leeway = 1700035850; now = 1700035789."}]
---
# Security Drill: Token expiry arithmetic #88

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
