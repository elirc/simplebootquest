---
slug: "auth-jwt-exp-57"
title: "Security Drill: Token expiry arithmetic #57"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700042588` and `exp: 1700046188`. The server's clock reads `1700046198` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["Yes","No, it is not valid yet","It depends on the signature only","No, it has expired"],"answer":0,"explanation":"exp + leeway = 1700046248; now = 1700046198."},{"prompt":"A token has `iat: 1700035974` and `exp: 1700122374`. The server's clock reads `1700122384` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["Yes","No, it has expired","No, it is not valid yet","It depends on the signature only"],"answer":0,"explanation":"exp + leeway = 1700122404; now = 1700122384."},{"prompt":"A token has `iat: 1700028225` and `exp: 1700029125`. The server's clock reads `1700029005` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it is not valid yet","It depends on the signature only","No, it has expired","Yes"],"answer":3,"explanation":"exp + leeway = 1700029125; now = 1700029005."},{"prompt":"A token has `iat: 1700035871` and `exp: 1700036171`. The server's clock reads `1700036216` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it has expired","It depends on the signature only","No, it is not valid yet","Yes"],"answer":0,"explanation":"exp + leeway = 1700036201; now = 1700036216."},{"prompt":"A token has `iat: 1700040192` and `exp: 1700041092`. The server's clock reads `1700041092` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it is not valid yet","Yes","No, it has expired","It depends on the signature only"],"answer":1,"explanation":"exp + leeway = 1700041152; now = 1700041092."}]
---
# Security Drill: Token expiry arithmetic #57

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
