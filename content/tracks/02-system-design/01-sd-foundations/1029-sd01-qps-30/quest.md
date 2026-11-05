---
slug: "sd01-qps-30"
title: "Design Drill: Requests per second from daily users #30"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a fitness tracker has **20,000 daily active users**, each making **75 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~1.45/s","~2080/s","~34.7/s","~17.4/s"],"answer":2,"explanation":"20,000 × 75 ÷ 86,400 ≈ 17.4/s average, × 2 ≈ 34.7/s."},{"prompt":"a booking site has **50,000 daily active users**, each making **75 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~18.1/s","~26,042/s","~434/s","~43.4/s"],"answer":2,"explanation":"50,000 × 75 ÷ 86,400 ≈ 43.4/s average, × 10 ≈ 434/s."},{"prompt":"a fitness tracker has **5 million daily active users**, each making **85 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~2050/s","~2.95 million/s","~49,190/s","~4920/s"],"answer":2,"explanation":"5 million × 85 ÷ 86,400 ≈ 4920/s average, × 10 ≈ 49,190/s."},{"prompt":"a todo app has **20,000 daily active users**, each making **120 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~27.8/s","~3330/s","~55.6/s","~2.31/s"],"answer":2,"explanation":"20,000 × 120 ÷ 86,400 ≈ 27.8/s average, × 2 ≈ 55.6/s."},{"prompt":"a learning platform has **500,000 daily active users**, each making **55 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~38,194/s","~26.5/s","~318/s","~637/s"],"answer":3,"explanation":"500,000 × 55 ÷ 86,400 ≈ 318/s average, × 2 ≈ 637/s."}]
---
# Design Drill: Requests per second from daily users #30

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
