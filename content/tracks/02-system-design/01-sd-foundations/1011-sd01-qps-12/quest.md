---
slug: "sd01-qps-12"
title: "Design Drill: Requests per second from daily users #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a todo app has **10,000 daily active users**, each making **20 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~0.482/s","~11.6/s","~2.31/s","~694/s"],"answer":1,"explanation":"10,000 × 20 ÷ 86,400 ≈ 2.31/s average, × 5 ≈ 11.6/s."},{"prompt":"a recipe app has **20,000 daily active users**, each making **50 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~116/s","~4.82/s","~11.6/s","~6940/s"],"answer":0,"explanation":"20,000 × 50 ÷ 86,400 ≈ 11.6/s average, × 10 ≈ 116/s."},{"prompt":"a booking site has **50,000 daily active users**, each making **10 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~0.723/s","~5.79/s","~1040/s","~17.4/s"],"answer":3,"explanation":"50,000 × 10 ÷ 86,400 ≈ 5.79/s average, × 3 ≈ 17.4/s."},{"prompt":"a recipe app has **5 million daily active users**, each making **35 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~2030/s","~6080/s","~253/s","~364,583/s"],"answer":1,"explanation":"5 million × 35 ÷ 86,400 ≈ 2030/s average, × 3 ≈ 6080/s."},{"prompt":"a news reader has **200,000 daily active users**, each making **40 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~11.6/s","~92.6/s","~278/s","~16,667/s"],"answer":2,"explanation":"200,000 × 40 ÷ 86,400 ≈ 92.6/s average, × 3 ≈ 278/s."}]
---
# Design Drill: Requests per second from daily users #12

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
