---
slug: "auth-jwt-exp-9"
title: "Security Drill: Token expiry arithmetic #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700097278` and `exp: 1700183678`. The server's clock reads `1700183678` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it is not valid yet","It depends on the signature only","No, it has expired","Yes"],"answer":2,"explanation":"exp + leeway = 1700183678; now = 1700183678."},{"prompt":"A token has `iat: 1700041820` and `exp: 1700045420`. The server's clock reads `1700045465` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it has expired","No, it is not valid yet","It depends on the signature only","Yes"],"answer":3,"explanation":"exp + leeway = 1700045480; now = 1700045465."},{"prompt":"A token has `iat: 1700058310` and `exp: 1700059210`. The server's clock reads `1700059300` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it has expired","It depends on the signature only","Yes","No, it is not valid yet"],"answer":0,"explanation":"exp + leeway = 1700059240; now = 1700059300."},{"prompt":"A token has `iat: 1700073034` and `exp: 1700073334`. The server's clock reads `1700073379` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it has expired","No, it is not valid yet","Yes"],"answer":1,"explanation":"exp + leeway = 1700073364; now = 1700073379."},{"prompt":"A token has `iat: 1700041666` and `exp: 1700045266`. The server's clock reads `1700045276` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["Yes","No, it has expired","No, it is not valid yet","It depends on the signature only"],"answer":0,"explanation":"exp + leeway = 1700045326; now = 1700045276."}]
---
# Security Drill: Token expiry arithmetic #9

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
