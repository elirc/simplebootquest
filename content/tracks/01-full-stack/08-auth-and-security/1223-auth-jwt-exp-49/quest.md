---
slug: "auth-jwt-exp-49"
title: "Security Drill: Token expiry arithmetic #49"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700092117` and `exp: 1700093017`. The server's clock reads `1700093016` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it has expired","Yes","It depends on the signature only","No, it is not valid yet"],"answer":1,"explanation":"exp + leeway = 1700093047; now = 1700093016."},{"prompt":"A token has `iat: 1700049948` and `exp: 1700050848`. The server's clock reads `1700050728` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it has expired","Yes","No, it is not valid yet"],"answer":2,"explanation":"exp + leeway = 1700050848; now = 1700050728."},{"prompt":"A token has `iat: 1700056242` and `exp: 1700057142`. The server's clock reads `1700057152` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["Yes","No, it has expired","It depends on the signature only","No, it is not valid yet"],"answer":0,"explanation":"exp + leeway = 1700057172; now = 1700057152."},{"prompt":"A token has `iat: 1700019798` and `exp: 1700106198`. The server's clock reads `1700106243` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["Yes","It depends on the signature only","No, it has expired","No, it is not valid yet"],"answer":0,"explanation":"exp + leeway = 1700106258; now = 1700106243."},{"prompt":"A token has `iat: 1700065034` and `exp: 1700151434`. The server's clock reads `1700151444` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it is not valid yet","No, it has expired","Yes"],"answer":3,"explanation":"exp + leeway = 1700151494; now = 1700151444."}]
---
# Security Drill: Token expiry arithmetic #49

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
