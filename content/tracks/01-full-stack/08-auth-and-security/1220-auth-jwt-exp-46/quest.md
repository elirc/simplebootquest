---
slug: "auth-jwt-exp-46"
title: "Security Drill: Token expiry arithmetic #46"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700030783` and `exp: 1700031683`. The server's clock reads `1700031728` (seconds) and it allows **0s** of leeway. Is the token accepted?","options":["Yes","It depends on the signature only","No, it is not valid yet","No, it has expired"],"answer":3,"explanation":"exp + leeway = 1700031683; now = 1700031728."},{"prompt":"A token has `iat: 1700046344` and `exp: 1700046644`. The server's clock reads `1700046654` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["Yes","No, it has expired","It depends on the signature only","No, it is not valid yet"],"answer":0,"explanation":"exp + leeway = 1700046704; now = 1700046654."},{"prompt":"A token has `iat: 1700064199` and `exp: 1700064499`. The server's clock reads `1700064544` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it has expired","It depends on the signature only","No, it is not valid yet","Yes"],"answer":3,"explanation":"exp + leeway = 1700064559; now = 1700064544."},{"prompt":"A token has `iat: 1700013665` and `exp: 1700017265`. The server's clock reads `1700017355` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["Yes","No, it is not valid yet","No, it has expired","It depends on the signature only"],"answer":2,"explanation":"exp + leeway = 1700017295; now = 1700017355."},{"prompt":"A token has `iat: 1700059168` and `exp: 1700062768`. The server's clock reads `1700062813` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["Yes","It depends on the signature only","No, it has expired","No, it is not valid yet"],"answer":0,"explanation":"exp + leeway = 1700062828; now = 1700062813."}]
---
# Security Drill: Token expiry arithmetic #46

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
