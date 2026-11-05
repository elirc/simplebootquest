---
slug: "auth-jwt-exp-40"
title: "Security Drill: Token expiry arithmetic #40"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700065636` and `exp: 1700065936`. The server's clock reads `1700065936` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it has expired","No, it is not valid yet","Yes"],"answer":1,"explanation":"exp + leeway = 1700065936; now = 1700065936."},{"prompt":"A token has `iat: 1700078989` and `exp: 1700079289`. The server's clock reads `1700079169` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it has expired","It depends on the signature only","No, it is not valid yet","Yes"],"answer":3,"explanation":"exp + leeway = 1700079319; now = 1700079169."},{"prompt":"A token has `iat: 1700025757` and `exp: 1700112157`. The server's clock reads `1700112247` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["Yes","No, it has expired","It depends on the signature only","No, it is not valid yet"],"answer":1,"explanation":"exp + leeway = 1700112187; now = 1700112247."},{"prompt":"A token has `iat: 1700042697` and `exp: 1700046297`. The server's clock reads `1700046387` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it is not valid yet","Yes","No, it has expired"],"answer":3,"explanation":"exp + leeway = 1700046327; now = 1700046387."},{"prompt":"A token has `iat: 1700003226` and `exp: 1700089626`. The server's clock reads `1700089671` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it has expired","No, it is not valid yet","Yes","It depends on the signature only"],"answer":0,"explanation":"exp + leeway = 1700089656; now = 1700089671."}]
---
# Security Drill: Token expiry arithmetic #40

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
