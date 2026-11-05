---
slug: "auth-jwt-exp-78"
title: "Security Drill: Token expiry arithmetic #78"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700082309` and `exp: 1700168709`. The server's clock reads `1700168709` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it is not valid yet","Yes","No, it has expired","It depends on the signature only"],"answer":1,"explanation":"exp + leeway = 1700168769; now = 1700168709."},{"prompt":"A token has `iat: 1700028072` and `exp: 1700031672`. The server's clock reads `1700031672` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it has expired","No, it is not valid yet","Yes","It depends on the signature only"],"answer":2,"explanation":"exp + leeway = 1700031732; now = 1700031672."},{"prompt":"A token has `iat: 1700004050` and `exp: 1700004950`. The server's clock reads `1700005040` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["Yes","It depends on the signature only","No, it has expired","No, it is not valid yet"],"answer":2,"explanation":"exp + leeway = 1700005010; now = 1700005040."},{"prompt":"A token has `iat: 1700055101` and `exp: 1700058701`. The server's clock reads `1700058711` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it is not valid yet","No, it has expired","Yes"],"answer":2,"explanation":"exp + leeway = 1700058701; now = 1700058711."},{"prompt":"A token has `iat: 1700046587` and `exp: 1700132987`. The server's clock reads `1700132997` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it has expired","Yes","No, it is not valid yet"],"answer":2,"explanation":"exp + leeway = 1700133047; now = 1700132997."}]
---
# Security Drill: Token expiry arithmetic #78

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
