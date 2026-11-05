---
slug: "sd01-qps-34"
title: "Design Drill: Requests per second from daily users #34"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a fitness tracker has **200,000 daily active users**, each making **45 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~1040/s","~62,500/s","~43.4/s","~104/s"],"answer":0,"explanation":"200,000 × 45 ÷ 86,400 ≈ 104/s average, × 10 ≈ 1040/s."},{"prompt":"an online shop has **200,000 daily active users**, each making **115 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~1330/s","~79,861/s","~266/s","~55.5/s"],"answer":0,"explanation":"200,000 × 115 ÷ 86,400 ≈ 266/s average, × 5 ≈ 1330/s."},{"prompt":"a chat app has **100,000 daily active users**, each making **65 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~9030/s","~6.27/s","~75.2/s","~150/s"],"answer":3,"explanation":"100,000 × 65 ÷ 86,400 ≈ 75.2/s average, × 2 ≈ 150/s."},{"prompt":"a recipe app has **50,000 daily active users**, each making **125 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~43,403/s","~72.3/s","~30.1/s","~723/s"],"answer":3,"explanation":"50,000 × 125 ÷ 86,400 ≈ 72.3/s average, × 10 ≈ 723/s."},{"prompt":"an online shop has **5 million daily active users**, each making **150 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~1.04 million/s","~723/s","~8680/s","~17,361/s"],"answer":3,"explanation":"5 million × 150 ÷ 86,400 ≈ 8680/s average, × 2 ≈ 17,361/s."}]
---
# Design Drill: Requests per second from daily users #34

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
