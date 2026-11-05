---
slug: "sd01-qps-36"
title: "Design Drill: Requests per second from daily users #36"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a fitness tracker has **10,000 daily active users**, each making **140 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~16.2/s","~1940/s","~32.4/s","~1.35/s"],"answer":2,"explanation":"10,000 × 140 ÷ 86,400 ≈ 16.2/s average, × 2 ≈ 32.4/s."},{"prompt":"a chat app has **5 million daily active users**, each making **85 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~590,278/s","~9840/s","~4920/s","~410/s"],"answer":1,"explanation":"5 million × 85 ÷ 86,400 ≈ 4920/s average, × 2 ≈ 9840/s."},{"prompt":"a news reader has **200,000 daily active users**, each making **120 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~166,667/s","~116/s","~2780/s","~278/s"],"answer":2,"explanation":"200,000 × 120 ÷ 86,400 ≈ 278/s average, × 10 ≈ 2780/s."},{"prompt":"a learning platform has **1 million daily active users**, each making **135 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~1560/s","~468,750/s","~7810/s","~326/s"],"answer":2,"explanation":"1 million × 135 ÷ 86,400 ≈ 1560/s average, × 5 ≈ 7810/s."},{"prompt":"a todo app has **500,000 daily active users**, each making **95 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~329,861/s","~550/s","~5500/s","~229/s"],"answer":2,"explanation":"500,000 × 95 ÷ 86,400 ≈ 550/s average, × 10 ≈ 5500/s."}]
---
# Design Drill: Requests per second from daily users #36

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
