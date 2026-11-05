---
slug: "sd01-qps-49"
title: "Design Drill: Requests per second from daily users #49"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a photo-sharing app has **5 million daily active users**, each making **130 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~15,046/s","~902,778/s","~7520/s","~627/s"],"answer":0,"explanation":"5 million × 130 ÷ 86,400 ≈ 7520/s average, × 2 ≈ 15,046/s."},{"prompt":"a learning platform has **500,000 daily active users**, each making **145 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~839/s","~503,472/s","~8390/s","~350/s"],"answer":2,"explanation":"500,000 × 145 ÷ 86,400 ≈ 839/s average, × 10 ≈ 8390/s."},{"prompt":"a chat app has **50,000 daily active users**, each making **140 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~33.8/s","~810/s","~48,611/s","~81/s"],"answer":1,"explanation":"50,000 × 140 ÷ 86,400 ≈ 81/s average, × 10 ≈ 810/s."},{"prompt":"a chat app has **1 million daily active users**, each making **90 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~5210/s","~217/s","~312,500/s","~1040/s"],"answer":0,"explanation":"1 million × 90 ÷ 86,400 ≈ 1040/s average, × 5 ≈ 5210/s."},{"prompt":"a chat app has **200,000 daily active users**, each making **120 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~50,000/s","~34.7/s","~278/s","~833/s"],"answer":3,"explanation":"200,000 × 120 ÷ 86,400 ≈ 278/s average, × 3 ≈ 833/s."}]
---
# Design Drill: Requests per second from daily users #49

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
