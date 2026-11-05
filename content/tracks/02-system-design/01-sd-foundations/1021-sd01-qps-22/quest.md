---
slug: "sd01-qps-22"
title: "Design Drill: Requests per second from daily users #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a news reader has **500,000 daily active users**, each making **105 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~76/s","~109,375/s","~608/s","~1820/s"],"answer":3,"explanation":"500,000 × 105 ÷ 86,400 ≈ 608/s average, × 3 ≈ 1820/s."},{"prompt":"a photo-sharing app has **1 million daily active users**, each making **110 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~265/s","~6370/s","~381,944/s","~1270/s"],"answer":1,"explanation":"1 million × 110 ÷ 86,400 ≈ 1270/s average, × 5 ≈ 6370/s."},{"prompt":"a learning platform has **200,000 daily active users**, each making **70 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~324/s","~19,444/s","~13.5/s","~162/s"],"answer":0,"explanation":"200,000 × 70 ÷ 86,400 ≈ 162/s average, × 2 ≈ 324/s."},{"prompt":"a todo app has **2 million daily active users**, each making **35 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~243,056/s","~4050/s","~169/s","~810/s"],"answer":1,"explanation":"2 million × 35 ÷ 86,400 ≈ 810/s average, × 5 ≈ 4050/s."},{"prompt":"a photo-sharing app has **10,000 daily active users**, each making **85 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~9.84/s","~2950/s","~2.05/s","~49.2/s"],"answer":3,"explanation":"10,000 × 85 ÷ 86,400 ≈ 9.84/s average, × 5 ≈ 49.2/s."}]
---
# Design Drill: Requests per second from daily users #22

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
