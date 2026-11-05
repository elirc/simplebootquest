---
slug: "sd06-timeouts-35"
title: "Design Drill: Timeout budgets #35"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **2900 ms** timeout, retries **3** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["8700 ms","14500 ms","2900 ms","11600 ms"],"answer":3,"explanation":"(3 + 1) × 2900 + 3 × 0 = 11600 ms."},{"prompt":"A service calls a dependency with a **1000 ms** timeout, retries **1** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["1000 ms","2000 ms","3000 ms"],"answer":1,"explanation":"(1 + 1) × 1000 + 1 × 0 = 2000 ms."},{"prompt":"A service calls a dependency with a **400 ms** timeout, retries **1** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["400 ms","1200 ms","800 ms"],"answer":2,"explanation":"(1 + 1) × 400 + 1 × 0 = 800 ms."},{"prompt":"A service calls a dependency with a **700 ms** timeout, retries **2** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["2100 ms","1400 ms","700 ms","2800 ms"],"answer":0,"explanation":"(2 + 1) × 700 + 2 × 0 = 2100 ms."},{"prompt":"A service calls a dependency with a **1500 ms** timeout, retries **1** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["1500 ms","4500 ms","3000 ms"],"answer":2,"explanation":"(1 + 1) × 1500 + 1 × 0 = 3000 ms."}]
---
# Design Drill: Timeout budgets #35

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
