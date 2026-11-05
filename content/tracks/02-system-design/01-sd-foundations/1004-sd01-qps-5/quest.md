---
slug: "sd01-qps-5"
title: "Design Drill: Requests per second from daily users #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a recipe app has **5 million daily active users**, each making **70 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~40,509/s","~4050/s","~1690/s","~2.43 million/s"],"answer":0,"explanation":"5 million × 70 ÷ 86,400 ≈ 4050/s average, × 10 ≈ 40,509/s."},{"prompt":"a booking site has **10,000 daily active users**, each making **135 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~1.3/s","~1880/s","~31.3/s","~15.6/s"],"answer":2,"explanation":"10,000 × 135 ÷ 86,400 ≈ 15.6/s average, × 2 ≈ 31.3/s."},{"prompt":"a chat app has **100,000 daily active users**, each making **30 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~34.7/s","~104/s","~4.34/s","~6250/s"],"answer":1,"explanation":"100,000 × 30 ÷ 86,400 ≈ 34.7/s average, × 3 ≈ 104/s."},{"prompt":"a recipe app has **100,000 daily active users**, each making **120 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~57.9/s","~83,333/s","~139/s","~1390/s"],"answer":3,"explanation":"100,000 × 120 ÷ 86,400 ≈ 139/s average, × 10 ≈ 1390/s."},{"prompt":"a ticketing system has **50,000 daily active users**, each making **140 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~14,583/s","~81/s","~10.1/s","~243/s"],"answer":3,"explanation":"50,000 × 140 ÷ 86,400 ≈ 81/s average, × 3 ≈ 243/s."}]
---
# Design Drill: Requests per second from daily users #5

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
