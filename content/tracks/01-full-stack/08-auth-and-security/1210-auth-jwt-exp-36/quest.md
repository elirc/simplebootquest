---
slug: "auth-jwt-exp-36"
title: "Security Drill: Token expiry arithmetic #36"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700010976` and `exp: 1700011276`. The server's clock reads `1700011275` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it is not valid yet","No, it has expired","Yes","It depends on the signature only"],"answer":2,"explanation":"exp + leeway = 1700011276; now = 1700011275."},{"prompt":"A token has `iat: 1700011166` and `exp: 1700012066`. The server's clock reads `1700012076` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it is not valid yet","Yes","It depends on the signature only","No, it has expired"],"answer":1,"explanation":"exp + leeway = 1700012126; now = 1700012076."},{"prompt":"A token has `iat: 1700032993` and `exp: 1700033293`. The server's clock reads `1700033383` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it is not valid yet","Yes","It depends on the signature only","No, it has expired"],"answer":3,"explanation":"exp + leeway = 1700033323; now = 1700033383."},{"prompt":"A token has `iat: 1700006431` and `exp: 1700007331`. The server's clock reads `1700007331` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["Yes","No, it is not valid yet","No, it has expired","It depends on the signature only"],"answer":0,"explanation":"exp + leeway = 1700007361; now = 1700007331."},{"prompt":"A token has `iat: 1700020294` and `exp: 1700021194`. The server's clock reads `1700021284` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it is not valid yet","No, it has expired","It depends on the signature only","Yes"],"answer":1,"explanation":"exp + leeway = 1700021254; now = 1700021284."}]
---
# Security Drill: Token expiry arithmetic #36

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
