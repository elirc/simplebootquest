---
slug: "auth-jwt-exp-3"
title: "Security Drill: Token expiry arithmetic #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700031399` and `exp: 1700032299`. The server's clock reads `1700032298` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it is not valid yet","Yes","It depends on the signature only","No, it has expired"],"answer":1,"explanation":"exp + leeway = 1700032329; now = 1700032298."},{"prompt":"A token has `iat: 1700021324` and `exp: 1700024924`. The server's clock reads `1700024934` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["Yes","No, it is not valid yet","It depends on the signature only","No, it has expired"],"answer":3,"explanation":"exp + leeway = 1700024924; now = 1700024934."},{"prompt":"A token has `iat: 1700032038` and `exp: 1700035638`. The server's clock reads `1700035683` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["Yes","No, it is not valid yet","No, it has expired","It depends on the signature only"],"answer":2,"explanation":"exp + leeway = 1700035668; now = 1700035683."},{"prompt":"A token has `iat: 1700007936` and `exp: 1700094336`. The server's clock reads `1700094216` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it has expired","Yes","No, it is not valid yet","It depends on the signature only"],"answer":1,"explanation":"exp + leeway = 1700094336; now = 1700094216."},{"prompt":"A token has `iat: 1700004343` and `exp: 1700004643`. The server's clock reads `1700004523` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it is not valid yet","Yes","It depends on the signature only","No, it has expired"],"answer":1,"explanation":"exp + leeway = 1700004643; now = 1700004523."}]
---
# Security Drill: Token expiry arithmetic #3

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
