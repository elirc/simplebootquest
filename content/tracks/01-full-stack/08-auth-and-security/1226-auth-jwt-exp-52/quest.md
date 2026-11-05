---
slug: "auth-jwt-exp-52"
title: "Security Drill: Token expiry arithmetic #52"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700056098` and `exp: 1700142498`. The server's clock reads `1700142498` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it is not valid yet","Yes","No, it has expired"],"answer":2,"explanation":"exp + leeway = 1700142558; now = 1700142498."},{"prompt":"A token has `iat: 1700036449` and `exp: 1700036749`. The server's clock reads `1700036629` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it is not valid yet","It depends on the signature only","Yes","No, it has expired"],"answer":2,"explanation":"exp + leeway = 1700036779; now = 1700036629."},{"prompt":"A token has `iat: 1700062257` and `exp: 1700062557`. The server's clock reads `1700062567` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it is not valid yet","Yes","No, it has expired","It depends on the signature only"],"answer":2,"explanation":"exp + leeway = 1700062557; now = 1700062567."},{"prompt":"A token has `iat: 1700008946` and `exp: 1700009246`. The server's clock reads `1700009256` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["Yes","No, it has expired","No, it is not valid yet","It depends on the signature only"],"answer":1,"explanation":"exp + leeway = 1700009246; now = 1700009256."},{"prompt":"A token has `iat: 1700041058` and `exp: 1700044658`. The server's clock reads `1700044657` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it is not valid yet","Yes","No, it has expired"],"answer":2,"explanation":"exp + leeway = 1700044688; now = 1700044657."}]
---
# Security Drill: Token expiry arithmetic #52

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
