---
slug: "sd01-qps-14"
title: "Design Drill: Requests per second from daily users #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a chat app has **1 million daily active users**, each making **95 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~2200/s","~1100/s","~91.6/s","~131,944/s"],"answer":0,"explanation":"1 million × 95 ÷ 86,400 ≈ 1100/s average, × 2 ≈ 2200/s."},{"prompt":"a photo-sharing app has **5 million daily active users**, each making **85 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~14,757/s","~615/s","~885,417/s","~4920/s"],"answer":0,"explanation":"5 million × 85 ÷ 86,400 ≈ 4920/s average, × 3 ≈ 14,757/s."},{"prompt":"a ticketing system has **1 million daily active users**, each making **145 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~140/s","~3360/s","~1680/s","~201,389/s"],"answer":1,"explanation":"1 million × 145 ÷ 86,400 ≈ 1680/s average, × 2 ≈ 3360/s."},{"prompt":"a fitness tracker has **50,000 daily active users**, each making **90 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~52.1/s","~10.9/s","~260/s","~15,625/s"],"answer":2,"explanation":"50,000 × 90 ÷ 86,400 ≈ 52.1/s average, × 5 ≈ 260/s."},{"prompt":"a booking site has **500,000 daily active users**, each making **40 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~19.3/s","~463/s","~231/s","~27,778/s"],"answer":1,"explanation":"500,000 × 40 ÷ 86,400 ≈ 231/s average, × 2 ≈ 463/s."}]
---
# Design Drill: Requests per second from daily users #14

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
