---
slug: "sd01-qps-24"
title: "Design Drill: Requests per second from daily users #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a chat app has **50,000 daily active users**, each making **40 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~4170/s","~2.89/s","~69.4/s","~23.1/s"],"answer":2,"explanation":"50,000 × 40 ÷ 86,400 ≈ 23.1/s average, × 3 ≈ 69.4/s."},{"prompt":"a ticketing system has **20,000 daily active users**, each making **40 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~1.93/s","~2780/s","~46.3/s","~9.26/s"],"answer":2,"explanation":"20,000 × 40 ÷ 86,400 ≈ 9.26/s average, × 5 ≈ 46.3/s."},{"prompt":"an online shop has **50,000 daily active users**, each making **105 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~7290/s","~60.8/s","~122/s","~5.06/s"],"answer":2,"explanation":"50,000 × 105 ÷ 86,400 ≈ 60.8/s average, × 2 ≈ 122/s."},{"prompt":"a recipe app has **5 million daily active users**, each making **75 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~43,403/s","~1810/s","~4340/s","~2.6 million/s"],"answer":0,"explanation":"5 million × 75 ÷ 86,400 ≈ 4340/s average, × 10 ≈ 43,403/s."},{"prompt":"a todo app has **10,000 daily active users**, each making **85 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~49.2/s","~2.05/s","~9.84/s","~2950/s"],"answer":0,"explanation":"10,000 × 85 ÷ 86,400 ≈ 9.84/s average, × 5 ≈ 49.2/s."}]
---
# Design Drill: Requests per second from daily users #24

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
