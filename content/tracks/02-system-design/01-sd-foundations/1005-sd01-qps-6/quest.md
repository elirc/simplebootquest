---
slug: "sd01-qps-6"
title: "Design Drill: Requests per second from daily users #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a photo-sharing app has **200,000 daily active users**, each making **125 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~1450/s","~86,806/s","~60.3/s","~289/s"],"answer":0,"explanation":"200,000 × 125 ÷ 86,400 ≈ 289/s average, × 5 ≈ 1450/s."},{"prompt":"a booking site has **2 million daily active users**, each making **40 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~77.2/s","~111,111/s","~1850/s","~926/s"],"answer":2,"explanation":"2 million × 40 ÷ 86,400 ≈ 926/s average, × 2 ≈ 1850/s."},{"prompt":"a booking site has **1 million daily active users**, each making **70 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~810/s","~338/s","~8100/s","~486,111/s"],"answer":2,"explanation":"1 million × 70 ÷ 86,400 ≈ 810/s average, × 10 ≈ 8100/s."},{"prompt":"a news reader has **5 million daily active users**, each making **40 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~277,778/s","~193/s","~2310/s","~4630/s"],"answer":3,"explanation":"5 million × 40 ÷ 86,400 ≈ 2310/s average, × 2 ≈ 4630/s."},{"prompt":"a learning platform has **2 million daily active users**, each making **35 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~101/s","~810/s","~145,833/s","~2430/s"],"answer":3,"explanation":"2 million × 35 ÷ 86,400 ≈ 810/s average, × 3 ≈ 2430/s."}]
---
# Design Drill: Requests per second from daily users #6

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
