---
slug: "sd06-timeouts-12"
title: "Design Drill: Timeout budgets #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **500 ms** timeout, retries **1** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["1000 ms","1600 ms","500 ms","1100 ms"],"answer":3,"explanation":"(1 + 1) × 500 + 1 × 100 = 1100 ms."},{"prompt":"A service calls a dependency with a **2500 ms** timeout, retries **1** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["2500 ms","5000 ms","5100 ms","7600 ms"],"answer":2,"explanation":"(1 + 1) × 2500 + 1 × 100 = 5100 ms."},{"prompt":"A service calls a dependency with a **2200 ms** timeout, retries **2** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["8800 ms","2200 ms","6600 ms","4400 ms"],"answer":2,"explanation":"(2 + 1) × 2200 + 2 × 0 = 6600 ms."},{"prompt":"A service calls a dependency with a **500 ms** timeout, retries **2** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["2000 ms","1000 ms","500 ms","1500 ms"],"answer":3,"explanation":"(2 + 1) × 500 + 2 × 0 = 1500 ms."},{"prompt":"A service calls a dependency with a **1900 ms** timeout, retries **1** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["1900 ms","3800 ms","5700 ms"],"answer":1,"explanation":"(1 + 1) × 1900 + 1 × 0 = 3800 ms."}]
---
# Design Drill: Timeout budgets #12

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
