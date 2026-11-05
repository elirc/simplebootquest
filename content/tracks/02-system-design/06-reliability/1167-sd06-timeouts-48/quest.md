---
slug: "sd06-timeouts-48"
title: "Design Drill: Timeout budgets #48"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **1800 ms** timeout, retries **1** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["3700 ms","5500 ms","1800 ms","3600 ms"],"answer":0,"explanation":"(1 + 1) × 1800 + 1 × 100 = 3700 ms."},{"prompt":"A service calls a dependency with a **1500 ms** timeout, retries **3** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["6600 ms","1500 ms","4500 ms","8100 ms"],"answer":0,"explanation":"(3 + 1) × 1500 + 3 × 200 = 6600 ms."},{"prompt":"A service calls a dependency with a **1000 ms** timeout, retries **1** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["1000 ms","3200 ms","2200 ms","2000 ms"],"answer":2,"explanation":"(1 + 1) × 1000 + 1 × 200 = 2200 ms."},{"prompt":"A service calls a dependency with a **200 ms** timeout, retries **2** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["1000 ms","200 ms","400 ms","800 ms"],"answer":3,"explanation":"(2 + 1) × 200 + 2 × 100 = 800 ms."},{"prompt":"A service calls a dependency with a **700 ms** timeout, retries **1** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["1600 ms","2300 ms","1400 ms","700 ms"],"answer":0,"explanation":"(1 + 1) × 700 + 1 × 200 = 1600 ms."}]
---
# Design Drill: Timeout budgets #48

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
