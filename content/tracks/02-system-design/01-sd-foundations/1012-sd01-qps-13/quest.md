---
slug: "sd01-qps-13"
title: "Design Drill: Requests per second from daily users #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a ticketing system has **500,000 daily active users**, each making **105 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~127/s","~182,292/s","~608/s","~3040/s"],"answer":3,"explanation":"500,000 × 105 ÷ 86,400 ≈ 608/s average, × 5 ≈ 3040/s."},{"prompt":"a photo-sharing app has **500,000 daily active users**, each making **60 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~104,167/s","~72.3/s","~1740/s","~347/s"],"answer":2,"explanation":"500,000 × 60 ÷ 86,400 ≈ 347/s average, × 5 ≈ 1740/s."},{"prompt":"a recipe app has **20,000 daily active users**, each making **95 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~2640/s","~22/s","~44/s","~1.83/s"],"answer":2,"explanation":"20,000 × 95 ÷ 86,400 ≈ 22/s average, × 2 ≈ 44/s."},{"prompt":"a chat app has **200,000 daily active users**, each making **115 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~47,917/s","~266/s","~799/s","~33.3/s"],"answer":2,"explanation":"200,000 × 115 ÷ 86,400 ≈ 266/s average, × 3 ≈ 799/s."},{"prompt":"a news reader has **5 million daily active users**, each making **105 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~6080/s","~506/s","~729,167/s","~12,153/s"],"answer":3,"explanation":"5 million × 105 ÷ 86,400 ≈ 6080/s average, × 2 ≈ 12,153/s."}]
---
# Design Drill: Requests per second from daily users #13

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
