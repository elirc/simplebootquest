---
slug: "sd01-qps-20"
title: "Design Drill: Requests per second from daily users #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a photo-sharing app has **500,000 daily active users**, each making **100 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~69,444/s","~579/s","~1160/s","~48.2/s"],"answer":2,"explanation":"500,000 × 100 ÷ 86,400 ≈ 579/s average, × 2 ≈ 1160/s."},{"prompt":"a learning platform has **5 million daily active users**, each making **20 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~1160/s","~11,574/s","~482/s","~694,444/s"],"answer":1,"explanation":"5 million × 20 ÷ 86,400 ≈ 1160/s average, × 10 ≈ 11,574/s."},{"prompt":"a fitness tracker has **50,000 daily active users**, each making **110 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~38,194/s","~637/s","~63.7/s","~26.5/s"],"answer":1,"explanation":"50,000 × 110 ÷ 86,400 ≈ 63.7/s average, × 10 ≈ 637/s."},{"prompt":"a fitness tracker has **20,000 daily active users**, each making **85 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~3540/s","~2.46/s","~59/s","~19.7/s"],"answer":2,"explanation":"20,000 × 85 ÷ 86,400 ≈ 19.7/s average, × 3 ≈ 59/s."},{"prompt":"a photo-sharing app has **1 million daily active users**, each making **10 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~13,889/s","~231/s","~9.65/s","~116/s"],"answer":1,"explanation":"1 million × 10 ÷ 86,400 ≈ 116/s average, × 2 ≈ 231/s."}]
---
# Design Drill: Requests per second from daily users #20

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
