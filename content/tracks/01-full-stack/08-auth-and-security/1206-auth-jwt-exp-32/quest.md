---
slug: "auth-jwt-exp-32"
title: "Security Drill: Token expiry arithmetic #32"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700012080` and `exp: 1700012980`. The server's clock reads `1700013025` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["It depends on the signature only","Yes","No, it has expired","No, it is not valid yet"],"answer":1,"explanation":"exp + leeway = 1700013040; now = 1700013025."},{"prompt":"A token has `iat: 1700085802` and `exp: 1700172202`. The server's clock reads `1700172212` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["Yes","No, it has expired","No, it is not valid yet","It depends on the signature only"],"answer":0,"explanation":"exp + leeway = 1700172232; now = 1700172212."},{"prompt":"A token has `iat: 1700046117` and `exp: 1700047017`. The server's clock reads `1700047017` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it has expired","It depends on the signature only","No, it is not valid yet","Yes"],"answer":3,"explanation":"exp + leeway = 1700047077; now = 1700047017."},{"prompt":"A token has `iat: 1700048569` and `exp: 1700049469`. The server's clock reads `1700049468` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it is not valid yet","Yes","No, it has expired","It depends on the signature only"],"answer":1,"explanation":"exp + leeway = 1700049529; now = 1700049468."},{"prompt":"A token has `iat: 1700025464` and `exp: 1700111864`. The server's clock reads `1700111863` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it has expired","Yes","No, it is not valid yet","It depends on the signature only"],"answer":1,"explanation":"exp + leeway = 1700111894; now = 1700111863."}]
---
# Security Drill: Token expiry arithmetic #32

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
