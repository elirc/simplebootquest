---
slug: "sd06-timeouts-6"
title: "Design Drill: Timeout budgets #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **2700 ms** timeout, retries **3** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["2700 ms","10800 ms","13500 ms","8100 ms"],"answer":1,"explanation":"(3 + 1) × 2700 + 3 × 0 = 10800 ms."},{"prompt":"A service calls a dependency with a **100 ms** timeout, retries **3** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["300 ms","1000 ms","1100 ms","100 ms"],"answer":1,"explanation":"(3 + 1) × 100 + 3 × 200 = 1000 ms."},{"prompt":"A service calls a dependency with a **2500 ms** timeout, retries **3** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["7500 ms","12500 ms","10000 ms","2500 ms"],"answer":2,"explanation":"(3 + 1) × 2500 + 3 × 0 = 10000 ms."},{"prompt":"A service calls a dependency with a **2500 ms** timeout, retries **1** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["7500 ms","2500 ms","5000 ms"],"answer":2,"explanation":"(1 + 1) × 2500 + 1 × 0 = 5000 ms."},{"prompt":"A service calls a dependency with a **3000 ms** timeout, retries **1** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["6000 ms","9200 ms","3000 ms","6200 ms"],"answer":3,"explanation":"(1 + 1) × 3000 + 1 × 200 = 6200 ms."}]
---
# Design Drill: Timeout budgets #6

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
