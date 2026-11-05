---
slug: "sd01-qps-25"
title: "Design Drill: Requests per second from daily users #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a recipe app has **2 million daily active users**, each making **90 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~2080/s","~6250/s","~260/s","~375,000/s"],"answer":1,"explanation":"2 million × 90 ÷ 86,400 ≈ 2080/s average, × 3 ≈ 6250/s."},{"prompt":"an online shop has **20,000 daily active users**, each making **75 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~34.7/s","~17.4/s","~1.45/s","~2080/s"],"answer":0,"explanation":"20,000 × 75 ÷ 86,400 ≈ 17.4/s average, × 2 ≈ 34.7/s."},{"prompt":"a news reader has **10,000 daily active users**, each making **115 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~1.11/s","~13.3/s","~1600/s","~26.6/s"],"answer":3,"explanation":"10,000 × 115 ÷ 86,400 ≈ 13.3/s average, × 2 ≈ 26.6/s."},{"prompt":"an online shop has **1 million daily active users**, each making **35 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~810/s","~405/s","~48,611/s","~33.8/s"],"answer":0,"explanation":"1 million × 35 ÷ 86,400 ≈ 405/s average, × 2 ≈ 810/s."},{"prompt":"a learning platform has **50,000 daily active users**, each making **75 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~7810/s","~130/s","~5.43/s","~43.4/s"],"answer":1,"explanation":"50,000 × 75 ÷ 86,400 ≈ 43.4/s average, × 3 ≈ 130/s."}]
---
# Design Drill: Requests per second from daily users #25

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
