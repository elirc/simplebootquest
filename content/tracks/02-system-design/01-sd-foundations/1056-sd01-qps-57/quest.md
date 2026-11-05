---
slug: "sd01-qps-57"
title: "Design Drill: Requests per second from daily users #57"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a booking site has **2 million daily active users**, each making **105 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~291,667/s","~2430/s","~4860/s","~203/s"],"answer":2,"explanation":"2 million × 105 ÷ 86,400 ≈ 2430/s average, × 2 ≈ 4860/s."},{"prompt":"an online shop has **1 million daily active users**, each making **130 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~1500/s","~270,833/s","~188/s","~4510/s"],"answer":3,"explanation":"1 million × 130 ÷ 86,400 ≈ 1500/s average, × 3 ≈ 4510/s."},{"prompt":"a news reader has **1 million daily active users**, each making **30 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~208,333/s","~3470/s","~145/s","~347/s"],"answer":1,"explanation":"1 million × 30 ÷ 86,400 ≈ 347/s average, × 10 ≈ 3470/s."},{"prompt":"a chat app has **100,000 daily active users**, each making **120 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~139/s","~694/s","~41,667/s","~28.9/s"],"answer":1,"explanation":"100,000 × 120 ÷ 86,400 ≈ 139/s average, × 5 ≈ 694/s."},{"prompt":"an online shop has **200,000 daily active users**, each making **130 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~36,111/s","~602/s","~25.1/s","~301/s"],"answer":1,"explanation":"200,000 × 130 ÷ 86,400 ≈ 301/s average, × 2 ≈ 602/s."}]
---
# Design Drill: Requests per second from daily users #57

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
