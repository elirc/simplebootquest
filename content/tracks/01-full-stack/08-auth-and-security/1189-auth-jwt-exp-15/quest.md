---
slug: "auth-jwt-exp-15"
title: "Security Drill: Token expiry arithmetic #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"A token has `iat: 1700060396` and `exp: 1700063996`. The server's clock reads `1700064006` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it has expired","No, it is not valid yet","It depends on the signature only","Yes"],"answer":3,"explanation":"exp + leeway = 1700064056; now = 1700064006."},{"prompt":"A token has `iat: 1700085430` and `exp: 1700089030`. The server's clock reads `1700089029` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it is not valid yet","Yes","No, it has expired"],"answer":2,"explanation":"exp + leeway = 1700089090; now = 1700089029."},{"prompt":"A token has `iat: 1700096298` and `exp: 1700182698`. The server's clock reads `1700182743` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["No, it is not valid yet","It depends on the signature only","Yes","No, it has expired"],"answer":3,"explanation":"exp + leeway = 1700182728; now = 1700182743."},{"prompt":"A token has `iat: 1700058551` and `exp: 1700144951`. The server's clock reads `1700144951` (seconds) and it allows **30s** of leeway. Is the token accepted?","options":["It depends on the signature only","No, it is not valid yet","Yes","No, it has expired"],"answer":2,"explanation":"exp + leeway = 1700144981; now = 1700144951."},{"prompt":"A token has `iat: 1700030771` and `exp: 1700031071`. The server's clock reads `1700031116` (seconds) and it allows **60s** of leeway. Is the token accepted?","options":["No, it is not valid yet","It depends on the signature only","No, it has expired","Yes"],"answer":3,"explanation":"exp + leeway = 1700031131; now = 1700031116."}]
---
# Security Drill: Token expiry arithmetic #15

JWT `iat`, `nbf` and `exp` claims are in **seconds** since the Unix epoch (JavaScript's `Date.now()` is in milliseconds!). A token is valid while `nbf ≤ now < exp`, give or take a small clock-skew leeway.
