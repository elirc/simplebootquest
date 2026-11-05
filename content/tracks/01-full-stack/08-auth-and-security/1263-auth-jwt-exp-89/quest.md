---
slug: "auth-jwt-exp-89"
title: "Security Drill: Token expiry arithmetic #89"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700019764` and `exp: 1700023364`. The server's clock reads `1700023454` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it is not valid yet","Yes","No, it has expired"],"answer":3,"explanation":"exp + leeway = 1700023394; now = 1700023454."},{"prompt":"A token has `iat: 1700084143` and `exp: 1700087743`. The server's clock reads `1700087788` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it has expired","Yes","No, it is not valid yet","It depends on the signature only"],"answer":0,"explanation":"exp + leeway = 1700087773; now = 1700087788."},{"prompt":"A token has `iat: 1700008676` and `exp: 1700008976`. The server's clock reads `1700009021` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["Yes","No, it is not valid yet","It depends on the signature only","No, it has expired"],"answer":0,"explanation":"exp + leeway = 1700009036; now = 1700009021."},{"prompt":"A token has `iat: 1700076511` and `exp: 1700077411`. The server's clock reads `1700077410` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it is not valid yet","It depends on the signature only","No, it has expired","Yes"],"answer":3,"explanation":"exp + leeway = 1700077471; now = 1700077410."},{"prompt":"A token has `iat: 1700077769` and `exp: 1700078669`. The server's clock reads `1700078668` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["Yes","No, it is not valid yet","It depends on the signature only","No, it has expired"],"answer":0,"explanation":"exp + leeway = 1700078669; now = 1700078668."}]
---
# Security Drill: Token expiry arithmetic #89

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
