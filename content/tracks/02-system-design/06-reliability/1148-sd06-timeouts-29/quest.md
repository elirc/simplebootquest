---
slug: "sd06-timeouts-29"
title: "Design Drill: Timeout budgets #29"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **700 ms** timeout, retries **3** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["3500 ms","2100 ms","2800 ms","700 ms"],"answer":2,"explanation":"(3 + 1) × 700 + 3 × 0 = 2800 ms."},{"prompt":"A service calls a dependency with a **2900 ms** timeout, retries **1** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["2900 ms","8800 ms","5800 ms","5900 ms"],"answer":3,"explanation":"(1 + 1) × 2900 + 1 × 100 = 5900 ms."},{"prompt":"A service calls a dependency with a **1000 ms** timeout, retries **2** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["4200 ms","2000 ms","1000 ms","3200 ms"],"answer":3,"explanation":"(2 + 1) × 1000 + 2 × 100 = 3200 ms."},{"prompt":"A service calls a dependency with a **2300 ms** timeout, retries **2** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["4600 ms","7100 ms","2300 ms","9400 ms"],"answer":1,"explanation":"(2 + 1) × 2300 + 2 × 100 = 7100 ms."},{"prompt":"A service calls a dependency with a **1600 ms** timeout, retries **2** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["1600 ms","5000 ms","3200 ms","6600 ms"],"answer":1,"explanation":"(2 + 1) × 1600 + 2 × 100 = 5000 ms."}]
---
# Design Drill: Timeout budgets #29

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
