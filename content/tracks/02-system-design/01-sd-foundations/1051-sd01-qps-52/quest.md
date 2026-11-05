---
slug: "sd01-qps-52"
title: "Design Drill: Requests per second from daily users #52"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"an online shop has **50,000 daily active users**, each making **120 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~12,500/s","~8.68/s","~69.4/s","~208/s"],"answer":3,"explanation":"50,000 × 120 ÷ 86,400 ≈ 69.4/s average, × 3 ≈ 208/s."},{"prompt":"a fitness tracker has **20,000 daily active users**, each making **45 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~1.3/s","~10.4/s","~1880/s","~31.3/s"],"answer":3,"explanation":"20,000 × 45 ÷ 86,400 ≈ 10.4/s average, × 3 ≈ 31.3/s."},{"prompt":"a ticketing system has **10,000 daily active users**, each making **45 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~2.17/s","~3120/s","~5.21/s","~52.1/s"],"answer":3,"explanation":"10,000 × 45 ÷ 86,400 ≈ 5.21/s average, × 10 ≈ 52.1/s."},{"prompt":"an online shop has **1 million daily active users**, each making **25 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~173,611/s","~289/s","~121/s","~2890/s"],"answer":3,"explanation":"1 million × 25 ÷ 86,400 ≈ 289/s average, × 10 ≈ 2890/s."},{"prompt":"a news reader has **500,000 daily active users**, each making **150 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~156,250/s","~2600/s","~868/s","~109/s"],"answer":1,"explanation":"500,000 × 150 ÷ 86,400 ≈ 868/s average, × 3 ≈ 2600/s."}]
---
# Design Drill: Requests per second from daily users #52

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
