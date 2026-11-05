---
slug: "sd06-timeouts-47"
title: "Design Drill: Timeout budgets #47"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **2400 ms** timeout, retries **1** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["7200 ms","2400 ms","4800 ms"],"answer":2,"explanation":"(1 + 1) × 2400 + 1 × 0 = 4800 ms."},{"prompt":"A service calls a dependency with a **2000 ms** timeout, retries **1** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["6200 ms","2000 ms","4000 ms","4200 ms"],"answer":3,"explanation":"(1 + 1) × 2000 + 1 × 200 = 4200 ms."},{"prompt":"A service calls a dependency with a **3000 ms** timeout, retries **1** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["6000 ms","6100 ms","9100 ms","3000 ms"],"answer":1,"explanation":"(1 + 1) × 3000 + 1 × 100 = 6100 ms."},{"prompt":"A service calls a dependency with a **500 ms** timeout, retries **2** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["2400 ms","1900 ms","500 ms","1000 ms"],"answer":1,"explanation":"(2 + 1) × 500 + 2 × 200 = 1900 ms."},{"prompt":"A service calls a dependency with a **2100 ms** timeout, retries **3** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["6300 ms","11100 ms","9000 ms","2100 ms"],"answer":2,"explanation":"(3 + 1) × 2100 + 3 × 200 = 9000 ms."}]
---
# Design Drill: Timeout budgets #47

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
