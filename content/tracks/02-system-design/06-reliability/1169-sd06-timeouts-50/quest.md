---
slug: "sd06-timeouts-50"
title: "Design Drill: Timeout budgets #50"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **1600 ms** timeout, retries **3** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["8300 ms","4800 ms","6700 ms","1600 ms"],"answer":2,"explanation":"(3 + 1) × 1600 + 3 × 100 = 6700 ms."},{"prompt":"A service calls a dependency with a **1300 ms** timeout, retries **1** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["1300 ms","2600 ms","3900 ms"],"answer":1,"explanation":"(1 + 1) × 1300 + 1 × 0 = 2600 ms."},{"prompt":"A service calls a dependency with a **1500 ms** timeout, retries **3** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["1500 ms","7800 ms","6300 ms","4500 ms"],"answer":2,"explanation":"(3 + 1) × 1500 + 3 × 100 = 6300 ms."},{"prompt":"A service calls a dependency with a **600 ms** timeout, retries **1** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["1800 ms","600 ms","1200 ms"],"answer":2,"explanation":"(1 + 1) × 600 + 1 × 0 = 1200 ms."},{"prompt":"A service calls a dependency with a **1700 ms** timeout, retries **3** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["8500 ms","1700 ms","6800 ms","5100 ms"],"answer":2,"explanation":"(3 + 1) × 1700 + 3 × 0 = 6800 ms."}]
---
# Design Drill: Timeout budgets #50

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
