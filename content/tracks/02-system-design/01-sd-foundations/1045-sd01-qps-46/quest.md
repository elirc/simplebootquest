---
slug: "sd01-qps-46"
title: "Design Drill: Requests per second from daily users #46"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a recipe app has **20,000 daily active users**, each making **130 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~9030/s","~150/s","~6.27/s","~30.1/s"],"answer":1,"explanation":"20,000 × 130 ÷ 86,400 ≈ 30.1/s average, × 5 ≈ 150/s."},{"prompt":"a chat app has **500,000 daily active users**, each making **35 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~60,764/s","~203/s","~1010/s","~42.2/s"],"answer":2,"explanation":"500,000 × 35 ÷ 86,400 ≈ 203/s average, × 5 ≈ 1010/s."},{"prompt":"a learning platform has **100,000 daily active users**, each making **85 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~98.4/s","~8.2/s","~197/s","~11,806/s"],"answer":2,"explanation":"100,000 × 85 ÷ 86,400 ≈ 98.4/s average, × 2 ≈ 197/s."},{"prompt":"a chat app has **100,000 daily active users**, each making **50 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~57.9/s","~4.82/s","~116/s","~6940/s"],"answer":2,"explanation":"100,000 × 50 ÷ 86,400 ≈ 57.9/s average, × 2 ≈ 116/s."},{"prompt":"a news reader has **10,000 daily active users**, each making **80 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~0.772/s","~9.26/s","~1110/s","~18.5/s"],"answer":3,"explanation":"10,000 × 80 ÷ 86,400 ≈ 9.26/s average, × 2 ≈ 18.5/s."}]
---
# Design Drill: Requests per second from daily users #46

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
