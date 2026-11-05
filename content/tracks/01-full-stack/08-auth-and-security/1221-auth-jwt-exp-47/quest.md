---
slug: "auth-jwt-exp-47"
title: "Security Drill: Token expiry arithmetic #47"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700015811` and `exp: 1700016711`. The server's clock reads `1700016711` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it is not valid yet","No, it has expired","It depends on the signature only","Yes"],"answer":3,"explanation":"exp + leeway = 1700016741; now = 1700016711."},{"prompt":"A token has `iat: 1700056179` and `exp: 1700142579`. The server's clock reads `1700142579` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["Yes","No, it is not valid yet","No, it has expired","It depends on the signature only"],"answer":0,"explanation":"exp + leeway = 1700142609; now = 1700142579."},{"prompt":"A token has `iat: 1700099312` and `exp: 1700185712`. The server's clock reads `1700185802` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it is not valid yet","No, it has expired","It depends on the signature only","Yes"],"answer":1,"explanation":"exp + leeway = 1700185742; now = 1700185802."},{"prompt":"A token has `iat: 1700027685` and `exp: 1700027985`. The server's clock reads `1700028075` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it has expired","Yes","No, it is not valid yet","It depends on the signature only"],"answer":0,"explanation":"exp + leeway = 1700027985; now = 1700028075."},{"prompt":"A token has `iat: 1700029262` and `exp: 1700032862`. The server's clock reads `1700032861` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["Yes","It depends on the signature only","No, it is not valid yet","No, it has expired"],"answer":0,"explanation":"exp + leeway = 1700032892; now = 1700032861."}]
---
# Security Drill: Token expiry arithmetic #47

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
