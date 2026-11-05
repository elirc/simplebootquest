---
slug: "sd06-timeouts-32"
title: "Design Drill: Timeout budgets #32"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **800 ms** timeout, retries **3** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["800 ms","3800 ms","4600 ms","2400 ms"],"answer":1,"explanation":"(3 + 1) × 800 + 3 × 200 = 3800 ms."},{"prompt":"A service calls a dependency with a **400 ms** timeout, retries **1** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["1400 ms","800 ms","1000 ms","400 ms"],"answer":2,"explanation":"(1 + 1) × 400 + 1 × 200 = 1000 ms."},{"prompt":"A service calls a dependency with a **3000 ms** timeout, retries **3** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["3000 ms","12000 ms","15000 ms","9000 ms"],"answer":1,"explanation":"(3 + 1) × 3000 + 3 × 0 = 12000 ms."},{"prompt":"A service calls a dependency with a **1800 ms** timeout, retries **2** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["3600 ms","5800 ms","7600 ms","1800 ms"],"answer":1,"explanation":"(2 + 1) × 1800 + 2 × 200 = 5800 ms."},{"prompt":"A service calls a dependency with a **3000 ms** timeout, retries **3** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["15600 ms","9000 ms","3000 ms","12600 ms"],"answer":3,"explanation":"(3 + 1) × 3000 + 3 × 200 = 12600 ms."}]
---
# Design Drill: Timeout budgets #32

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
