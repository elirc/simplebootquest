---
slug: "sd06-timeouts-37"
title: "Design Drill: Timeout budgets #37"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **2800 ms** timeout, retries **2** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["11600 ms","8800 ms","5600 ms","2800 ms"],"answer":1,"explanation":"(2 + 1) × 2800 + 2 × 200 = 8800 ms."},{"prompt":"A service calls a dependency with a **2700 ms** timeout, retries **2** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["11000 ms","8300 ms","2700 ms","5400 ms"],"answer":1,"explanation":"(2 + 1) × 2700 + 2 × 100 = 8300 ms."},{"prompt":"A service calls a dependency with a **900 ms** timeout, retries **2** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["2700 ms","1800 ms","900 ms","3600 ms"],"answer":0,"explanation":"(2 + 1) × 900 + 2 × 0 = 2700 ms."},{"prompt":"A service calls a dependency with a **2000 ms** timeout, retries **3** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["6000 ms","8600 ms","10600 ms","2000 ms"],"answer":1,"explanation":"(3 + 1) × 2000 + 3 × 200 = 8600 ms."},{"prompt":"A service calls a dependency with a **1000 ms** timeout, retries **3** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["3000 ms","1000 ms","5600 ms","4600 ms"],"answer":3,"explanation":"(3 + 1) × 1000 + 3 × 200 = 4600 ms."}]
---
# Design Drill: Timeout budgets #37

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
