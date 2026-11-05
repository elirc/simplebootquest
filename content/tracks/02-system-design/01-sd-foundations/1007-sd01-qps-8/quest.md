---
slug: "sd01-qps-8"
title: "Design Drill: Requests per second from daily users #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"an online shop has **200,000 daily active users**, each making **25 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~4.82/s","~57.9/s","~116/s","~6940/s"],"answer":2,"explanation":"200,000 × 25 ÷ 86,400 ≈ 57.9/s average, × 2 ≈ 116/s."},{"prompt":"a news reader has **10,000 daily active users**, each making **35 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~4.05/s","~0.338/s","~8.1/s","~486/s"],"answer":2,"explanation":"10,000 × 35 ÷ 86,400 ≈ 4.05/s average, × 2 ≈ 8.1/s."},{"prompt":"an online shop has **500,000 daily active users**, each making **90 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~156,250/s","~109/s","~2600/s","~521/s"],"answer":2,"explanation":"500,000 × 90 ÷ 86,400 ≈ 521/s average, × 5 ≈ 2600/s."},{"prompt":"a recipe app has **200,000 daily active users**, each making **30 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~694/s","~28.9/s","~69.4/s","~41,667/s"],"answer":0,"explanation":"200,000 × 30 ÷ 86,400 ≈ 69.4/s average, × 10 ≈ 694/s."},{"prompt":"a recipe app has **5 million daily active users**, each making **115 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~798,611/s","~555/s","~6660/s","~13,310/s"],"answer":3,"explanation":"5 million × 115 ÷ 86,400 ≈ 6660/s average, × 2 ≈ 13,310/s."}]
---
# Design Drill: Requests per second from daily users #8

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
