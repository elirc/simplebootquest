---
slug: "sd06-timeouts-18"
title: "Design Drill: Timeout budgets #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **900 ms** timeout, retries **1** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["2900 ms","1800 ms","2000 ms","900 ms"],"answer":2,"explanation":"(1 + 1) × 900 + 1 × 200 = 2000 ms."},{"prompt":"A service calls a dependency with a **600 ms** timeout, retries **1** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["1200 ms","600 ms","1400 ms","2000 ms"],"answer":2,"explanation":"(1 + 1) × 600 + 1 × 200 = 1400 ms."},{"prompt":"A service calls a dependency with a **1200 ms** timeout, retries **2** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["1200 ms","5200 ms","2400 ms","4000 ms"],"answer":3,"explanation":"(2 + 1) × 1200 + 2 × 200 = 4000 ms."},{"prompt":"A service calls a dependency with a **1900 ms** timeout, retries **3** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["7900 ms","5700 ms","1900 ms","9800 ms"],"answer":0,"explanation":"(3 + 1) × 1900 + 3 × 100 = 7900 ms."},{"prompt":"A service calls a dependency with a **1000 ms** timeout, retries **1** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["3100 ms","1000 ms","2000 ms","2100 ms"],"answer":3,"explanation":"(1 + 1) × 1000 + 1 × 100 = 2100 ms."}]
---
# Design Drill: Timeout budgets #18

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
