---
slug: "sd06-timeouts-40"
title: "Design Drill: Timeout budgets #40"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **1500 ms** timeout, retries **1** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["4700 ms","1500 ms","3000 ms","3200 ms"],"answer":3,"explanation":"(1 + 1) × 1500 + 1 × 200 = 3200 ms."},{"prompt":"A service calls a dependency with a **1100 ms** timeout, retries **1** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["2200 ms","3300 ms","1100 ms"],"answer":0,"explanation":"(1 + 1) × 1100 + 1 × 0 = 2200 ms."},{"prompt":"A service calls a dependency with a **2900 ms** timeout, retries **1** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["5800 ms","8900 ms","6000 ms","2900 ms"],"answer":2,"explanation":"(1 + 1) × 2900 + 1 × 200 = 6000 ms."},{"prompt":"A service calls a dependency with a **800 ms** timeout, retries **2** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["800 ms","2600 ms","1600 ms","3400 ms"],"answer":1,"explanation":"(2 + 1) × 800 + 2 × 100 = 2600 ms."},{"prompt":"A service calls a dependency with a **1400 ms** timeout, retries **2** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["1400 ms","2800 ms","5800 ms","4400 ms"],"answer":3,"explanation":"(2 + 1) × 1400 + 2 × 100 = 4400 ms."}]
---
# Design Drill: Timeout budgets #40

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
