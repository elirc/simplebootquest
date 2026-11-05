---
slug: "sd06-timeouts-13"
title: "Design Drill: Timeout budgets #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **100 ms** timeout, retries **2** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["100 ms","300 ms","400 ms","200 ms"],"answer":1,"explanation":"(2 + 1) × 100 + 2 × 0 = 300 ms."},{"prompt":"A service calls a dependency with a **2400 ms** timeout, retries **1** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["7400 ms","4800 ms","5000 ms","2400 ms"],"answer":2,"explanation":"(1 + 1) × 2400 + 1 × 200 = 5000 ms."},{"prompt":"A service calls a dependency with a **1700 ms** timeout, retries **2** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["6800 ms","1700 ms","3400 ms","5100 ms"],"answer":3,"explanation":"(2 + 1) × 1700 + 2 × 0 = 5100 ms."},{"prompt":"A service calls a dependency with a **2600 ms** timeout, retries **3** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["13000 ms","10400 ms","2600 ms","7800 ms"],"answer":1,"explanation":"(3 + 1) × 2600 + 3 × 0 = 10400 ms."},{"prompt":"A service calls a dependency with a **100 ms** timeout, retries **3** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["500 ms","400 ms","300 ms","100 ms"],"answer":1,"explanation":"(3 + 1) × 100 + 3 × 0 = 400 ms."}]
---
# Design Drill: Timeout budgets #13

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
