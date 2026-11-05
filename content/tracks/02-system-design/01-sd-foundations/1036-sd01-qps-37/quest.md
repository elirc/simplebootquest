---
slug: "sd01-qps-37"
title: "Design Drill: Requests per second from daily users #37"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a booking site has **500,000 daily active users**, each making **105 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~608/s","~364,583/s","~253/s","~6080/s"],"answer":3,"explanation":"500,000 × 105 ÷ 86,400 ≈ 608/s average, × 10 ≈ 6080/s."},{"prompt":"a learning platform has **20,000 daily active users**, each making **25 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~0.723/s","~17.4/s","~1040/s","~5.79/s"],"answer":1,"explanation":"20,000 × 25 ÷ 86,400 ≈ 5.79/s average, × 3 ≈ 17.4/s."},{"prompt":"a booking site has **20,000 daily active users**, each making **130 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~30.1/s","~2.51/s","~3610/s","~60.2/s"],"answer":3,"explanation":"20,000 × 130 ÷ 86,400 ≈ 30.1/s average, × 2 ≈ 60.2/s."},{"prompt":"a todo app has **1 million daily active users**, each making **125 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~121/s","~2890/s","~1450/s","~173,611/s"],"answer":1,"explanation":"1 million × 125 ÷ 86,400 ≈ 1450/s average, × 2 ≈ 2890/s."},{"prompt":"a todo app has **100,000 daily active users**, each making **10 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~6940/s","~116/s","~4.82/s","~11.6/s"],"answer":1,"explanation":"100,000 × 10 ÷ 86,400 ≈ 11.6/s average, × 10 ≈ 116/s."}]
---
# Design Drill: Requests per second from daily users #37

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
