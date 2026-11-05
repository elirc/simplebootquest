---
slug: "sd01-qps-60"
title: "Design Drill: Requests per second from daily users #60"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a photo-sharing app has **5 million daily active users**, each making **90 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~26,042/s","~5210/s","~1.56 million/s","~1090/s"],"answer":0,"explanation":"5 million × 90 ÷ 86,400 ≈ 5210/s average, × 5 ≈ 26,042/s."},{"prompt":"a ticketing system has **50,000 daily active users**, each making **145 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~83.9/s","~6.99/s","~10,069/s","~168/s"],"answer":3,"explanation":"50,000 × 145 ÷ 86,400 ≈ 83.9/s average, × 2 ≈ 168/s."},{"prompt":"a recipe app has **50,000 daily active users**, each making **50 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~289/s","~12.1/s","~28.9/s","~17,361/s"],"answer":0,"explanation":"50,000 × 50 ÷ 86,400 ≈ 28.9/s average, × 10 ≈ 289/s."},{"prompt":"a news reader has **200,000 daily active users**, each making **105 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~50.6/s","~243/s","~1220/s","~72,917/s"],"answer":2,"explanation":"200,000 × 105 ÷ 86,400 ≈ 243/s average, × 5 ≈ 1220/s."},{"prompt":"a learning platform has **100,000 daily active users**, each making **75 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~86.8/s","~10.9/s","~15,625/s","~260/s"],"answer":3,"explanation":"100,000 × 75 ÷ 86,400 ≈ 86.8/s average, × 3 ≈ 260/s."}]
---
# Design Drill: Requests per second from daily users #60

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
