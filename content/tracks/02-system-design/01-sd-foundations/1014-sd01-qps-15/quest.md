---
slug: "sd01-qps-15"
title: "Design Drill: Requests per second from daily users #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a ticketing system has **1 million daily active users**, each making **80 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~111,111/s","~926/s","~1850/s","~77.2/s"],"answer":2,"explanation":"1 million × 80 ÷ 86,400 ≈ 926/s average, × 2 ≈ 1850/s."},{"prompt":"a news reader has **100,000 daily active users**, each making **45 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~9380/s","~156/s","~52.1/s","~6.51/s"],"answer":1,"explanation":"100,000 × 45 ÷ 86,400 ≈ 52.1/s average, × 3 ≈ 156/s."},{"prompt":"a recipe app has **100,000 daily active users**, each making **70 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~10.1/s","~14,583/s","~243/s","~81/s"],"answer":2,"explanation":"100,000 × 70 ÷ 86,400 ≈ 81/s average, × 3 ≈ 243/s."},{"prompt":"a news reader has **200,000 daily active users**, each making **95 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~45.8/s","~65,972/s","~220/s","~1100/s"],"answer":3,"explanation":"200,000 × 95 ÷ 86,400 ≈ 220/s average, × 5 ≈ 1100/s."},{"prompt":"a recipe app has **100,000 daily active users**, each making **55 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~7640/s","~63.7/s","~127/s","~5.3/s"],"answer":2,"explanation":"100,000 × 55 ÷ 86,400 ≈ 63.7/s average, × 2 ≈ 127/s."}]
---
# Design Drill: Requests per second from daily users #15

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
