---
slug: "sd06-timeouts-10"
title: "Design Drill: Timeout budgets #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **900 ms** timeout, retries **2** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["1800 ms","900 ms","3100 ms","4000 ms"],"answer":2,"explanation":"(2 + 1) × 900 + 2 × 200 = 3100 ms."},{"prompt":"A service calls a dependency with a **2300 ms** timeout, retries **2** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["9600 ms","2300 ms","7300 ms","4600 ms"],"answer":2,"explanation":"(2 + 1) × 2300 + 2 × 200 = 7300 ms."},{"prompt":"A service calls a dependency with a **1500 ms** timeout, retries **3** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["1500 ms","6000 ms","4500 ms","7500 ms"],"answer":1,"explanation":"(3 + 1) × 1500 + 3 × 0 = 6000 ms."},{"prompt":"A service calls a dependency with a **2100 ms** timeout, retries **2** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["4200 ms","6300 ms","2100 ms","8400 ms"],"answer":1,"explanation":"(2 + 1) × 2100 + 2 × 0 = 6300 ms."},{"prompt":"A service calls a dependency with a **900 ms** timeout, retries **3** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["900 ms","4200 ms","5100 ms","2700 ms"],"answer":1,"explanation":"(3 + 1) × 900 + 3 × 200 = 4200 ms."}]
---
# Design Drill: Timeout budgets #10

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
