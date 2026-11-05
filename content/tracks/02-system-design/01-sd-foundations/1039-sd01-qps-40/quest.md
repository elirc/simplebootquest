---
slug: "sd01-qps-40"
title: "Design Drill: Requests per second from daily users #40"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a learning platform has **50,000 daily active users**, each making **100 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~289/s","~57.9/s","~17,361/s","~12.1/s"],"answer":0,"explanation":"50,000 × 100 ÷ 86,400 ≈ 57.9/s average, × 5 ≈ 289/s."},{"prompt":"a ticketing system has **50,000 daily active users**, each making **125 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~6.03/s","~8680/s","~72.3/s","~145/s"],"answer":3,"explanation":"50,000 × 125 ÷ 86,400 ≈ 72.3/s average, × 2 ≈ 145/s."},{"prompt":"a recipe app has **100,000 daily active users**, each making **95 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~19,792/s","~110/s","~330/s","~13.7/s"],"answer":2,"explanation":"100,000 × 95 ÷ 86,400 ≈ 110/s average, × 3 ≈ 330/s."},{"prompt":"a photo-sharing app has **20,000 daily active users**, each making **115 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~26.6/s","~4790/s","~79.9/s","~3.33/s"],"answer":2,"explanation":"20,000 × 115 ÷ 86,400 ≈ 26.6/s average, × 3 ≈ 79.9/s."},{"prompt":"an online shop has **200,000 daily active users**, each making **105 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~101/s","~2430/s","~145,833/s","~243/s"],"answer":1,"explanation":"200,000 × 105 ÷ 86,400 ≈ 243/s average, × 10 ≈ 2430/s."}]
---
# Design Drill: Requests per second from daily users #40

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
