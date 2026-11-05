---
slug: "sd01-qps-33"
title: "Design Drill: Requests per second from daily users #33"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a todo app has **5 million daily active users**, each making **45 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~13,021/s","~543/s","~2600/s","~781,250/s"],"answer":0,"explanation":"5 million × 45 ÷ 86,400 ≈ 2600/s average, × 5 ≈ 13,021/s."},{"prompt":"a recipe app has **5 million daily active users**, each making **145 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~8390/s","~25,174/s","~1.51 million/s","~1050/s"],"answer":1,"explanation":"5 million × 145 ÷ 86,400 ≈ 8390/s average, × 3 ≈ 25,174/s."},{"prompt":"a recipe app has **2 million daily active users**, each making **85 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~1970/s","~410/s","~9840/s","~590,278/s"],"answer":2,"explanation":"2 million × 85 ÷ 86,400 ≈ 1970/s average, × 5 ≈ 9840/s."},{"prompt":"a news reader has **100,000 daily active users**, each making **100 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~48.2/s","~116/s","~1160/s","~69,444/s"],"answer":2,"explanation":"100,000 × 100 ÷ 86,400 ≈ 116/s average, × 10 ≈ 1160/s."},{"prompt":"a booking site has **500,000 daily active users**, each making **45 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~109/s","~260/s","~156,250/s","~2600/s"],"answer":3,"explanation":"500,000 × 45 ÷ 86,400 ≈ 260/s average, × 10 ≈ 2600/s."}]
---
# Design Drill: Requests per second from daily users #33

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
