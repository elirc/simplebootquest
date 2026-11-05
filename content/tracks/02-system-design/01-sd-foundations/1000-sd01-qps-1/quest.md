---
slug: "sd01-qps-1"
title: "Design Drill: Requests per second from daily users #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a chat app has **10,000 daily active users**, each making **85 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~2.05/s","~9.84/s","~2950/s","~49.2/s"],"answer":3,"explanation":"10,000 × 85 ÷ 86,400 ≈ 9.84/s average, × 5 ≈ 49.2/s."},{"prompt":"a todo app has **200,000 daily active users**, each making **70 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~20.3/s","~29,167/s","~486/s","~162/s"],"answer":2,"explanation":"200,000 × 70 ÷ 86,400 ≈ 162/s average, × 3 ≈ 486/s."},{"prompt":"a chat app has **10,000 daily active users**, each making **65 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~0.94/s","~1350/s","~7.52/s","~22.6/s"],"answer":3,"explanation":"10,000 × 65 ÷ 86,400 ≈ 7.52/s average, × 3 ≈ 22.6/s."},{"prompt":"a photo-sharing app has **2 million daily active users**, each making **70 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~3240/s","~1620/s","~194,444/s","~135/s"],"answer":0,"explanation":"2 million × 70 ÷ 86,400 ≈ 1620/s average, × 2 ≈ 3240/s."},{"prompt":"a learning platform has **200,000 daily active users**, each making **75 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~104,167/s","~174/s","~1740/s","~72.3/s"],"answer":2,"explanation":"200,000 × 75 ÷ 86,400 ≈ 174/s average, × 10 ≈ 1740/s."}]
---
# Design Drill: Requests per second from daily users #1

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
