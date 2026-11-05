---
slug: "auth-jwt-exp-19"
title: "Security Drill: Token expiry arithmetic #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700038004` and `exp: 1700038304`. The server's clock reads `1700038394` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["Yes","No, it has expired","No, it is not valid yet","It depends on the signature only"],"answer":1,"explanation":"exp + leeway = 1700038334; now = 1700038394."},{"prompt":"A token has `iat: 1700073926` and `exp: 1700074826`. The server's clock reads `1700074825` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it is not valid yet","Yes","It depends on the signature only","No, it has expired"],"answer":1,"explanation":"exp + leeway = 1700074826; now = 1700074825."},{"prompt":"A token has `iat: 1700082923` and `exp: 1700086523`. The server's clock reads `1700086522` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["Yes","It depends on the signature only","No, it has expired","No, it is not valid yet"],"answer":0,"explanation":"exp + leeway = 1700086523; now = 1700086522."},{"prompt":"A token has `iat: 1700093085` and `exp: 1700093385`. The server's clock reads `1700093395` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["It depends on the signature only","Yes","No, it has expired","No, it is not valid yet"],"answer":2,"explanation":"exp + leeway = 1700093385; now = 1700093395."},{"prompt":"A token has `iat: 1700016895` and `exp: 1700017795`. The server's clock reads `1700017794` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it is not valid yet","It depends on the signature only","No, it has expired","Yes"],"answer":3,"explanation":"exp + leeway = 1700017825; now = 1700017794."}]
---
# Security Drill: Token expiry arithmetic #19

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
