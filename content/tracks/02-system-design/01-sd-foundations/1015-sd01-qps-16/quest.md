---
slug: "sd01-qps-16"
title: "Design Drill: Requests per second from daily users #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a fitness tracker has **200,000 daily active users**, each making **40 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~92.6/s","~926/s","~38.6/s","~55,556/s"],"answer":1,"explanation":"200,000 × 40 ÷ 86,400 ≈ 92.6/s average, × 10 ≈ 926/s."},{"prompt":"a todo app has **5 million daily active users**, each making **35 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~2030/s","~607,639/s","~10,127/s","~422/s"],"answer":2,"explanation":"5 million × 35 ÷ 86,400 ≈ 2030/s average, × 5 ≈ 10,127/s."},{"prompt":"a chat app has **500,000 daily active users**, each making **10 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~57.9/s","~4.82/s","~116/s","~6940/s"],"answer":2,"explanation":"500,000 × 10 ÷ 86,400 ≈ 57.9/s average, × 2 ≈ 116/s."},{"prompt":"a learning platform has **100,000 daily active users**, each making **120 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~417/s","~25,000/s","~139/s","~17.4/s"],"answer":0,"explanation":"100,000 × 120 ÷ 86,400 ≈ 139/s average, × 3 ≈ 417/s."},{"prompt":"an online shop has **1 million daily active users**, each making **120 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~174/s","~250,000/s","~4170/s","~1390/s"],"answer":2,"explanation":"1 million × 120 ÷ 86,400 ≈ 1390/s average, × 3 ≈ 4170/s."}]
---
# Design Drill: Requests per second from daily users #16

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
