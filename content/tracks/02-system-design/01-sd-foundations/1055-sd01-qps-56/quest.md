---
slug: "sd01-qps-56"
title: "Design Drill: Requests per second from daily users #56"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a ticketing system has **1 million daily active users**, each making **135 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~937,500/s","~651/s","~15,625/s","~1560/s"],"answer":2,"explanation":"1 million × 135 ÷ 86,400 ≈ 1560/s average, × 10 ≈ 15,625/s."},{"prompt":"a booking site has **100,000 daily active users**, each making **30 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~34.7/s","~10,417/s","~7.23/s","~174/s"],"answer":3,"explanation":"100,000 × 30 ÷ 86,400 ≈ 34.7/s average, × 5 ≈ 174/s."},{"prompt":"an online shop has **100,000 daily active users**, each making **150 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~21.7/s","~174/s","~31,250/s","~521/s"],"answer":3,"explanation":"100,000 × 150 ÷ 86,400 ≈ 174/s average, × 3 ≈ 521/s."},{"prompt":"a news reader has **10,000 daily active users**, each making **25 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~1.21/s","~2.89/s","~1740/s","~28.9/s"],"answer":3,"explanation":"10,000 × 25 ÷ 86,400 ≈ 2.89/s average, × 10 ≈ 28.9/s."},{"prompt":"an online shop has **10,000 daily active users**, each making **60 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~34.7/s","~1.45/s","~2080/s","~6.94/s"],"answer":0,"explanation":"10,000 × 60 ÷ 86,400 ≈ 6.94/s average, × 5 ≈ 34.7/s."}]
---
# Design Drill: Requests per second from daily users #56

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
