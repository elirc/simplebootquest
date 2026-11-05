---
slug: "sd06-timeouts-17"
title: "Design Drill: Timeout budgets #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **2000 ms** timeout, retries **2** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["8000 ms","4000 ms","6000 ms","2000 ms"],"answer":2,"explanation":"(2 + 1) × 2000 + 2 × 0 = 6000 ms."},{"prompt":"A service calls a dependency with a **2000 ms** timeout, retries **3** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["8000 ms","2000 ms","6000 ms","10000 ms"],"answer":0,"explanation":"(3 + 1) × 2000 + 3 × 0 = 8000 ms."},{"prompt":"A service calls a dependency with a **2200 ms** timeout, retries **2** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["9000 ms","2200 ms","6800 ms","4400 ms"],"answer":2,"explanation":"(2 + 1) × 2200 + 2 × 100 = 6800 ms."},{"prompt":"A service calls a dependency with a **2900 ms** timeout, retries **2** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["5800 ms","12000 ms","2900 ms","9100 ms"],"answer":3,"explanation":"(2 + 1) × 2900 + 2 × 200 = 9100 ms."},{"prompt":"A service calls a dependency with a **400 ms** timeout, retries **3** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["2200 ms","400 ms","1200 ms","2600 ms"],"answer":0,"explanation":"(3 + 1) × 400 + 3 × 200 = 2200 ms."}]
---
# Design Drill: Timeout budgets #17

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
