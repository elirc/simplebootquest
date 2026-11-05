---
slug: "sd06-timeouts-4"
title: "Design Drill: Timeout budgets #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **2800 ms** timeout, retries **1** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["2800 ms","5600 ms","8400 ms"],"answer":1,"explanation":"(1 + 1) × 2800 + 1 × 0 = 5600 ms."},{"prompt":"A service calls a dependency with a **2700 ms** timeout, retries **2** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["8100 ms","2700 ms","5400 ms","10800 ms"],"answer":0,"explanation":"(2 + 1) × 2700 + 2 × 0 = 8100 ms."},{"prompt":"A service calls a dependency with a **300 ms** timeout, retries **1** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["1000 ms","300 ms","700 ms","600 ms"],"answer":2,"explanation":"(1 + 1) × 300 + 1 × 100 = 700 ms."},{"prompt":"A service calls a dependency with a **2800 ms** timeout, retries **2** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["11200 ms","2800 ms","8400 ms","5600 ms"],"answer":2,"explanation":"(2 + 1) × 2800 + 2 × 0 = 8400 ms."},{"prompt":"A service calls a dependency with a **2900 ms** timeout, retries **3** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["2900 ms","8700 ms","14800 ms","11900 ms"],"answer":3,"explanation":"(3 + 1) × 2900 + 3 × 100 = 11900 ms."}]
---
# Design Drill: Timeout budgets #4

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
