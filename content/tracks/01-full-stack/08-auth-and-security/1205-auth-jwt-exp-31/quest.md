---
slug: "auth-jwt-exp-31"
title: "Security Drill: Token expiry arithmetic #31"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700019198` and `exp: 1700019498`. The server's clock reads `1700019588` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it has expired","No, it is not valid yet","Yes"],"answer":1,"explanation":"exp + leeway = 1700019528; now = 1700019588."},{"prompt":"A token has `iat: 1700006977` and `exp: 1700007277`. The server's clock reads `1700007287` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it is not valid yet","No, it has expired","It depends on the signature only","Yes"],"answer":3,"explanation":"exp + leeway = 1700007307; now = 1700007287."},{"prompt":"A token has `iat: 1700086790` and `exp: 1700173190`. The server's clock reads `1700173280` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it is not valid yet","It depends on the signature only","Yes","No, it has expired"],"answer":3,"explanation":"exp + leeway = 1700173250; now = 1700173280."},{"prompt":"A token has `iat: 1700047345` and `exp: 1700047645`. The server's clock reads `1700047644` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["It depends on the signature only","Yes","No, it has expired","No, it is not valid yet"],"answer":1,"explanation":"exp + leeway = 1700047705; now = 1700047644."},{"prompt":"A token has `iat: 1700031604` and `exp: 1700035204`. The server's clock reads `1700035214` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it has expired","Yes","It depends on the signature only","No, it is not valid yet"],"answer":1,"explanation":"exp + leeway = 1700035234; now = 1700035214."}]
---
# Security Drill: Token expiry arithmetic #31

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
