---
slug: "sd01-qps-47"
title: "Design Drill: Requests per second from daily users #47"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a chat app has **2 million daily active users**, each making **130 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~3010/s","~1.81 million/s","~30,093/s","~1250/s"],"answer":2,"explanation":"2 million × 130 ÷ 86,400 ≈ 3010/s average, × 10 ≈ 30,093/s."},{"prompt":"an online shop has **100,000 daily active users**, each making **145 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~35/s","~168/s","~839/s","~50,347/s"],"answer":2,"explanation":"100,000 × 145 ÷ 86,400 ≈ 168/s average, × 5 ≈ 839/s."},{"prompt":"a news reader has **2 million daily active users**, each making **130 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~6020/s","~3010/s","~361,111/s","~251/s"],"answer":0,"explanation":"2 million × 130 ÷ 86,400 ≈ 3010/s average, × 2 ≈ 6020/s."},{"prompt":"a booking site has **50,000 daily active users**, each making **110 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~19,097/s","~318/s","~13.3/s","~63.7/s"],"answer":1,"explanation":"50,000 × 110 ÷ 86,400 ≈ 63.7/s average, × 5 ≈ 318/s."},{"prompt":"a todo app has **500,000 daily active users**, each making **125 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~1450/s","~723/s","~86,806/s","~60.3/s"],"answer":0,"explanation":"500,000 × 125 ÷ 86,400 ≈ 723/s average, × 2 ≈ 1450/s."}]
---
# Design Drill: Requests per second from daily users #47

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
