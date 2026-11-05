---
slug: "sd06-timeouts-30"
title: "Design Drill: Timeout budgets #30"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **1800 ms** timeout, retries **1** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["3600 ms","1800 ms","5400 ms"],"answer":0,"explanation":"(1 + 1) × 1800 + 1 × 0 = 3600 ms."},{"prompt":"A service calls a dependency with a **700 ms** timeout, retries **2** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["2300 ms","700 ms","1400 ms","3000 ms"],"answer":0,"explanation":"(2 + 1) × 700 + 2 × 100 = 2300 ms."},{"prompt":"A service calls a dependency with a **1400 ms** timeout, retries **1** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["2800 ms","4400 ms","3000 ms","1400 ms"],"answer":2,"explanation":"(1 + 1) × 1400 + 1 × 200 = 3000 ms."},{"prompt":"A service calls a dependency with a **1500 ms** timeout, retries **2** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["6400 ms","3000 ms","4900 ms","1500 ms"],"answer":2,"explanation":"(2 + 1) × 1500 + 2 × 200 = 4900 ms."},{"prompt":"A service calls a dependency with a **2200 ms** timeout, retries **1** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["4400 ms","6700 ms","4500 ms","2200 ms"],"answer":2,"explanation":"(1 + 1) × 2200 + 1 × 100 = 4500 ms."}]
---
# Design Drill: Timeout budgets #30

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
