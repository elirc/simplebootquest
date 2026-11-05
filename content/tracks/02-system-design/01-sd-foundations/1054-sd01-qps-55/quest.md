---
slug: "sd01-qps-55"
title: "Design Drill: Requests per second from daily users #55"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a photo-sharing app has **20,000 daily active users**, each making **45 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~10.4/s","~2.17/s","~52.1/s","~3120/s"],"answer":2,"explanation":"20,000 × 45 ÷ 86,400 ≈ 10.4/s average, × 5 ≈ 52.1/s."},{"prompt":"a news reader has **20,000 daily active users**, each making **130 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~3.76/s","~90.3/s","~30.1/s","~5420/s"],"answer":1,"explanation":"20,000 × 130 ÷ 86,400 ≈ 30.1/s average, × 3 ≈ 90.3/s."},{"prompt":"a ticketing system has **50,000 daily active users**, each making **25 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~14.5/s","~43.4/s","~2600/s","~1.81/s"],"answer":1,"explanation":"50,000 × 25 ÷ 86,400 ≈ 14.5/s average, × 3 ≈ 43.4/s."},{"prompt":"a news reader has **10,000 daily active users**, each making **80 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~3.86/s","~9.26/s","~92.6/s","~5560/s"],"answer":2,"explanation":"10,000 × 80 ÷ 86,400 ≈ 9.26/s average, × 10 ≈ 92.6/s."},{"prompt":"a ticketing system has **200,000 daily active users**, each making **75 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~174/s","~1740/s","~72.3/s","~104,167/s"],"answer":1,"explanation":"200,000 × 75 ÷ 86,400 ≈ 174/s average, × 10 ≈ 1740/s."}]
---
# Design Drill: Requests per second from daily users #55

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
