---
slug: "sd01-qps-39"
title: "Design Drill: Requests per second from daily users #39"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a ticketing system has **5 million daily active users**, each making **110 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~6370/s","~796/s","~19,097/s","~1.15 million/s"],"answer":2,"explanation":"5 million × 110 ÷ 86,400 ≈ 6370/s average, × 3 ≈ 19,097/s."},{"prompt":"an online shop has **500,000 daily active users**, each making **40 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~231/s","~27,778/s","~19.3/s","~463/s"],"answer":3,"explanation":"500,000 × 40 ÷ 86,400 ≈ 231/s average, × 2 ≈ 463/s."},{"prompt":"a recipe app has **200,000 daily active users**, each making **100 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~28.9/s","~41,667/s","~694/s","~231/s"],"answer":2,"explanation":"200,000 × 100 ÷ 86,400 ≈ 231/s average, × 3 ≈ 694/s."},{"prompt":"a todo app has **1 million daily active users**, each making **50 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~72.3/s","~579/s","~104,167/s","~1740/s"],"answer":3,"explanation":"1 million × 50 ÷ 86,400 ≈ 579/s average, × 3 ≈ 1740/s."},{"prompt":"a chat app has **50,000 daily active users**, each making **110 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~318/s","~63.7/s","~13.3/s","~19,097/s"],"answer":0,"explanation":"50,000 × 110 ÷ 86,400 ≈ 63.7/s average, × 5 ≈ 318/s."}]
---
# Design Drill: Requests per second from daily users #39

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
