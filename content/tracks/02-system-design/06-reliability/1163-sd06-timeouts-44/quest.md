---
slug: "sd06-timeouts-44"
title: "Design Drill: Timeout budgets #44"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **400 ms** timeout, retries **3** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["2000 ms","400 ms","1600 ms","1200 ms"],"answer":2,"explanation":"(3 + 1) × 400 + 3 × 0 = 1600 ms."},{"prompt":"A service calls a dependency with a **2300 ms** timeout, retries **1** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["2300 ms","4600 ms","7100 ms","4800 ms"],"answer":3,"explanation":"(1 + 1) × 2300 + 1 × 200 = 4800 ms."},{"prompt":"A service calls a dependency with a **200 ms** timeout, retries **3** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["800 ms","600 ms","200 ms","1000 ms"],"answer":0,"explanation":"(3 + 1) × 200 + 3 × 0 = 800 ms."},{"prompt":"A service calls a dependency with a **1100 ms** timeout, retries **1** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["2200 ms","2300 ms","1100 ms","3400 ms"],"answer":1,"explanation":"(1 + 1) × 1100 + 1 × 100 = 2300 ms."},{"prompt":"A service calls a dependency with a **1700 ms** timeout, retries **1** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["3400 ms","1700 ms","5300 ms","3600 ms"],"answer":3,"explanation":"(1 + 1) × 1700 + 1 × 200 = 3600 ms."}]
---
# Design Drill: Timeout budgets #44

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
