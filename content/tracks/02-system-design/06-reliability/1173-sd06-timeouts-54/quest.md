---
slug: "sd06-timeouts-54"
title: "Design Drill: Timeout budgets #54"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **2600 ms** timeout, retries **2** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["2600 ms","5200 ms","8200 ms","10800 ms"],"answer":2,"explanation":"(2 + 1) × 2600 + 2 × 200 = 8200 ms."},{"prompt":"A service calls a dependency with a **1600 ms** timeout, retries **3** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["1600 ms","8000 ms","6400 ms","4800 ms"],"answer":2,"explanation":"(3 + 1) × 1600 + 3 × 0 = 6400 ms."},{"prompt":"A service calls a dependency with a **1400 ms** timeout, retries **3** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["7600 ms","6200 ms","1400 ms","4200 ms"],"answer":1,"explanation":"(3 + 1) × 1400 + 3 × 200 = 6200 ms."},{"prompt":"A service calls a dependency with a **400 ms** timeout, retries **2** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["400 ms","1800 ms","800 ms","1400 ms"],"answer":3,"explanation":"(2 + 1) × 400 + 2 × 100 = 1400 ms."},{"prompt":"A service calls a dependency with a **2700 ms** timeout, retries **1** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["8100 ms","2700 ms","5400 ms"],"answer":2,"explanation":"(1 + 1) × 2700 + 1 × 0 = 5400 ms."}]
---
# Design Drill: Timeout budgets #54

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
