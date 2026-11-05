---
slug: "sd06-timeouts-41"
title: "Design Drill: Timeout budgets #41"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **400 ms** timeout, retries **2** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["400 ms","1200 ms","1600 ms","800 ms"],"answer":1,"explanation":"(2 + 1) × 400 + 2 × 0 = 1200 ms."},{"prompt":"A service calls a dependency with a **2200 ms** timeout, retries **3** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["6600 ms","11600 ms","2200 ms","9400 ms"],"answer":3,"explanation":"(3 + 1) × 2200 + 3 × 200 = 9400 ms."},{"prompt":"A service calls a dependency with a **700 ms** timeout, retries **2** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["700 ms","1400 ms","3200 ms","2500 ms"],"answer":3,"explanation":"(2 + 1) × 700 + 2 × 200 = 2500 ms."},{"prompt":"A service calls a dependency with a **2500 ms** timeout, retries **2** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["5000 ms","2500 ms","10200 ms","7700 ms"],"answer":3,"explanation":"(2 + 1) × 2500 + 2 × 100 = 7700 ms."},{"prompt":"A service calls a dependency with a **2800 ms** timeout, retries **3** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["8400 ms","2800 ms","11200 ms","14000 ms"],"answer":2,"explanation":"(3 + 1) × 2800 + 3 × 0 = 11200 ms."}]
---
# Design Drill: Timeout budgets #41

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
