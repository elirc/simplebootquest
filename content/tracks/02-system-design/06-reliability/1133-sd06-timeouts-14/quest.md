---
slug: "sd06-timeouts-14"
title: "Design Drill: Timeout budgets #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **1800 ms** timeout, retries **2** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["1800 ms","7400 ms","3600 ms","5600 ms"],"answer":3,"explanation":"(2 + 1) × 1800 + 2 × 100 = 5600 ms."},{"prompt":"A service calls a dependency with a **100 ms** timeout, retries **1** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["500 ms","100 ms","400 ms","200 ms"],"answer":2,"explanation":"(1 + 1) × 100 + 1 × 200 = 400 ms."},{"prompt":"A service calls a dependency with a **1600 ms** timeout, retries **1** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["4800 ms","3200 ms","1600 ms"],"answer":1,"explanation":"(1 + 1) × 1600 + 1 × 0 = 3200 ms."},{"prompt":"A service calls a dependency with a **1300 ms** timeout, retries **2** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["4300 ms","1300 ms","5600 ms","2600 ms"],"answer":0,"explanation":"(2 + 1) × 1300 + 2 × 200 = 4300 ms."},{"prompt":"A service calls a dependency with a **1800 ms** timeout, retries **1** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["1800 ms","5600 ms","3800 ms","3600 ms"],"answer":2,"explanation":"(1 + 1) × 1800 + 1 × 200 = 3800 ms."}]
---
# Design Drill: Timeout budgets #14

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
