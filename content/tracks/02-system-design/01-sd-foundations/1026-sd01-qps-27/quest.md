---
slug: "sd01-qps-27"
title: "Design Drill: Requests per second from daily users #27"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a news reader has **500,000 daily active users**, each making **60 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~347/s","~104,167/s","~72.3/s","~1740/s"],"answer":3,"explanation":"500,000 × 60 ÷ 86,400 ≈ 347/s average, × 5 ≈ 1740/s."},{"prompt":"a recipe app has **500,000 daily active users**, each making **60 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~3470/s","~145/s","~208,333/s","~347/s"],"answer":0,"explanation":"500,000 × 60 ÷ 86,400 ≈ 347/s average, × 10 ≈ 3470/s."},{"prompt":"a todo app has **50,000 daily active users**, each making **55 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~6.63/s","~159/s","~9550/s","~31.8/s"],"answer":1,"explanation":"50,000 × 55 ÷ 86,400 ≈ 31.8/s average, × 5 ≈ 159/s."},{"prompt":"an online shop has **10,000 daily active users**, each making **120 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~1.16/s","~1670/s","~27.8/s","~13.9/s"],"answer":2,"explanation":"10,000 × 120 ÷ 86,400 ≈ 13.9/s average, × 2 ≈ 27.8/s."},{"prompt":"an online shop has **10,000 daily active users**, each making **20 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~2.31/s","~278/s","~0.193/s","~4.63/s"],"answer":3,"explanation":"10,000 × 20 ÷ 86,400 ≈ 2.31/s average, × 2 ≈ 4.63/s."}]
---
# Design Drill: Requests per second from daily users #27

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
