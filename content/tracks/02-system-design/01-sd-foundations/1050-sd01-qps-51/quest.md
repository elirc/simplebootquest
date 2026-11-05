---
slug: "sd01-qps-51"
title: "Design Drill: Requests per second from daily users #51"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a chat app has **10,000 daily active users**, each making **20 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~1390/s","~0.965/s","~2.31/s","~23.1/s"],"answer":3,"explanation":"10,000 × 20 ÷ 86,400 ≈ 2.31/s average, × 10 ≈ 23.1/s."},{"prompt":"a recipe app has **100,000 daily active users**, each making **125 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~1450/s","~60.3/s","~86,806/s","~145/s"],"answer":0,"explanation":"100,000 × 125 ÷ 86,400 ≈ 145/s average, × 10 ≈ 1450/s."},{"prompt":"a ticketing system has **50,000 daily active users**, each making **70 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~16.9/s","~40.5/s","~405/s","~24,306/s"],"answer":2,"explanation":"50,000 × 70 ÷ 86,400 ≈ 40.5/s average, × 10 ≈ 405/s."},{"prompt":"a photo-sharing app has **200,000 daily active users**, each making **110 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~255/s","~509/s","~21.2/s","~30,556/s"],"answer":1,"explanation":"200,000 × 110 ÷ 86,400 ≈ 255/s average, × 2 ≈ 509/s."},{"prompt":"a learning platform has **2 million daily active users**, each making **75 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~362/s","~520,833/s","~8680/s","~1740/s"],"answer":2,"explanation":"2 million × 75 ÷ 86,400 ≈ 1740/s average, × 5 ≈ 8680/s."}]
---
# Design Drill: Requests per second from daily users #51

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
