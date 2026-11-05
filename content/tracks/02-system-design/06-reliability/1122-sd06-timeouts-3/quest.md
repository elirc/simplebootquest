---
slug: "sd06-timeouts-3"
title: "Design Drill: Timeout budgets #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **1700 ms** timeout, retries **2** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["7000 ms","5300 ms","3400 ms","1700 ms"],"answer":1,"explanation":"(2 + 1) × 1700 + 2 × 100 = 5300 ms."},{"prompt":"A service calls a dependency with a **1200 ms** timeout, retries **2** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["3600 ms","4800 ms","1200 ms","2400 ms"],"answer":0,"explanation":"(2 + 1) × 1200 + 2 × 0 = 3600 ms."},{"prompt":"A service calls a dependency with a **1700 ms** timeout, retries **2** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["7200 ms","3400 ms","1700 ms","5500 ms"],"answer":3,"explanation":"(2 + 1) × 1700 + 2 × 200 = 5500 ms."},{"prompt":"A service calls a dependency with a **300 ms** timeout, retries **2** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["900 ms","1200 ms","600 ms","300 ms"],"answer":0,"explanation":"(2 + 1) × 300 + 2 × 0 = 900 ms."},{"prompt":"A service calls a dependency with a **200 ms** timeout, retries **1** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["200 ms","400 ms","700 ms","500 ms"],"answer":3,"explanation":"(1 + 1) × 200 + 1 × 100 = 500 ms."}]
---
# Design Drill: Timeout budgets #3

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
