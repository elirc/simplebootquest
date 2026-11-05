---
slug: "auth-jwt-exp-69"
title: "Security Drill: Token expiry arithmetic #69"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700039903` and `exp: 1700043503`. The server's clock reads `1700043383` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["Yes","No, it has expired","No, it is not valid yet","It depends on the signature only"],"answer":0,"explanation":"exp + leeway = 1700043533; now = 1700043383."},{"prompt":"A token has `iat: 1700066083` and `exp: 1700066383`. The server's clock reads `1700066428` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["It depends on the signature only","Yes","No, it is not valid yet","No, it has expired"],"answer":1,"explanation":"exp + leeway = 1700066443; now = 1700066428."},{"prompt":"A token has `iat: 1700050570` and `exp: 1700136970`. The server's clock reads `1700136850` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it has expired","No, it is not valid yet","Yes"],"answer":3,"explanation":"exp + leeway = 1700137000; now = 1700136850."},{"prompt":"A token has `iat: 1700092576` and `exp: 1700093476`. The server's clock reads `1700093486` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["Yes","No, it has expired","No, it is not valid yet","It depends on the signature only"],"answer":0,"explanation":"exp + leeway = 1700093506; now = 1700093486."},{"prompt":"A token has `iat: 1700038923` and `exp: 1700039823`. The server's clock reads `1700039868` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it is not valid yet","It depends on the signature only","No, it has expired","Yes"],"answer":3,"explanation":"exp + leeway = 1700039883; now = 1700039868."}]
---
# Security Drill: Token expiry arithmetic #69

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
