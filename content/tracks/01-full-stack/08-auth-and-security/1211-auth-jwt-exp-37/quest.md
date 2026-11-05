---
slug: "auth-jwt-exp-37"
title: "Security Drill: Token expiry arithmetic #37"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700086827` and `exp: 1700173227`. The server's clock reads `1700173317` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["Yes","No, it has expired","It depends on the signature only","No, it is not valid yet"],"answer":1,"explanation":"exp + leeway = 1700173227; now = 1700173317."},{"prompt":"A token has `iat: 1700058781` and `exp: 1700145181`. The server's clock reads `1700145191` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it has expired","No, it is not valid yet","Yes","It depends on the signature only"],"answer":2,"explanation":"exp + leeway = 1700145241; now = 1700145191."},{"prompt":"A token has `iat: 1700062157` and `exp: 1700063057`. The server's clock reads `1700063067` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it is not valid yet","Yes","No, it has expired","It depends on the signature only"],"answer":2,"explanation":"exp + leeway = 1700063057; now = 1700063067."},{"prompt":"A token has `iat: 1700084011` and `exp: 1700170411`. The server's clock reads `1700170410` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it is not valid yet","Yes","It depends on the signature only","No, it has expired"],"answer":1,"explanation":"exp + leeway = 1700170471; now = 1700170410."},{"prompt":"A token has `iat: 1700087342` and `exp: 1700088242`. The server's clock reads `1700088287` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["Yes","It depends on the signature only","No, it has expired","No, it is not valid yet"],"answer":0,"explanation":"exp + leeway = 1700088302; now = 1700088287."}]
---
# Security Drill: Token expiry arithmetic #37

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
