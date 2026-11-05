---
slug: "sd01-qps-19"
title: "Design Drill: Requests per second from daily users #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a recipe app has **200,000 daily active users**, each making **85 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~82/s","~1970/s","~197/s","~118,056/s"],"answer":1,"explanation":"200,000 × 85 ÷ 86,400 ≈ 197/s average, × 10 ≈ 1970/s."},{"prompt":"a news reader has **5 million daily active users**, each making **25 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~1450/s","~14,468/s","~603/s","~868,056/s"],"answer":1,"explanation":"5 million × 25 ÷ 86,400 ≈ 1450/s average, × 10 ≈ 14,468/s."},{"prompt":"a photo-sharing app has **2 million daily active users**, each making **125 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~347,222/s","~5790/s","~241/s","~2890/s"],"answer":1,"explanation":"2 million × 125 ÷ 86,400 ≈ 2890/s average, × 2 ≈ 5790/s."},{"prompt":"a news reader has **100,000 daily active users**, each making **125 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~30.1/s","~723/s","~145/s","~43,403/s"],"answer":1,"explanation":"100,000 × 125 ÷ 86,400 ≈ 145/s average, × 5 ≈ 723/s."},{"prompt":"a booking site has **5 million daily active users**, each making **10 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~72.3/s","~1740/s","~104,167/s","~579/s"],"answer":1,"explanation":"5 million × 10 ÷ 86,400 ≈ 579/s average, × 3 ≈ 1740/s."}]
---
# Design Drill: Requests per second from daily users #19

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
