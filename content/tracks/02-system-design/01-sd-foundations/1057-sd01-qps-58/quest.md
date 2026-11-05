---
slug: "sd01-qps-58"
title: "Design Drill: Requests per second from daily users #58"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"an online shop has **10,000 daily active users**, each making **115 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~66.6/s","~13.3/s","~2.77/s","~3990/s"],"answer":0,"explanation":"10,000 × 115 ÷ 86,400 ≈ 13.3/s average, × 5 ≈ 66.6/s."},{"prompt":"an online shop has **10,000 daily active users**, each making **25 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~2.89/s","~14.5/s","~868/s","~0.603/s"],"answer":1,"explanation":"10,000 × 25 ÷ 86,400 ≈ 2.89/s average, × 5 ≈ 14.5/s."},{"prompt":"a fitness tracker has **500,000 daily active users**, each making **45 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~54.3/s","~78,125/s","~1300/s","~260/s"],"answer":2,"explanation":"500,000 × 45 ÷ 86,400 ≈ 260/s average, × 5 ≈ 1300/s."},{"prompt":"a ticketing system has **5 million daily active users**, each making **45 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~781,250/s","~2600/s","~13,021/s","~543/s"],"answer":2,"explanation":"5 million × 45 ÷ 86,400 ≈ 2600/s average, × 5 ≈ 13,021/s."},{"prompt":"an online shop has **50,000 daily active users**, each making **35 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~8.44/s","~203/s","~12,153/s","~20.3/s"],"answer":1,"explanation":"50,000 × 35 ÷ 86,400 ≈ 20.3/s average, × 10 ≈ 203/s."}]
---
# Design Drill: Requests per second from daily users #58

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
