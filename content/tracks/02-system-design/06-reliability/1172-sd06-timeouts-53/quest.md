---
slug: "sd06-timeouts-53"
title: "Design Drill: Timeout budgets #53"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **3000 ms** timeout, retries **3** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["9000 ms","3000 ms","15300 ms","12300 ms"],"answer":3,"explanation":"(3 + 1) × 3000 + 3 × 100 = 12300 ms."},{"prompt":"A service calls a dependency with a **1000 ms** timeout, retries **2** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["4000 ms","3000 ms","2000 ms","1000 ms"],"answer":1,"explanation":"(2 + 1) × 1000 + 2 × 0 = 3000 ms."},{"prompt":"A service calls a dependency with a **500 ms** timeout, retries **3** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["500 ms","2300 ms","2800 ms","1500 ms"],"answer":1,"explanation":"(3 + 1) × 500 + 3 × 100 = 2300 ms."},{"prompt":"A service calls a dependency with a **1600 ms** timeout, retries **1** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["3200 ms","3300 ms","1600 ms","4900 ms"],"answer":1,"explanation":"(1 + 1) × 1600 + 1 × 100 = 3300 ms."},{"prompt":"A service calls a dependency with a **300 ms** timeout, retries **1** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["600 ms","800 ms","1100 ms","300 ms"],"answer":1,"explanation":"(1 + 1) × 300 + 1 × 200 = 800 ms."}]
---
# Design Drill: Timeout budgets #53

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
