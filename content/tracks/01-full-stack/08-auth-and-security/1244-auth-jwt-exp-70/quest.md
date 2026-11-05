---
slug: "auth-jwt-exp-70"
title: "Security Drill: Token expiry arithmetic #70"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700076355` and `exp: 1700079955`. The server's clock reads `1700080045` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it is not valid yet","No, it has expired","Yes"],"answer":2,"explanation":"exp + leeway = 1700080015; now = 1700080045."},{"prompt":"A token has `iat: 1700013656` and `exp: 1700017256`. The server's clock reads `1700017255` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["It depends on the signature only","Yes","No, it has expired","No, it is not valid yet"],"answer":1,"explanation":"exp + leeway = 1700017316; now = 1700017255."},{"prompt":"A token has `iat: 1700058710` and `exp: 1700145110`. The server's clock reads `1700145110` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it is not valid yet","Yes","No, it has expired"],"answer":2,"explanation":"exp + leeway = 1700145140; now = 1700145110."},{"prompt":"A token has `iat: 1700020734` and `exp: 1700107134`. The server's clock reads `1700107014` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it has expired","It depends on the signature only","No, it is not valid yet","Yes"],"answer":3,"explanation":"exp + leeway = 1700107194; now = 1700107014."},{"prompt":"A token has `iat: 1700019788` and `exp: 1700020088`. The server's clock reads `1700020133` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["Yes","No, it has expired","It depends on the signature only","No, it is not valid yet"],"answer":0,"explanation":"exp + leeway = 1700020148; now = 1700020133."}]
---
# Security Drill: Token expiry arithmetic #70

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
