---
slug: "sd01-qps-2"
title: "Design Drill: Requests per second from daily users #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a ticketing system has **50,000 daily active users**, each making **65 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~188/s","~7.84/s","~11,285/s","~37.6/s"],"answer":0,"explanation":"50,000 × 65 ÷ 86,400 ≈ 37.6/s average, × 5 ≈ 188/s."},{"prompt":"a chat app has **20,000 daily active users**, each making **150 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~4170/s","~69.4/s","~34.7/s","~2.89/s"],"answer":1,"explanation":"20,000 × 150 ÷ 86,400 ≈ 34.7/s average, × 2 ≈ 69.4/s."},{"prompt":"a photo-sharing app has **500,000 daily active users**, each making **30 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~52,083/s","~174/s","~868/s","~36.2/s"],"answer":2,"explanation":"500,000 × 30 ÷ 86,400 ≈ 174/s average, × 5 ≈ 868/s."},{"prompt":"a chat app has **500,000 daily active users**, each making **120 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~694/s","~416,667/s","~6940/s","~289/s"],"answer":2,"explanation":"500,000 × 120 ÷ 86,400 ≈ 694/s average, × 10 ≈ 6940/s."},{"prompt":"a chat app has **2 million daily active users**, each making **150 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~1.04 million/s","~3470/s","~723/s","~17,361/s"],"answer":3,"explanation":"2 million × 150 ÷ 86,400 ≈ 3470/s average, × 5 ≈ 17,361/s."}]
---
# Design Drill: Requests per second from daily users #2

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
