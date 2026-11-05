---
slug: "sd01-qps-29"
title: "Design Drill: Requests per second from daily users #29"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a todo app has **5 million daily active users**, each making **50 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~2890/s","~1.74 million/s","~1210/s","~28,935/s"],"answer":3,"explanation":"5 million × 50 ÷ 86,400 ≈ 2890/s average, × 10 ≈ 28,935/s."},{"prompt":"a todo app has **100,000 daily active users**, each making **35 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~40.5/s","~4860/s","~3.38/s","~81/s"],"answer":3,"explanation":"100,000 × 35 ÷ 86,400 ≈ 40.5/s average, × 2 ≈ 81/s."},{"prompt":"a learning platform has **1 million daily active users**, each making **120 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~2780/s","~1390/s","~166,667/s","~116/s"],"answer":0,"explanation":"1 million × 120 ÷ 86,400 ≈ 1390/s average, × 2 ≈ 2780/s."},{"prompt":"a todo app has **5 million daily active users**, each making **105 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~1.09 million/s","~18,229/s","~6080/s","~760/s"],"answer":1,"explanation":"5 million × 105 ÷ 86,400 ≈ 6080/s average, × 3 ≈ 18,229/s."},{"prompt":"a booking site has **10,000 daily active users**, each making **15 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~1.74/s","~0.217/s","~5.21/s","~313/s"],"answer":2,"explanation":"10,000 × 15 ÷ 86,400 ≈ 1.74/s average, × 3 ≈ 5.21/s."}]
---
# Design Drill: Requests per second from daily users #29

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
