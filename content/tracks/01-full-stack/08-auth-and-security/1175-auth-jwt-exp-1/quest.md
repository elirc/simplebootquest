---
slug: "auth-jwt-exp-1"
title: "Security Drill: Token expiry arithmetic #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700084124` and `exp: 1700170524`. The server's clock reads `1700170404` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it is not valid yet","Yes","It depends on the signature only","No, it has expired"],"answer":1,"explanation":"exp + leeway = 1700170584; now = 1700170404."},{"prompt":"A token has `iat: 1700075824` and `exp: 1700076124`. The server's clock reads `1700076169` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it has expired","It depends on the signature only","No, it is not valid yet","Yes"],"answer":3,"explanation":"exp + leeway = 1700076184; now = 1700076169."},{"prompt":"A token has `iat: 1700002298` and `exp: 1700002598`. The server's clock reads `1700002478` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["Yes","No, it is not valid yet","It depends on the signature only","No, it has expired"],"answer":0,"explanation":"exp + leeway = 1700002598; now = 1700002478."},{"prompt":"A token has `iat: 1700075588` and `exp: 1700079188`. The server's clock reads `1700079068` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["Yes","No, it is not valid yet","It depends on the signature only","No, it has expired"],"answer":0,"explanation":"exp + leeway = 1700079188; now = 1700079068."},{"prompt":"A token has `iat: 1700093752` and `exp: 1700094052`. The server's clock reads `1700094062` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it is not valid yet","It depends on the signature only","No, it has expired","Yes"],"answer":3,"explanation":"exp + leeway = 1700094112; now = 1700094062."}]
---
# Security Drill: Token expiry arithmetic #1

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
