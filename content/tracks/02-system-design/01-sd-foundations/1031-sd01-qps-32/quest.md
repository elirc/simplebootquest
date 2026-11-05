---
slug: "sd01-qps-32"
title: "Design Drill: Requests per second from daily users #32"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a ticketing system has **500,000 daily active users**, each making **85 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~4920/s","~295,139/s","~205/s","~492/s"],"answer":0,"explanation":"500,000 × 85 ÷ 86,400 ≈ 492/s average, × 10 ≈ 4920/s."},{"prompt":"a chat app has **500,000 daily active users**, each making **60 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~208,333/s","~347/s","~145/s","~3470/s"],"answer":3,"explanation":"500,000 × 60 ÷ 86,400 ≈ 347/s average, × 10 ≈ 3470/s."},{"prompt":"a todo app has **20,000 daily active users**, each making **50 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~3470/s","~57.9/s","~11.6/s","~2.41/s"],"answer":1,"explanation":"20,000 × 50 ÷ 86,400 ≈ 11.6/s average, × 5 ≈ 57.9/s."},{"prompt":"a todo app has **20,000 daily active users**, each making **105 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~3.04/s","~4380/s","~72.9/s","~24.3/s"],"answer":2,"explanation":"20,000 × 105 ÷ 86,400 ≈ 24.3/s average, × 3 ≈ 72.9/s."},{"prompt":"a recipe app has **5 million daily active users**, each making **90 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~1090/s","~1.56 million/s","~26,042/s","~5210/s"],"answer":2,"explanation":"5 million × 90 ÷ 86,400 ≈ 5210/s average, × 5 ≈ 26,042/s."}]
---
# Design Drill: Requests per second from daily users #32

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
