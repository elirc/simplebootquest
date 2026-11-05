---
slug: "sd01-qps-4"
title: "Design Drill: Requests per second from daily users #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a ticketing system has **200,000 daily active users**, each making **50 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~14.5/s","~20,833/s","~116/s","~347/s"],"answer":3,"explanation":"200,000 × 50 ÷ 86,400 ≈ 116/s average, × 3 ≈ 347/s."},{"prompt":"a todo app has **100,000 daily active users**, each making **115 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~666/s","~39,931/s","~133/s","~27.7/s"],"answer":0,"explanation":"100,000 × 115 ÷ 86,400 ≈ 133/s average, × 5 ≈ 666/s."},{"prompt":"a photo-sharing app has **5 million daily active users**, each making **70 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~1690/s","~2.43 million/s","~40,509/s","~4050/s"],"answer":2,"explanation":"5 million × 70 ÷ 86,400 ≈ 4050/s average, × 10 ≈ 40,509/s."},{"prompt":"a chat app has **1 million daily active users**, each making **90 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~2080/s","~125,000/s","~1040/s","~86.8/s"],"answer":0,"explanation":"1 million × 90 ÷ 86,400 ≈ 1040/s average, × 2 ≈ 2080/s."},{"prompt":"a recipe app has **200,000 daily active users**, each making **25 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~57.9/s","~34,722/s","~579/s","~24.1/s"],"answer":2,"explanation":"200,000 × 25 ÷ 86,400 ≈ 57.9/s average, × 10 ≈ 579/s."}]
---
# Design Drill: Requests per second from daily users #4

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
