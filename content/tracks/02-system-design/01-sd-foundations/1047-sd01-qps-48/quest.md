---
slug: "sd01-qps-48"
title: "Design Drill: Requests per second from daily users #48"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a ticketing system has **100,000 daily active users**, each making **85 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~8.2/s","~98.4/s","~11,806/s","~197/s"],"answer":3,"explanation":"100,000 × 85 ÷ 86,400 ≈ 98.4/s average, × 2 ≈ 197/s."},{"prompt":"an online shop has **1 million daily active users**, each making **130 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~3010/s","~125/s","~1500/s","~180,556/s"],"answer":0,"explanation":"1 million × 130 ÷ 86,400 ≈ 1500/s average, × 2 ≈ 3010/s."},{"prompt":"a todo app has **1 million daily active users**, each making **95 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~137/s","~3300/s","~1100/s","~197,917/s"],"answer":1,"explanation":"1 million × 95 ÷ 86,400 ≈ 1100/s average, × 3 ≈ 3300/s."},{"prompt":"a fitness tracker has **20,000 daily active users**, each making **25 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~17.4/s","~1040/s","~5.79/s","~0.723/s"],"answer":0,"explanation":"20,000 × 25 ÷ 86,400 ≈ 5.79/s average, × 3 ≈ 17.4/s."},{"prompt":"a photo-sharing app has **1 million daily active users**, each making **75 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~520,833/s","~8680/s","~868/s","~362/s"],"answer":1,"explanation":"1 million × 75 ÷ 86,400 ≈ 868/s average, × 10 ≈ 8680/s."}]
---
# Design Drill: Requests per second from daily users #48

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
