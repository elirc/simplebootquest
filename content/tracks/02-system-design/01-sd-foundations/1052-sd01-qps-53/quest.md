---
slug: "sd01-qps-53"
title: "Design Drill: Requests per second from daily users #53"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"an online shop has **500,000 daily active users**, each making **25 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~18.1/s","~145/s","~26,042/s","~434/s"],"answer":3,"explanation":"500,000 × 25 ÷ 86,400 ≈ 145/s average, × 3 ≈ 434/s."},{"prompt":"a fitness tracker has **20,000 daily active users**, each making **140 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~5830/s","~4.05/s","~97.2/s","~32.4/s"],"answer":2,"explanation":"20,000 × 140 ÷ 86,400 ≈ 32.4/s average, × 3 ≈ 97.2/s."},{"prompt":"a news reader has **20,000 daily active users**, each making **115 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~53.2/s","~26.6/s","~3190/s","~2.22/s"],"answer":0,"explanation":"20,000 × 115 ÷ 86,400 ≈ 26.6/s average, × 2 ≈ 53.2/s."},{"prompt":"a todo app has **1 million daily active users**, each making **25 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~289/s","~86,806/s","~1450/s","~60.3/s"],"answer":2,"explanation":"1 million × 25 ÷ 86,400 ≈ 289/s average, × 5 ≈ 1450/s."},{"prompt":"a booking site has **10,000 daily active users**, each making **140 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~81/s","~3.38/s","~16.2/s","~4860/s"],"answer":0,"explanation":"10,000 × 140 ÷ 86,400 ≈ 16.2/s average, × 5 ≈ 81/s."}]
---
# Design Drill: Requests per second from daily users #53

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
