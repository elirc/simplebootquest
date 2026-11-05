---
slug: "sd01-qps-10"
title: "Design Drill: Requests per second from daily users #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a chat app has **5 million daily active users**, each making **70 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~1.22 million/s","~20,255/s","~844/s","~4050/s"],"answer":1,"explanation":"5 million × 70 ÷ 86,400 ≈ 4050/s average, × 5 ≈ 20,255/s."},{"prompt":"a todo app has **5 million daily active users**, each making **55 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~1330/s","~1.91 million/s","~3180/s","~31,829/s"],"answer":3,"explanation":"5 million × 55 ÷ 86,400 ≈ 3180/s average, × 10 ≈ 31,829/s."},{"prompt":"an online shop has **2 million daily active users**, each making **80 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~1850/s","~3700/s","~222,222/s","~154/s"],"answer":1,"explanation":"2 million × 80 ÷ 86,400 ≈ 1850/s average, × 2 ≈ 3700/s."},{"prompt":"an online shop has **2 million daily active users**, each making **135 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~1.88 million/s","~31,250/s","~1300/s","~3130/s"],"answer":1,"explanation":"2 million × 135 ÷ 86,400 ≈ 3130/s average, × 10 ≈ 31,250/s."},{"prompt":"a fitness tracker has **500,000 daily active users**, each making **110 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~637/s","~1270/s","~53/s","~76,389/s"],"answer":1,"explanation":"500,000 × 110 ÷ 86,400 ≈ 637/s average, × 2 ≈ 1270/s."}]
---
# Design Drill: Requests per second from daily users #10

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
