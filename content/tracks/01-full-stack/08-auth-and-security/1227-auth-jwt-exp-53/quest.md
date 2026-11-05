---
slug: "auth-jwt-exp-53"
title: "Security Drill: Token expiry arithmetic #53"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700096898` and `exp: 1700097798`. The server's clock reads `1700097797` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it has expired","No, it is not valid yet","Yes","It depends on the signature only"],"answer":2,"explanation":"exp + leeway = 1700097798; now = 1700097797."},{"prompt":"A token has `iat: 1700065159` and `exp: 1700151559`. The server's clock reads `1700151439` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it has expired","Yes","No, it is not valid yet","It depends on the signature only"],"answer":1,"explanation":"exp + leeway = 1700151589; now = 1700151439."},{"prompt":"A token has `iat: 1700000309` and `exp: 1700001209`. The server's clock reads `1700001209` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it has expired","No, it is not valid yet","Yes"],"answer":3,"explanation":"exp + leeway = 1700001269; now = 1700001209."},{"prompt":"A token has `iat: 1700081550` and `exp: 1700081850`. The server's clock reads `1700081940` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it is not valid yet","Yes","No, it has expired"],"answer":3,"explanation":"exp + leeway = 1700081850; now = 1700081940."},{"prompt":"A token has `iat: 1700077734` and `exp: 1700164134`. The server's clock reads `1700164134` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["Yes","It depends on the signature only","No, it is not valid yet","No, it has expired"],"answer":0,"explanation":"exp + leeway = 1700164164; now = 1700164134."}]
---
# Security Drill: Token expiry arithmetic #53

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
