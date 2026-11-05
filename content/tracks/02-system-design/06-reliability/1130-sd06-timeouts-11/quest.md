---
slug: "sd06-timeouts-11"
title: "Design Drill: Timeout budgets #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **1400 ms** timeout, retries **2** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["2800 ms","5600 ms","4200 ms","1400 ms"],"answer":2,"explanation":"(2 + 1) × 1400 + 2 × 0 = 4200 ms."},{"prompt":"A service calls a dependency with a **2100 ms** timeout, retries **1** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["6300 ms","2100 ms","4200 ms"],"answer":2,"explanation":"(1 + 1) × 2100 + 1 × 0 = 4200 ms."},{"prompt":"A service calls a dependency with a **600 ms** timeout, retries **3** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["3000 ms","600 ms","1800 ms","2400 ms"],"answer":3,"explanation":"(3 + 1) × 600 + 3 × 0 = 2400 ms."},{"prompt":"A service calls a dependency with a **1500 ms** timeout, retries **2** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["3000 ms","1500 ms","6200 ms","4700 ms"],"answer":3,"explanation":"(2 + 1) × 1500 + 2 × 100 = 4700 ms."},{"prompt":"A service calls a dependency with a **200 ms** timeout, retries **3** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["1100 ms","1300 ms","600 ms","200 ms"],"answer":0,"explanation":"(3 + 1) × 200 + 3 × 100 = 1100 ms."}]
---
# Design Drill: Timeout budgets #11

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
