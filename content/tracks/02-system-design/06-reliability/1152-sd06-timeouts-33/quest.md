---
slug: "sd06-timeouts-33"
title: "Design Drill: Timeout budgets #33"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **2400 ms** timeout, retries **3** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["12300 ms","7200 ms","2400 ms","9900 ms"],"answer":3,"explanation":"(3 + 1) × 2400 + 3 × 100 = 9900 ms."},{"prompt":"A service calls a dependency with a **2100 ms** timeout, retries **3** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["2100 ms","8400 ms","10500 ms","6300 ms"],"answer":1,"explanation":"(3 + 1) × 2100 + 3 × 0 = 8400 ms."},{"prompt":"A service calls a dependency with a **2800 ms** timeout, retries **1** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["5800 ms","5600 ms","2800 ms","8600 ms"],"answer":0,"explanation":"(1 + 1) × 2800 + 1 × 200 = 5800 ms."},{"prompt":"A service calls a dependency with a **700 ms** timeout, retries **1** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["1400 ms","2100 ms","700 ms"],"answer":0,"explanation":"(1 + 1) × 700 + 1 × 0 = 1400 ms."},{"prompt":"A service calls a dependency with a **2300 ms** timeout, retries **3** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["9800 ms","2300 ms","6900 ms","12100 ms"],"answer":0,"explanation":"(3 + 1) × 2300 + 3 × 200 = 9800 ms."}]
---
# Design Drill: Timeout budgets #33

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
