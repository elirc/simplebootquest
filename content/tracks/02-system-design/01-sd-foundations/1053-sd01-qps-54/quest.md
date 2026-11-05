---
slug: "sd01-qps-54"
title: "Design Drill: Requests per second from daily users #54"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a booking site has **200,000 daily active users**, each making **135 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~313/s","~39.1/s","~56,250/s","~938/s"],"answer":3,"explanation":"200,000 × 135 ÷ 86,400 ≈ 313/s average, × 3 ≈ 938/s."},{"prompt":"a booking site has **50,000 daily active users**, each making **15 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~1.09/s","~8.68/s","~1560/s","~26/s"],"answer":3,"explanation":"50,000 × 15 ÷ 86,400 ≈ 8.68/s average, × 3 ≈ 26/s."},{"prompt":"a todo app has **2 million daily active users**, each making **10 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~27,778/s","~19.3/s","~231/s","~463/s"],"answer":3,"explanation":"2 million × 10 ÷ 86,400 ≈ 231/s average, × 2 ≈ 463/s."},{"prompt":"a chat app has **5 million daily active users**, each making **15 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~1740/s","~72.3/s","~868/s","~104,167/s"],"answer":0,"explanation":"5 million × 15 ÷ 86,400 ≈ 868/s average, × 2 ≈ 1740/s."},{"prompt":"a photo-sharing app has **500,000 daily active users**, each making **90 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~217/s","~312,500/s","~5210/s","~521/s"],"answer":2,"explanation":"500,000 × 90 ÷ 86,400 ≈ 521/s average, × 10 ≈ 5210/s."}]
---
# Design Drill: Requests per second from daily users #54

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
