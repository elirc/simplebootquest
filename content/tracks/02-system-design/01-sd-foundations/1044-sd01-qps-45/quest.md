---
slug: "sd01-qps-45"
title: "Design Drill: Requests per second from daily users #45"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"a chat app has **5 million daily active users**, each making **105 requests** a day. Peak traffic is **5×** the average. Roughly how many requests per second at peak?","options":["~30,382/s","~1270/s","~6080/s","~1.82 million/s"],"answer":0,"explanation":"5 million × 105 ÷ 86,400 ≈ 6080/s average, × 5 ≈ 30,382/s."},{"prompt":"a recipe app has **20,000 daily active users**, each making **125 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~2.41/s","~57.9/s","~3470/s","~28.9/s"],"answer":1,"explanation":"20,000 × 125 ÷ 86,400 ≈ 28.9/s average, × 2 ≈ 57.9/s."},{"prompt":"a photo-sharing app has **2 million daily active users**, each making **20 requests** a day. Peak traffic is **3×** the average. Roughly how many requests per second at peak?","options":["~463/s","~83,333/s","~57.9/s","~1390/s"],"answer":3,"explanation":"2 million × 20 ÷ 86,400 ≈ 463/s average, × 3 ≈ 1390/s."},{"prompt":"a todo app has **200,000 daily active users**, each making **130 requests** a day. Peak traffic is **2×** the average. Roughly how many requests per second at peak?","options":["~301/s","~602/s","~25.1/s","~36,111/s"],"answer":1,"explanation":"200,000 × 130 ÷ 86,400 ≈ 301/s average, × 2 ≈ 602/s."},{"prompt":"a todo app has **1 million daily active users**, each making **55 requests** a day. Peak traffic is **10×** the average. Roughly how many requests per second at peak?","options":["~381,944/s","~637/s","~265/s","~6370/s"],"answer":3,"explanation":"1 million × 55 ÷ 86,400 ≈ 637/s average, × 10 ≈ 6370/s."}]
---
# Design Drill: Requests per second from daily users #45

Requests/second ≈ daily users × requests per user ÷ 86,400 (round 86,400 to 10⁵ for mental maths). Peak traffic is typically 2–10× the average.
