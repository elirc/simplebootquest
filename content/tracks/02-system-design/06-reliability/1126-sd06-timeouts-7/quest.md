---
slug: "sd06-timeouts-7"
title: "Design Drill: Timeout budgets #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **2400 ms** timeout, retries **2** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["7200 ms","2400 ms","9600 ms","4800 ms"],"answer":0,"explanation":"(2 + 1) × 2400 + 2 × 0 = 7200 ms."},{"prompt":"A service calls a dependency with a **600 ms** timeout, retries **1** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["1200 ms","1900 ms","1300 ms","600 ms"],"answer":2,"explanation":"(1 + 1) × 600 + 1 × 100 = 1300 ms."},{"prompt":"A service calls a dependency with a **1700 ms** timeout, retries **1** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["1700 ms","3400 ms","5100 ms"],"answer":1,"explanation":"(1 + 1) × 1700 + 1 × 0 = 3400 ms."},{"prompt":"A service calls a dependency with a **1800 ms** timeout, retries **3** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["5400 ms","7800 ms","1800 ms","9600 ms"],"answer":1,"explanation":"(3 + 1) × 1800 + 3 × 200 = 7800 ms."},{"prompt":"A service calls a dependency with a **2500 ms** timeout, retries **2** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["7500 ms","10000 ms","5000 ms","2500 ms"],"answer":0,"explanation":"(2 + 1) × 2500 + 2 × 0 = 7500 ms."}]
---
# Design Drill: Timeout budgets #7

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
