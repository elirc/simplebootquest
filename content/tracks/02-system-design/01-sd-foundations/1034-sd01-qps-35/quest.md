---
slug: "sd01-qps-35"
title: "Design Drill: Requests per second from daily users #35"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a news reader has **100,000 daily active users**, each making **15 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~3120/s","~17.4/s","~52.1/s","~2.17/s"],"answer":2,"explanation":"100,000 × 15 ÷ 86,400 ≈ 17.4/s average, × 3 ≈ 52.1/s."},{"prompt":"a fitness tracker has **5 million daily active users**, each making **25 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~2890/s","~121/s","~173,611/s","~1450/s"],"answer":0,"explanation":"5 million × 25 ÷ 86,400 ≈ 1450/s average, × 2 ≈ 2890/s."},{"prompt":"a ticketing system has **5 million daily active users**, each making **150 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~3620/s","~5.21 million/s","~86,806/s","~8680/s"],"answer":2,"explanation":"5 million × 150 ÷ 86,400 ≈ 8680/s average, × 10 ≈ 86,806/s."},{"prompt":"a recipe app has **100,000 daily active users**, each making **95 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~110/s","~22.9/s","~32,986/s","~550/s"],"answer":3,"explanation":"100,000 × 95 ÷ 86,400 ≈ 110/s average, × 5 ≈ 550/s."},{"prompt":"a todo app has **1 million daily active users**, each making **85 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~2950/s","~123/s","~984/s","~177,083/s"],"answer":0,"explanation":"1 million × 85 ÷ 86,400 ≈ 984/s average, × 3 ≈ 2950/s."}]
---
# Design Drill: Requests per second from daily users #35

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
