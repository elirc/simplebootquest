---
slug: "sd01-qps-3"
title: "Design Drill: Requests per second from daily users #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a ticketing system has **50,000 daily active users**, each making **140 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~24,306/s","~16.9/s","~405/s","~81/s"],"answer":2,"explanation":"50,000 × 140 ÷ 86,400 ≈ 81/s average, × 5 ≈ 405/s."},{"prompt":"a recipe app has **10,000 daily active users**, each making **25 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~0.603/s","~14.5/s","~2.89/s","~868/s"],"answer":1,"explanation":"10,000 × 25 ÷ 86,400 ≈ 2.89/s average, × 5 ≈ 14.5/s."},{"prompt":"a news reader has **20,000 daily active users**, each making **110 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~5.3/s","~127/s","~7640/s","~25.5/s"],"answer":1,"explanation":"20,000 × 110 ÷ 86,400 ≈ 25.5/s average, × 5 ≈ 127/s."},{"prompt":"a ticketing system has **10,000 daily active users**, each making **135 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~156/s","~15.6/s","~6.51/s","~9380/s"],"answer":0,"explanation":"10,000 × 135 ÷ 86,400 ≈ 15.6/s average, × 10 ≈ 156/s."},{"prompt":"a ticketing system has **50,000 daily active users**, each making **105 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~36,458/s","~25.3/s","~60.8/s","~608/s"],"answer":3,"explanation":"50,000 × 105 ÷ 86,400 ≈ 60.8/s average, × 10 ≈ 608/s."}]
---
# Design Drill: Requests per second from daily users #3

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
