---
slug: "sd01-qps-23"
title: "Design Drill: Requests per second from daily users #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a todo app has **500,000 daily active users**, each making **65 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~376/s","~67,708/s","~47/s","~1130/s"],"answer":3,"explanation":"500,000 × 65 ÷ 86,400 ≈ 376/s average, × 3 ≈ 1130/s."},{"prompt":"a learning platform has **50,000 daily active users**, each making **35 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~12,153/s","~203/s","~20.3/s","~8.44/s"],"answer":1,"explanation":"50,000 × 35 ÷ 86,400 ≈ 20.3/s average, × 10 ≈ 203/s."},{"prompt":"a todo app has **100,000 daily active users**, each making **110 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~76,389/s","~53/s","~127/s","~1270/s"],"answer":3,"explanation":"100,000 × 110 ÷ 86,400 ≈ 127/s average, × 10 ≈ 1270/s."},{"prompt":"a booking site has **2 million daily active users**, each making **70 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~1620/s","~972,222/s","~16,204/s","~675/s"],"answer":2,"explanation":"2 million × 70 ÷ 86,400 ≈ 1620/s average, × 10 ≈ 16,204/s."},{"prompt":"a chat app has **500,000 daily active users**, each making **105 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~127/s","~182,292/s","~3040/s","~608/s"],"answer":2,"explanation":"500,000 × 105 ÷ 86,400 ≈ 608/s average, × 5 ≈ 3040/s."}]
---
# Design Drill: Requests per second from daily users #23

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
