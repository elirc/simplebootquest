---
slug: "auth-jwt-exp-42"
title: "Security Drill: Token expiry arithmetic #42"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700040124` and `exp: 1700041024`. The server's clock reads `1700041034` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it has expired","No, it is not valid yet","Yes"],"answer":3,"explanation":"exp + leeway = 1700041084; now = 1700041034."},{"prompt":"A token has `iat: 1700055485` and `exp: 1700055785`. The server's clock reads `1700055785` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["Yes","No, it is not valid yet","No, it has expired","It depends on the signature only"],"answer":0,"explanation":"exp + leeway = 1700055815; now = 1700055785."},{"prompt":"A token has `iat: 1700035097` and `exp: 1700121497`. The server's clock reads `1700121497` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it has expired","Yes","No, it is not valid yet"],"answer":2,"explanation":"exp + leeway = 1700121527; now = 1700121497."},{"prompt":"A token has `iat: 1700046835` and `exp: 1700050435`. The server's clock reads `1700050525` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it has expired","Yes","No, it is not valid yet","It depends on the signature only"],"answer":0,"explanation":"exp + leeway = 1700050465; now = 1700050525."},{"prompt":"A token has `iat: 1700034820` and `exp: 1700035720`. The server's clock reads `1700035720` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["Yes","No, it has expired","No, it is not valid yet","It depends on the signature only"],"answer":0,"explanation":"exp + leeway = 1700035750; now = 1700035720."}]
---
# Security Drill: Token expiry arithmetic #42

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
