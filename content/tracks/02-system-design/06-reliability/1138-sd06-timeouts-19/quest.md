---
slug: "sd06-timeouts-19"
title: "Design Drill: Timeout budgets #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **1200 ms** timeout, retries **1** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["1200 ms","2400 ms","3600 ms"],"answer":1,"explanation":"(1 + 1) × 1200 + 1 × 0 = 2400 ms."},{"prompt":"A service calls a dependency with a **1300 ms** timeout, retries **1** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["1300 ms","4000 ms","2600 ms","2700 ms"],"answer":3,"explanation":"(1 + 1) × 1300 + 1 × 100 = 2700 ms."},{"prompt":"A service calls a dependency with a **1400 ms** timeout, retries **3** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["1400 ms","4200 ms","7300 ms","5900 ms"],"answer":3,"explanation":"(3 + 1) × 1400 + 3 × 100 = 5900 ms."},{"prompt":"A service calls a dependency with a **2800 ms** timeout, retries **3** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["2800 ms","11800 ms","14600 ms","8400 ms"],"answer":1,"explanation":"(3 + 1) × 2800 + 3 × 200 = 11800 ms."},{"prompt":"A service calls a dependency with a **2000 ms** timeout, retries **1** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["6100 ms","4000 ms","4100 ms","2000 ms"],"answer":2,"explanation":"(1 + 1) × 2000 + 1 × 100 = 4100 ms."}]
---
# Design Drill: Timeout budgets #19

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
