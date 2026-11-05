---
slug: "sd01-qps-43"
title: "Design Drill: Requests per second from daily users #43"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a booking site has **50,000 daily active users**, each making **10 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~1.21/s","~28.9/s","~1740/s","~5.79/s"],"answer":1,"explanation":"50,000 × 10 ÷ 86,400 ≈ 5.79/s average, × 5 ≈ 28.9/s."},{"prompt":"a todo app has **50,000 daily active users**, each making **25 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~6.03/s","~145/s","~8680/s","~14.5/s"],"answer":1,"explanation":"50,000 × 25 ÷ 86,400 ≈ 14.5/s average, × 10 ≈ 145/s."},{"prompt":"a fitness tracker has **50,000 daily active users**, each making **125 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~72.3/s","~15.1/s","~362/s","~21,701/s"],"answer":2,"explanation":"50,000 × 125 ÷ 86,400 ≈ 72.3/s average, × 5 ≈ 362/s."},{"prompt":"a chat app has **10,000 daily active users**, each making **95 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~3300/s","~11/s","~2.29/s","~55/s"],"answer":3,"explanation":"10,000 × 95 ÷ 86,400 ≈ 11/s average, × 5 ≈ 55/s."},{"prompt":"a news reader has **500,000 daily active users**, each making **105 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~6080/s","~364,583/s","~253/s","~608/s"],"answer":0,"explanation":"500,000 × 105 ÷ 86,400 ≈ 608/s average, × 10 ≈ 6080/s."}]
---
# Design Drill: Requests per second from daily users #43

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
