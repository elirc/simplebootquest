---
slug: "sd06-timeouts-38"
title: "Design Drill: Timeout budgets #38"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **2600 ms** timeout, retries **1** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["5300 ms","7900 ms","5200 ms","2600 ms"],"answer":0,"explanation":"(1 + 1) × 2600 + 1 × 100 = 5300 ms."},{"prompt":"A service calls a dependency with a **2000 ms** timeout, retries **2** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["8200 ms","4000 ms","2000 ms","6200 ms"],"answer":3,"explanation":"(2 + 1) × 2000 + 2 × 100 = 6200 ms."},{"prompt":"A service calls a dependency with a **1100 ms** timeout, retries **2** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["4800 ms","3700 ms","2200 ms","1100 ms"],"answer":1,"explanation":"(2 + 1) × 1100 + 2 × 200 = 3700 ms."},{"prompt":"A service calls a dependency with a **600 ms** timeout, retries **3** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["2700 ms","600 ms","1800 ms","3300 ms"],"answer":0,"explanation":"(3 + 1) × 600 + 3 × 100 = 2700 ms."},{"prompt":"A service calls a dependency with a **900 ms** timeout, retries **1** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["2700 ms","900 ms","1800 ms"],"answer":2,"explanation":"(1 + 1) × 900 + 1 × 0 = 1800 ms."}]
---
# Design Drill: Timeout budgets #38

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
