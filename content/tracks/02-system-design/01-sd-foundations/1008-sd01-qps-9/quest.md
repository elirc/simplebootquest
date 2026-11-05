---
slug: "sd01-qps-9"
title: "Design Drill: Requests per second from daily users #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a booking site has **50,000 daily active users**, each making **35 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~12,153/s","~20.3/s","~8.44/s","~203/s"],"answer":3,"explanation":"50,000 × 35 ÷ 86,400 ≈ 20.3/s average, × 10 ≈ 203/s."},{"prompt":"a photo-sharing app has **100,000 daily active users**, each making **150 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~174/s","~521/s","~21.7/s","~31,250/s"],"answer":1,"explanation":"100,000 × 150 ÷ 86,400 ≈ 174/s average, × 3 ≈ 521/s."},{"prompt":"a learning platform has **500,000 daily active users**, each making **110 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~1910/s","~114,583/s","~79.6/s","~637/s"],"answer":0,"explanation":"500,000 × 110 ÷ 86,400 ≈ 637/s average, × 3 ≈ 1910/s."},{"prompt":"a fitness tracker has **2 million daily active users**, each making **145 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~3360/s","~604,167/s","~420/s","~10,069/s"],"answer":3,"explanation":"2 million × 145 ÷ 86,400 ≈ 3360/s average, × 3 ≈ 10,069/s."},{"prompt":"a news reader has **50,000 daily active users**, each making **100 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~4.82/s","~57.9/s","~116/s","~6940/s"],"answer":2,"explanation":"50,000 × 100 ÷ 86,400 ≈ 57.9/s average, × 2 ≈ 116/s."}]
---
# Design Drill: Requests per second from daily users #9

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
