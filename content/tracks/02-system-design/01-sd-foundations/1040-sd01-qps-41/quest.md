---
slug: "sd01-qps-41"
title: "Design Drill: Requests per second from daily users #41"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a chat app has **2 million daily active users**, each making **10 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~69,444/s","~1160/s","~231/s","~48.2/s"],"answer":1,"explanation":"2 million × 10 ÷ 86,400 ≈ 231/s average, × 5 ≈ 1160/s."},{"prompt":"a photo-sharing app has **500,000 daily active users**, each making **10 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~579/s","~24.1/s","~34,722/s","~57.9/s"],"answer":0,"explanation":"500,000 × 10 ÷ 86,400 ≈ 57.9/s average, × 10 ≈ 579/s."},{"prompt":"a chat app has **2 million daily active users**, each making **55 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~265/s","~6370/s","~1270/s","~381,944/s"],"answer":1,"explanation":"2 million × 55 ÷ 86,400 ≈ 1270/s average, × 5 ≈ 6370/s."},{"prompt":"a fitness tracker has **2 million daily active users**, each making **135 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~937,500/s","~651/s","~15,625/s","~3130/s"],"answer":2,"explanation":"2 million × 135 ÷ 86,400 ≈ 3130/s average, × 5 ≈ 15,625/s."},{"prompt":"a recipe app has **100,000 daily active users**, each making **25 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~2.41/s","~28.9/s","~3470/s","~57.9/s"],"answer":3,"explanation":"100,000 × 25 ÷ 86,400 ≈ 28.9/s average, × 2 ≈ 57.9/s."}]
---
# Design Drill: Requests per second from daily users #41

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
