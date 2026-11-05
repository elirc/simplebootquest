---
slug: "sd01-qps-50"
title: "Design Drill: Requests per second from daily users #50"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a fitness tracker has **20,000 daily active users**, each making **130 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~30.1/s","~150/s","~9030/s","~6.27/s"],"answer":1,"explanation":"20,000 × 130 ÷ 86,400 ≈ 30.1/s average, × 5 ≈ 150/s."},{"prompt":"an online shop has **100,000 daily active users**, each making **110 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~53/s","~76,389/s","~127/s","~1270/s"],"answer":3,"explanation":"100,000 × 110 ÷ 86,400 ≈ 127/s average, × 10 ≈ 1270/s."},{"prompt":"a ticketing system has **200,000 daily active users**, each making **50 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~116/s","~231/s","~13,889/s","~9.65/s"],"answer":1,"explanation":"200,000 × 50 ÷ 86,400 ≈ 116/s average, × 2 ≈ 231/s."},{"prompt":"a photo-sharing app has **50,000 daily active users**, each making **70 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~40.5/s","~4860/s","~3.38/s","~81/s"],"answer":3,"explanation":"50,000 × 70 ÷ 86,400 ≈ 40.5/s average, × 2 ≈ 81/s."},{"prompt":"a booking site has **100,000 daily active users**, each making **40 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~5560/s","~46.3/s","~3.86/s","~92.6/s"],"answer":3,"explanation":"100,000 × 40 ÷ 86,400 ≈ 46.3/s average, × 2 ≈ 92.6/s."}]
---
# Design Drill: Requests per second from daily users #50

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
