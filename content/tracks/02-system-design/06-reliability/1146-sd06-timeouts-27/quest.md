---
slug: "sd06-timeouts-27"
title: "Design Drill: Timeout budgets #27"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **200 ms** timeout, retries **1** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["800 ms","400 ms","600 ms","200 ms"],"answer":2,"explanation":"(1 + 1) × 200 + 1 × 200 = 600 ms."},{"prompt":"A service calls a dependency with a **800 ms** timeout, retries **1** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["2500 ms","1600 ms","800 ms","1700 ms"],"answer":3,"explanation":"(1 + 1) × 800 + 1 × 100 = 1700 ms."},{"prompt":"A service calls a dependency with a **1600 ms** timeout, retries **3** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["4800 ms","1600 ms","7000 ms","8600 ms"],"answer":2,"explanation":"(3 + 1) × 1600 + 3 × 200 = 7000 ms."},{"prompt":"A service calls a dependency with a **2400 ms** timeout, retries **2** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["2400 ms","4800 ms","7400 ms","9800 ms"],"answer":2,"explanation":"(2 + 1) × 2400 + 2 × 100 = 7400 ms."},{"prompt":"A service calls a dependency with a **100 ms** timeout, retries **1** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["200 ms","400 ms","100 ms","300 ms"],"answer":3,"explanation":"(1 + 1) × 100 + 1 × 100 = 300 ms."}]
---
# Design Drill: Timeout budgets #27

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
