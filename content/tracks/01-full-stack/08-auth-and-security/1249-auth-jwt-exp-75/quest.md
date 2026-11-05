---
slug: "auth-jwt-exp-75"
title: "Security Drill: Token expiry arithmetic #75"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700074953` and `exp: 1700075253`. The server's clock reads `1700075343` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it has expired","Yes","No, it is not valid yet","It depends on the signature only"],"answer":0,"explanation":"exp + leeway = 1700075253; now = 1700075343."},{"prompt":"A token has `iat: 1700091469` and `exp: 1700091769`. The server's clock reads `1700091769` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["Yes","No, it is not valid yet","It depends on the signature only","No, it has expired"],"answer":3,"explanation":"exp + leeway = 1700091769; now = 1700091769."},{"prompt":"A token has `iat: 1700063400` and `exp: 1700149800`. The server's clock reads `1700149845` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it has expired","Yes","No, it is not valid yet","It depends on the signature only"],"answer":1,"explanation":"exp + leeway = 1700149860; now = 1700149845."},{"prompt":"A token has `iat: 1700024530` and `exp: 1700110930`. The server's clock reads `1700110940` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it is not valid yet","No, it has expired","It depends on the signature only","Yes"],"answer":3,"explanation":"exp + leeway = 1700110990; now = 1700110940."},{"prompt":"A token has `iat: 1700071696` and `exp: 1700075296`. The server's clock reads `1700075386` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it is not valid yet","Yes","No, it has expired","It depends on the signature only"],"answer":2,"explanation":"exp + leeway = 1700075356; now = 1700075386."}]
---
# Security Drill: Token expiry arithmetic #75

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
