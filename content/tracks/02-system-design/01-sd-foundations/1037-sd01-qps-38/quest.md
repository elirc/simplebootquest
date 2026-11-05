---
slug: "sd01-qps-38"
title: "Design Drill: Requests per second from daily users #38"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a recipe app has **5 million daily active users**, each making **105 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~760/s","~6080/s","~1.09 million/s","~18,229/s"],"answer":3,"explanation":"5 million × 105 ÷ 86,400 ≈ 6080/s average, × 3 ≈ 18,229/s."},{"prompt":"a ticketing system has **100,000 daily active users**, each making **95 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~220/s","~13,194/s","~9.16/s","~110/s"],"answer":0,"explanation":"100,000 × 95 ÷ 86,400 ≈ 110/s average, × 2 ≈ 220/s."},{"prompt":"a recipe app has **100,000 daily active users**, each making **60 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~694/s","~41,667/s","~69.4/s","~28.9/s"],"answer":0,"explanation":"100,000 × 60 ÷ 86,400 ≈ 69.4/s average, × 10 ≈ 694/s."},{"prompt":"a recipe app has **500,000 daily active users**, each making **120 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~1390/s","~83,333/s","~694/s","~57.9/s"],"answer":0,"explanation":"500,000 × 120 ÷ 86,400 ≈ 694/s average, × 2 ≈ 1390/s."},{"prompt":"a todo app has **100,000 daily active users**, each making **120 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~417/s","~139/s","~25,000/s","~17.4/s"],"answer":0,"explanation":"100,000 × 120 ÷ 86,400 ≈ 139/s average, × 3 ≈ 417/s."}]
---
# Design Drill: Requests per second from daily users #38

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
