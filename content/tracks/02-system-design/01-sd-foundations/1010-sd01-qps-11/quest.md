---
slug: "sd01-qps-11"
title: "Design Drill: Requests per second from daily users #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a booking site has **10,000 daily active users**, each making **125 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~6.03/s","~14.5/s","~145/s","~8680/s"],"answer":2,"explanation":"10,000 × 125 ÷ 86,400 ≈ 14.5/s average, × 10 ≈ 145/s."},{"prompt":"a ticketing system has **10,000 daily active users**, each making **130 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~150/s","~9030/s","~6.27/s","~15/s"],"answer":0,"explanation":"10,000 × 130 ÷ 86,400 ≈ 15/s average, × 10 ≈ 150/s."},{"prompt":"a photo-sharing app has **50,000 daily active users**, each making **150 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~7.23/s","~174/s","~10,417/s","~86.8/s"],"answer":1,"explanation":"50,000 × 150 ÷ 86,400 ≈ 86.8/s average, × 2 ≈ 174/s."},{"prompt":"a learning platform has **5 million daily active users**, each making **105 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~760/s","~6080/s","~18,229/s","~1.09 million/s"],"answer":2,"explanation":"5 million × 105 ÷ 86,400 ≈ 6080/s average, × 3 ≈ 18,229/s."},{"prompt":"a todo app has **1 million daily active users**, each making **125 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~1450/s","~260,417/s","~4340/s","~181/s"],"answer":2,"explanation":"1 million × 125 ÷ 86,400 ≈ 1450/s average, × 3 ≈ 4340/s."}]
---
# Design Drill: Requests per second from daily users #11

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
