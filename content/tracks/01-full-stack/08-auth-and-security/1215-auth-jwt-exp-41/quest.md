---
slug: "auth-jwt-exp-41"
title: "Security Drill: Token expiry arithmetic #41"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700037756` and `exp: 1700038656`. The server's clock reads `1700038655` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it has expired","Yes","It depends on the signature only","No, it is not valid yet"],"answer":1,"explanation":"exp + leeway = 1700038656; now = 1700038655."},{"prompt":"A token has `iat: 1700083131` and `exp: 1700169531`. The server's clock reads `1700169411` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it has expired","Yes","It depends on the signature only","No, it is not valid yet"],"answer":1,"explanation":"exp + leeway = 1700169561; now = 1700169411."},{"prompt":"A token has `iat: 1700028748` and `exp: 1700029048`. The server's clock reads `1700029047` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it is not valid yet","No, it has expired","Yes","It depends on the signature only"],"answer":2,"explanation":"exp + leeway = 1700029048; now = 1700029047."},{"prompt":"A token has `iat: 1700095729` and `exp: 1700096629`. The server's clock reads `1700096674` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["It depends on the signature only","Yes","No, it has expired","No, it is not valid yet"],"answer":1,"explanation":"exp + leeway = 1700096689; now = 1700096674."},{"prompt":"A token has `iat: 1700053479` and `exp: 1700139879`. The server's clock reads `1700139969` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["It depends on the signature only","Yes","No, it has expired","No, it is not valid yet"],"answer":2,"explanation":"exp + leeway = 1700139909; now = 1700139969."}]
---
# Security Drill: Token expiry arithmetic #41

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
