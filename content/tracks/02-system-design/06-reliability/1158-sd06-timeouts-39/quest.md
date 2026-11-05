---
slug: "sd06-timeouts-39"
title: "Design Drill: Timeout budgets #39"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **100 ms** timeout, retries **2** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["200 ms","100 ms","500 ms","600 ms"],"answer":2,"explanation":"(2 + 1) × 100 + 2 × 100 = 500 ms."},{"prompt":"A service calls a dependency with a **1100 ms** timeout, retries **2** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["1100 ms","4400 ms","2200 ms","3300 ms"],"answer":3,"explanation":"(2 + 1) × 1100 + 2 × 0 = 3300 ms."},{"prompt":"A service calls a dependency with a **800 ms** timeout, retries **3** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["2400 ms","3500 ms","800 ms","4300 ms"],"answer":1,"explanation":"(3 + 1) × 800 + 3 × 100 = 3500 ms."},{"prompt":"A service calls a dependency with a **200 ms** timeout, retries **1** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["600 ms","200 ms","400 ms"],"answer":2,"explanation":"(1 + 1) × 200 + 1 × 0 = 400 ms."},{"prompt":"A service calls a dependency with a **1100 ms** timeout, retries **2** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["1100 ms","3500 ms","4600 ms","2200 ms"],"answer":1,"explanation":"(2 + 1) × 1100 + 2 × 100 = 3500 ms."}]
---
# Design Drill: Timeout budgets #39

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
