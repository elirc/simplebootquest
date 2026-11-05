---
slug: "sd01-qps-31"
title: "Design Drill: Requests per second from daily users #31"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a ticketing system has **20,000 daily active users**, each making **120 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~278/s","~27.8/s","~16,667/s","~11.6/s"],"answer":0,"explanation":"20,000 × 120 ÷ 86,400 ≈ 27.8/s average, × 10 ≈ 278/s."},{"prompt":"a photo-sharing app has **100,000 daily active users**, each making **60 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~694/s","~69.4/s","~41,667/s","~28.9/s"],"answer":0,"explanation":"100,000 × 60 ÷ 86,400 ≈ 69.4/s average, × 10 ≈ 694/s."},{"prompt":"a photo-sharing app has **50,000 daily active users**, each making **130 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~9.4/s","~75.2/s","~226/s","~13,542/s"],"answer":2,"explanation":"50,000 × 130 ÷ 86,400 ≈ 75.2/s average, × 3 ≈ 226/s."},{"prompt":"a fitness tracker has **200,000 daily active users**, each making **15 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~4170/s","~34.7/s","~2.89/s","~69.4/s"],"answer":3,"explanation":"200,000 × 15 ÷ 86,400 ≈ 34.7/s average, × 2 ≈ 69.4/s."},{"prompt":"a photo-sharing app has **200,000 daily active users**, each making **105 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~243/s","~72,917/s","~50.6/s","~1220/s"],"answer":3,"explanation":"200,000 × 105 ÷ 86,400 ≈ 243/s average, × 5 ≈ 1220/s."}]
---
# Design Drill: Requests per second from daily users #31

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
