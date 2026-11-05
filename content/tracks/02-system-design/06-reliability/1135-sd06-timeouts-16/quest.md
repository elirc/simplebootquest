---
slug: "sd06-timeouts-16"
title: "Design Drill: Timeout budgets #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **500 ms** timeout, retries **1** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["1700 ms","1000 ms","500 ms","1200 ms"],"answer":3,"explanation":"(1 + 1) × 500 + 1 × 200 = 1200 ms."},{"prompt":"A service calls a dependency with a **2900 ms** timeout, retries **1** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["2900 ms","5800 ms","8700 ms"],"answer":1,"explanation":"(1 + 1) × 2900 + 1 × 0 = 5800 ms."},{"prompt":"A service calls a dependency with a **2100 ms** timeout, retries **2** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["6500 ms","2100 ms","4200 ms","8600 ms"],"answer":0,"explanation":"(2 + 1) × 2100 + 2 × 100 = 6500 ms."},{"prompt":"A service calls a dependency with a **2100 ms** timeout, retries **1** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["2100 ms","6400 ms","4200 ms","4300 ms"],"answer":3,"explanation":"(1 + 1) × 2100 + 1 × 100 = 4300 ms."},{"prompt":"A service calls a dependency with a **1100 ms** timeout, retries **1** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["3500 ms","2200 ms","2400 ms","1100 ms"],"answer":2,"explanation":"(1 + 1) × 1100 + 1 × 200 = 2400 ms."}]
---
# Design Drill: Timeout budgets #16

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
