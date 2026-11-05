---
slug: "auth-jwt-exp-86"
title: "Security Drill: Token expiry arithmetic #86"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700074523` and `exp: 1700074823`. The server's clock reads `1700074703` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["Yes","No, it has expired","It depends on the signature only","No, it is not valid yet"],"answer":0,"explanation":"exp + leeway = 1700074883; now = 1700074703."},{"prompt":"A token has `iat: 1700079692` and `exp: 1700083292`. The server's clock reads `1700083292` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["Yes","No, it is not valid yet","It depends on the signature only","No, it has expired"],"answer":3,"explanation":"exp + leeway = 1700083292; now = 1700083292."},{"prompt":"A token has `iat: 1700060662` and `exp: 1700060962`. The server's clock reads `1700060962` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it has expired","Yes","No, it is not valid yet"],"answer":2,"explanation":"exp + leeway = 1700061022; now = 1700060962."},{"prompt":"A token has `iat: 1700088399` and `exp: 1700089299`. The server's clock reads `1700089309` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["Yes","No, it is not valid yet","No, it has expired","It depends on the signature only"],"answer":2,"explanation":"exp + leeway = 1700089299; now = 1700089309."},{"prompt":"A token has `iat: 1700066370` and `exp: 1700069970`. The server's clock reads `1700069969` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it is not valid yet","Yes","No, it has expired","It depends on the signature only"],"answer":1,"explanation":"exp + leeway = 1700070000; now = 1700069969."}]
---
# Security Drill: Token expiry arithmetic #86

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
