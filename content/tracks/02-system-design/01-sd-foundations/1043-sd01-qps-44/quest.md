---
slug: "sd01-qps-44"
title: "Design Drill: Requests per second from daily users #44"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a recipe app has **20,000 daily active users**, each making **15 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~10.4/s","~3.47/s","~0.434/s","~625/s"],"answer":0,"explanation":"20,000 × 15 ÷ 86,400 ≈ 3.47/s average, × 3 ≈ 10.4/s."},{"prompt":"an online shop has **100,000 daily active users**, each making **135 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~19.5/s","~28,125/s","~469/s","~156/s"],"answer":2,"explanation":"100,000 × 135 ÷ 86,400 ≈ 156/s average, × 3 ≈ 469/s."},{"prompt":"an online shop has **200,000 daily active users**, each making **140 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~194,444/s","~324/s","~135/s","~3240/s"],"answer":3,"explanation":"200,000 × 140 ÷ 86,400 ≈ 324/s average, × 10 ≈ 3240/s."},{"prompt":"a booking site has **50,000 daily active users**, each making **100 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~116/s","~57.9/s","~4.82/s","~6940/s"],"answer":0,"explanation":"50,000 × 100 ÷ 86,400 ≈ 57.9/s average, × 2 ≈ 116/s."},{"prompt":"a fitness tracker has **500,000 daily active users**, each making **140 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~169/s","~810/s","~243,056/s","~4050/s"],"answer":3,"explanation":"500,000 × 140 ÷ 86,400 ≈ 810/s average, × 5 ≈ 4050/s."}]
---
# Design Drill: Requests per second from daily users #44

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
