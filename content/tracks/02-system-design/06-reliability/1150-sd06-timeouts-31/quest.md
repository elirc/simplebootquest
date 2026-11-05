---
slug: "sd06-timeouts-31"
title: "Design Drill: Timeout budgets #31"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **1200 ms** timeout, retries **2** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["1200 ms","5000 ms","2400 ms","3800 ms"],"answer":3,"explanation":"(2 + 1) × 1200 + 2 × 100 = 3800 ms."},{"prompt":"A service calls a dependency with a **400 ms** timeout, retries **1** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["900 ms","800 ms","1300 ms","400 ms"],"answer":0,"explanation":"(1 + 1) × 400 + 1 × 100 = 900 ms."},{"prompt":"A service calls a dependency with a **1300 ms** timeout, retries **3** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["3900 ms","1300 ms","5500 ms","6800 ms"],"answer":2,"explanation":"(3 + 1) × 1300 + 3 × 100 = 5500 ms."},{"prompt":"A service calls a dependency with a **2600 ms** timeout, retries **1** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["5200 ms","7800 ms","2600 ms"],"answer":0,"explanation":"(1 + 1) × 2600 + 1 × 0 = 5200 ms."},{"prompt":"A service calls a dependency with a **1400 ms** timeout, retries **1** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["1400 ms","4200 ms","2800 ms"],"answer":2,"explanation":"(1 + 1) × 1400 + 1 × 0 = 2800 ms."}]
---
# Design Drill: Timeout budgets #31

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
