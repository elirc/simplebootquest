---
slug: "sd01-qps-26"
title: "Design Drill: Requests per second from daily users #26"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"an online shop has **100,000 daily active users**, each making **150 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~347/s","~174/s","~20,833/s","~14.5/s"],"answer":0,"explanation":"100,000 × 150 ÷ 86,400 ≈ 174/s average, × 2 ≈ 347/s."},{"prompt":"a chat app has **200,000 daily active users**, each making **45 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~104/s","~208/s","~8.68/s","~12,500/s"],"answer":1,"explanation":"200,000 × 45 ÷ 86,400 ≈ 104/s average, × 2 ≈ 208/s."},{"prompt":"a fitness tracker has **5 million daily active users**, each making **85 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~410/s","~9840/s","~4920/s","~590,278/s"],"answer":1,"explanation":"5 million × 85 ÷ 86,400 ≈ 4920/s average, × 2 ≈ 9840/s."},{"prompt":"a recipe app has **20,000 daily active users**, each making **120 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~5000/s","~83.3/s","~3.47/s","~27.8/s"],"answer":1,"explanation":"20,000 × 120 ÷ 86,400 ≈ 27.8/s average, × 3 ≈ 83.3/s."},{"prompt":"a recipe app has **5 million daily active users**, each making **145 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~1.01 million/s","~8390/s","~699/s","~16,782/s"],"answer":3,"explanation":"5 million × 145 ÷ 86,400 ≈ 8390/s average, × 2 ≈ 16,782/s."}]
---
# Design Drill: Requests per second from daily users #26

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
