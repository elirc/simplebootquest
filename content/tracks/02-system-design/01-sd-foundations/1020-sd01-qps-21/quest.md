---
slug: "sd01-qps-21"
title: "Design Drill: Requests per second from daily users #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a chat app has **1 million daily active users**, each making **100 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~1160/s","~145/s","~3470/s","~208,333/s"],"answer":2,"explanation":"1 million × 100 ÷ 86,400 ≈ 1160/s average, × 3 ≈ 3470/s."},{"prompt":"a learning platform has **2 million daily active users**, each making **85 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~3940/s","~1970/s","~236,111/s","~164/s"],"answer":0,"explanation":"2 million × 85 ÷ 86,400 ≈ 1970/s average, × 2 ≈ 3940/s."},{"prompt":"a learning platform has **100,000 daily active users**, each making **10 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~6940/s","~116/s","~4.82/s","~11.6/s"],"answer":1,"explanation":"100,000 × 10 ÷ 86,400 ≈ 11.6/s average, × 10 ≈ 116/s."},{"prompt":"a recipe app has **200,000 daily active users**, each making **30 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~5.79/s","~139/s","~69.4/s","~8330/s"],"answer":1,"explanation":"200,000 × 30 ÷ 86,400 ≈ 69.4/s average, × 2 ≈ 139/s."},{"prompt":"a chat app has **2 million daily active users**, each making **45 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~625,000/s","~10,417/s","~434/s","~1040/s"],"answer":1,"explanation":"2 million × 45 ÷ 86,400 ≈ 1040/s average, × 10 ≈ 10,417/s."}]
---
# Design Drill: Requests per second from daily users #21

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
