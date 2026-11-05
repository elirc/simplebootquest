---
slug: "sd06-timeouts-22"
title: "Design Drill: Timeout budgets #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **2800 ms** timeout, retries **1** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["8500 ms","5700 ms","2800 ms","5600 ms"],"answer":1,"explanation":"(1 + 1) × 2800 + 1 × 100 = 5700 ms."},{"prompt":"A service calls a dependency with a **2500 ms** timeout, retries **3** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["13100 ms","2500 ms","10600 ms","7500 ms"],"answer":2,"explanation":"(3 + 1) × 2500 + 3 × 200 = 10600 ms."},{"prompt":"A service calls a dependency with a **700 ms** timeout, retries **1** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["2200 ms","700 ms","1500 ms","1400 ms"],"answer":2,"explanation":"(1 + 1) × 700 + 1 × 100 = 1500 ms."},{"prompt":"A service calls a dependency with a **2100 ms** timeout, retries **1** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["6500 ms","4400 ms","2100 ms","4200 ms"],"answer":1,"explanation":"(1 + 1) × 2100 + 1 × 200 = 4400 ms."},{"prompt":"A service calls a dependency with a **1900 ms** timeout, retries **2** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["5700 ms","3800 ms","7600 ms","1900 ms"],"answer":0,"explanation":"(2 + 1) × 1900 + 2 × 0 = 5700 ms."}]
---
# Design Drill: Timeout budgets #22

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
