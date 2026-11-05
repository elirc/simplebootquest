---
slug: "sd01-qps-7"
title: "Design Drill: Requests per second from daily users #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a booking site has **10,000 daily active users**, each making **65 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~3.13/s","~7.52/s","~75.2/s","~4510/s"],"answer":2,"explanation":"10,000 × 65 ÷ 86,400 ≈ 7.52/s average, × 10 ≈ 75.2/s."},{"prompt":"a fitness tracker has **20,000 daily active users**, each making **90 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~1.74/s","~41.7/s","~20.8/s","~2500/s"],"answer":1,"explanation":"20,000 × 90 ÷ 86,400 ≈ 20.8/s average, × 2 ≈ 41.7/s."},{"prompt":"a ticketing system has **1 million daily active users**, each making **80 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~193/s","~926/s","~277,778/s","~4630/s"],"answer":3,"explanation":"1 million × 80 ÷ 86,400 ≈ 926/s average, × 5 ≈ 4630/s."},{"prompt":"a booking site has **50,000 daily active users**, each making **80 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~139/s","~5.79/s","~46.3/s","~8330/s"],"answer":0,"explanation":"50,000 × 80 ÷ 86,400 ≈ 46.3/s average, × 3 ≈ 139/s."},{"prompt":"a ticketing system has **2 million daily active users**, each making **35 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~8100/s","~810/s","~486,111/s","~338/s"],"answer":0,"explanation":"2 million × 35 ÷ 86,400 ≈ 810/s average, × 10 ≈ 8100/s."}]
---
# Design Drill: Requests per second from daily users #7

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
