---
slug: "auth-jwt-exp-25"
title: "Security Drill: Token expiry arithmetic #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700012999` and `exp: 1700013299`. The server's clock reads `1700013309` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it is not valid yet","Yes","It depends on the signature only","No, it has expired"],"answer":1,"explanation":"exp + leeway = 1700013329; now = 1700013309."},{"prompt":"A token has `iat: 1700002441` and `exp: 1700006041`. The server's clock reads `1700006040` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it has expired","It depends on the signature only","No, it is not valid yet","Yes"],"answer":3,"explanation":"exp + leeway = 1700006101; now = 1700006040."},{"prompt":"A token has `iat: 1700016260` and `exp: 1700017160`. The server's clock reads `1700017040` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it is not valid yet","No, it has expired","Yes","It depends on the signature only"],"answer":2,"explanation":"exp + leeway = 1700017190; now = 1700017040."},{"prompt":"A token has `iat: 1700056912` and `exp: 1700143312`. The server's clock reads `1700143192` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it has expired","Yes","No, it is not valid yet","It depends on the signature only"],"answer":1,"explanation":"exp + leeway = 1700143372; now = 1700143192."},{"prompt":"A token has `iat: 1700081251` and `exp: 1700167651`. The server's clock reads `1700167661` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it is not valid yet","Yes","No, it has expired","It depends on the signature only"],"answer":2,"explanation":"exp + leeway = 1700167651; now = 1700167661."}]
---
# Security Drill: Token expiry arithmetic #25

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
