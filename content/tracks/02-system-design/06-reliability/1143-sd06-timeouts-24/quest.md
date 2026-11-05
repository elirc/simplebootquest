---
slug: "sd06-timeouts-24"
title: "Design Drill: Timeout budgets #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **1900 ms** timeout, retries **3** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["10100 ms","8200 ms","1900 ms","5700 ms"],"answer":1,"explanation":"(3 + 1) × 1900 + 3 × 200 = 8200 ms."},{"prompt":"A service calls a dependency with a **2300 ms** timeout, retries **1** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["2300 ms","7000 ms","4700 ms","4600 ms"],"answer":2,"explanation":"(1 + 1) × 2300 + 1 × 100 = 4700 ms."},{"prompt":"A service calls a dependency with a **1200 ms** timeout, retries **3** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["3600 ms","6600 ms","1200 ms","5400 ms"],"answer":3,"explanation":"(3 + 1) × 1200 + 3 × 200 = 5400 ms."},{"prompt":"A service calls a dependency with a **1700 ms** timeout, retries **1** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["1700 ms","3400 ms","3500 ms","5200 ms"],"answer":2,"explanation":"(1 + 1) × 1700 + 1 × 100 = 3500 ms."},{"prompt":"A service calls a dependency with a **2700 ms** timeout, retries **2** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["11200 ms","5400 ms","2700 ms","8500 ms"],"answer":3,"explanation":"(2 + 1) × 2700 + 2 × 200 = 8500 ms."}]
---
# Design Drill: Timeout budgets #24

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
