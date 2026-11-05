---
slug: "sd01-qps-42"
title: "Design Drill: Requests per second from daily users #42"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a fitness tracker has **10,000 daily active users**, each making **90 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~10.4/s","~0.868/s","~20.8/s","~1250/s"],"answer":2,"explanation":"10,000 × 90 ÷ 86,400 ≈ 10.4/s average, × 2 ≈ 20.8/s."},{"prompt":"a ticketing system has **20,000 daily active users**, each making **65 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~15/s","~1.25/s","~30.1/s","~1810/s"],"answer":2,"explanation":"20,000 × 65 ÷ 86,400 ≈ 15/s average, × 2 ≈ 30.1/s."},{"prompt":"a learning platform has **100,000 daily active users**, each making **65 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~22,569/s","~15.7/s","~376/s","~75.2/s"],"answer":2,"explanation":"100,000 × 65 ÷ 86,400 ≈ 75.2/s average, × 5 ≈ 376/s."},{"prompt":"a photo-sharing app has **100,000 daily active users**, each making **150 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~36.2/s","~52,083/s","~174/s","~868/s"],"answer":3,"explanation":"100,000 × 150 ÷ 86,400 ≈ 174/s average, × 5 ≈ 868/s."},{"prompt":"an online shop has **200,000 daily active users**, each making **55 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~255/s","~127/s","~15,278/s","~10.6/s"],"answer":0,"explanation":"200,000 × 55 ÷ 86,400 ≈ 127/s average, × 2 ≈ 255/s."}]
---
# Design Drill: Requests per second from daily users #42

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
