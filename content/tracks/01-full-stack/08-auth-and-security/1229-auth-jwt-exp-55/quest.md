---
slug: "auth-jwt-exp-55"
title: "Security Drill: Token expiry arithmetic #55"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700075889` and `exp: 1700079489`. The server's clock reads `1700079369` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["Yes","No, it is not valid yet","No, it has expired","It depends on the signature only"],"answer":0,"explanation":"exp + leeway = 1700079549; now = 1700079369."},{"prompt":"A token has `iat: 1700022067` and `exp: 1700022967`. The server's clock reads `1700022977` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["Yes","No, it has expired","It depends on the signature only","No, it is not valid yet"],"answer":1,"explanation":"exp + leeway = 1700022967; now = 1700022977."},{"prompt":"A token has `iat: 1700040155` and `exp: 1700040455`. The server's clock reads `1700040454` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it has expired","It depends on the signature only","No, it is not valid yet","Yes"],"answer":3,"explanation":"exp + leeway = 1700040455; now = 1700040454."},{"prompt":"A token has `iat: 1700025793` and `exp: 1700029393`. The server's clock reads `1700029403` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["Yes","No, it has expired","It depends on the signature only","No, it is not valid yet"],"answer":1,"explanation":"exp + leeway = 1700029393; now = 1700029403."},{"prompt":"A token has `iat: 1700011182` and `exp: 1700012082`. The server's clock reads `1700012082` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it is not valid yet","Yes","No, it has expired"],"answer":3,"explanation":"exp + leeway = 1700012082; now = 1700012082."}]
---
# Security Drill: Token expiry arithmetic #55

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
