---
slug: "sd01-qps-28"
title: "Design Drill: Requests per second from daily users #28"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a fitness tracker has **500,000 daily active users**, each making **110 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~1910/s","~114,583/s","~637/s","~79.6/s"],"answer":0,"explanation":"500,000 × 110 ÷ 86,400 ≈ 637/s average, × 3 ≈ 1910/s."},{"prompt":"a todo app has **10,000 daily active users**, each making **75 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~0.723/s","~1040/s","~17.4/s","~8.68/s"],"answer":2,"explanation":"10,000 × 75 ÷ 86,400 ≈ 8.68/s average, × 2 ≈ 17.4/s."},{"prompt":"a fitness tracker has **100,000 daily active users**, each making **30 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~104/s","~6250/s","~4.34/s","~34.7/s"],"answer":0,"explanation":"100,000 × 30 ÷ 86,400 ≈ 34.7/s average, × 3 ≈ 104/s."},{"prompt":"a learning platform has **5 million daily active users**, each making **135 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~937,500/s","~7810/s","~651/s","~15,625/s"],"answer":3,"explanation":"5 million × 135 ÷ 86,400 ≈ 7810/s average, × 2 ≈ 15,625/s."},{"prompt":"a fitness tracker has **10,000 daily active users**, each making **15 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~3.47/s","~0.145/s","~208/s","~1.74/s"],"answer":0,"explanation":"10,000 × 15 ÷ 86,400 ≈ 1.74/s average, × 2 ≈ 3.47/s."}]
---
# Design Drill: Requests per second from daily users #28

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
