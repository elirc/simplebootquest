---
slug: "sd01-qps-17"
title: "Design Drill: Requests per second from daily users #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a booking site has **500,000 daily active users**, each making **80 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~463/s","~83,333/s","~1390/s","~57.9/s"],"answer":2,"explanation":"500,000 × 80 ÷ 86,400 ≈ 463/s average, × 3 ≈ 1390/s."},{"prompt":"a learning platform has **1 million daily active users**, each making **30 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~347/s","~72.3/s","~104,167/s","~1740/s"],"answer":3,"explanation":"1 million × 30 ÷ 86,400 ≈ 347/s average, × 5 ≈ 1740/s."},{"prompt":"a todo app has **50,000 daily active users**, each making **110 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~127/s","~63.7/s","~5.3/s","~7640/s"],"answer":0,"explanation":"50,000 × 110 ÷ 86,400 ≈ 63.7/s average, × 2 ≈ 127/s."},{"prompt":"a learning platform has **1 million daily active users**, each making **135 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~187,500/s","~3130/s","~1560/s","~130/s"],"answer":1,"explanation":"1 million × 135 ÷ 86,400 ≈ 1560/s average, × 2 ≈ 3130/s."},{"prompt":"a news reader has **2 million daily active users**, each making **125 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~1210/s","~28,935/s","~1.74 million/s","~2890/s"],"answer":1,"explanation":"2 million × 125 ÷ 86,400 ≈ 2890/s average, × 10 ≈ 28,935/s."}]
---
# Design Drill: Requests per second from daily users #17

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
