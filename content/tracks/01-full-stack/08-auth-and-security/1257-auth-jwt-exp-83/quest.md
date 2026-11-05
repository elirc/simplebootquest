---
slug: "auth-jwt-exp-83"
title: "Security Drill: Token expiry arithmetic #83"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700064880` and `exp: 1700065780`. The server's clock reads `1700065825` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["It depends on the signature only","Yes","No, it is not valid yet","No, it has expired"],"answer":3,"explanation":"exp + leeway = 1700065810; now = 1700065825."},{"prompt":"A token has `iat: 1700062533` and `exp: 1700148933`. The server's clock reads `1700148933` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it is not valid yet","Yes","No, it has expired","It depends on the signature only"],"answer":1,"explanation":"exp + leeway = 1700148963; now = 1700148933."},{"prompt":"A token has `iat: 1700051545` and `exp: 1700051845`. The server's clock reads `1700051845` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it is not valid yet","No, it has expired","It depends on the signature only","Yes"],"answer":3,"explanation":"exp + leeway = 1700051875; now = 1700051845."},{"prompt":"A token has `iat: 1700014599` and `exp: 1700100999`. The server's clock reads `1700100879` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it has expired","It depends on the signature only","Yes","No, it is not valid yet"],"answer":2,"explanation":"exp + leeway = 1700100999; now = 1700100879."},{"prompt":"A token has `iat: 1700055599` and `exp: 1700056499`. The server's clock reads `1700056589` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it is not valid yet","It depends on the signature only","Yes","No, it has expired"],"answer":3,"explanation":"exp + leeway = 1700056499; now = 1700056589."}]
---
# Security Drill: Token expiry arithmetic #83

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
