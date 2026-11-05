---
slug: "sd01-qps-18"
title: "Design Drill: Requests per second from daily users #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a fitness tracker has **500,000 daily active users**, each making **60 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~41,667/s","~347/s","~28.9/s","~694/s"],"answer":3,"explanation":"500,000 × 60 ÷ 86,400 ≈ 347/s average, × 2 ≈ 694/s."},{"prompt":"a fitness tracker has **1 million daily active users**, each making **150 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~3470/s","~1740/s","~208,333/s","~145/s"],"answer":0,"explanation":"1 million × 150 ÷ 86,400 ≈ 1740/s average, × 2 ≈ 3470/s."},{"prompt":"a photo-sharing app has **1 million daily active users**, each making **65 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~157/s","~3760/s","~752/s","~225,694/s"],"answer":1,"explanation":"1 million × 65 ÷ 86,400 ≈ 752/s average, × 5 ≈ 3760/s."},{"prompt":"a chat app has **5 million daily active users**, each making **15 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~109/s","~156,250/s","~868/s","~2600/s"],"answer":3,"explanation":"5 million × 15 ÷ 86,400 ≈ 868/s average, × 3 ≈ 2600/s."},{"prompt":"a recipe app has **2 million daily active users**, each making **110 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~2550/s","~1.53 million/s","~1060/s","~25,463/s"],"answer":3,"explanation":"2 million × 110 ÷ 86,400 ≈ 2550/s average, × 10 ≈ 25,463/s."}]
---
# Design Drill: Requests per second from daily users #18

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
