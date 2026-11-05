---
slug: "sd06-timeouts-49"
title: "Design Drill: Timeout budgets #49"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **500 ms** timeout, retries **2** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["2200 ms","1000 ms","500 ms","1700 ms"],"answer":3,"explanation":"(2 + 1) × 500 + 2 × 100 = 1700 ms."},{"prompt":"A service calls a dependency with a **300 ms** timeout, retries **3** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["900 ms","300 ms","1800 ms","1500 ms"],"answer":3,"explanation":"(3 + 1) × 300 + 3 × 100 = 1500 ms."},{"prompt":"A service calls a dependency with a **2800 ms** timeout, retries **3** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["11500 ms","2800 ms","8400 ms","14300 ms"],"answer":0,"explanation":"(3 + 1) × 2800 + 3 × 100 = 11500 ms."},{"prompt":"A service calls a dependency with a **1400 ms** timeout, retries **3** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["7000 ms","1400 ms","4200 ms","5600 ms"],"answer":3,"explanation":"(3 + 1) × 1400 + 3 × 0 = 5600 ms."},{"prompt":"A service calls a dependency with a **1600 ms** timeout, retries **1** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["5000 ms","1600 ms","3200 ms","3400 ms"],"answer":3,"explanation":"(1 + 1) × 1600 + 1 × 200 = 3400 ms."}]
---
# Design Drill: Timeout budgets #49

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
