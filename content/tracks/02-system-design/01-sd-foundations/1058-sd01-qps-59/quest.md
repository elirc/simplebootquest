---
slug: "sd01-qps-59"
title: "Design Drill: Requests per second from daily users #59"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a todo app has **500,000 daily active users**, each making **120 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~57.9/s","~83,333/s","~694/s","~1390/s"],"answer":3,"explanation":"500,000 × 120 ÷ 86,400 ≈ 694/s average, × 2 ≈ 1390/s."},{"prompt":"a ticketing system has **5 million daily active users**, each making **125 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~7230/s","~3010/s","~72,338/s","~4.34 million/s"],"answer":2,"explanation":"5 million × 125 ÷ 86,400 ≈ 7230/s average, × 10 ≈ 72,338/s."},{"prompt":"a photo-sharing app has **5 million daily active users**, each making **130 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~7520/s","~940/s","~1.35 million/s","~22,569/s"],"answer":3,"explanation":"5 million × 130 ÷ 86,400 ≈ 7520/s average, × 3 ≈ 22,569/s."},{"prompt":"a todo app has **10,000 daily active users**, each making **105 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~3650/s","~60.8/s","~2.53/s","~12.2/s"],"answer":1,"explanation":"10,000 × 105 ÷ 86,400 ≈ 12.2/s average, × 5 ≈ 60.8/s."},{"prompt":"a booking site has **5 million daily active users**, each making **25 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~1450/s","~14,468/s","~868,056/s","~603/s"],"answer":1,"explanation":"5 million × 25 ÷ 86,400 ≈ 1450/s average, × 10 ≈ 14,468/s."}]
---
# Design Drill: Requests per second from daily users #59

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
