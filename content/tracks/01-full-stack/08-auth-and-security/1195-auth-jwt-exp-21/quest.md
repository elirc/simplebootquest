---
slug: "auth-jwt-exp-21"
title: "Security Drill: Token expiry arithmetic #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700058480` and `exp: 1700144880`. The server's clock reads `1700144760` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["Yes","No, it has expired","No, it is not valid yet","It depends on the signature only"],"answer":0,"explanation":"exp + leeway = 1700144940; now = 1700144760."},{"prompt":"A token has `iat: 1700083937` and `exp: 1700170337`. The server's clock reads `1700170336` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it is not valid yet","No, it has expired","It depends on the signature only","Yes"],"answer":3,"explanation":"exp + leeway = 1700170337; now = 1700170336."},{"prompt":"A token has `iat: 1700094498` and `exp: 1700095398`. The server's clock reads `1700095408` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it is not valid yet","No, it has expired","It depends on the signature only","Yes"],"answer":3,"explanation":"exp + leeway = 1700095458; now = 1700095408."},{"prompt":"A token has `iat: 1700019179` and `exp: 1700019479`. The server's clock reads `1700019569` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it is not valid yet","No, it has expired","Yes"],"answer":2,"explanation":"exp + leeway = 1700019479; now = 1700019569."},{"prompt":"A token has `iat: 1700074742` and `exp: 1700075642`. The server's clock reads `1700075642` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["No, it is not valid yet","Yes","No, it has expired","It depends on the signature only"],"answer":2,"explanation":"exp + leeway = 1700075642; now = 1700075642."}]
---
# Security Drill: Token expiry arithmetic #21

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
