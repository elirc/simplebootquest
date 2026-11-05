---
slug: "auth-jwt-exp-54"
title: "Security Drill: Token expiry arithmetic #54"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700067929` and `exp: 1700154329`. The server's clock reads `1700154209` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it is not valid yet","Yes","No, it has expired"],"answer":2,"explanation":"exp + leeway = 1700154329; now = 1700154209."},{"prompt":"A token has `iat: 1700018898` and `exp: 1700019798`. The server's clock reads `1700019808` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["Yes","It depends on the signature only","No, it is not valid yet","No, it has expired"],"answer":0,"explanation":"exp + leeway = 1700019828; now = 1700019808."},{"prompt":"A token has `iat: 1700070762` and `exp: 1700071662`. The server's clock reads `1700071661` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["Yes","No, it is not valid yet","No, it has expired","It depends on the signature only"],"answer":0,"explanation":"exp + leeway = 1700071722; now = 1700071661."},{"prompt":"A token has `iat: 1700097530` and `exp: 1700183930`. The server's clock reads `1700183929` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it is not valid yet","No, it has expired","It depends on the signature only","Yes"],"answer":3,"explanation":"exp + leeway = 1700183930; now = 1700183929."},{"prompt":"A token has `iat: 1700097548` and `exp: 1700101148`. The server's clock reads `1700101193` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it has expired","It depends on the signature only","Yes","No, it is not valid yet"],"answer":0,"explanation":"exp + leeway = 1700101148; now = 1700101193."}]
---
# Security Drill: Token expiry arithmetic #54

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
