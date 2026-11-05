---
slug: "sd06-timeouts-43"
title: "Design Drill: Timeout budgets #43"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **2400 ms** timeout, retries **2** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["7600 ms","4800 ms","2400 ms","10000 ms"],"answer":0,"explanation":"(2 + 1) × 2400 + 2 × 200 = 7600 ms."},{"prompt":"A service calls a dependency with a **200 ms** timeout, retries **3** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["1600 ms","600 ms","200 ms","1400 ms"],"answer":3,"explanation":"(3 + 1) × 200 + 3 × 200 = 1400 ms."},{"prompt":"A service calls a dependency with a **100 ms** timeout, retries **3** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["700 ms","800 ms","100 ms","300 ms"],"answer":0,"explanation":"(3 + 1) × 100 + 3 × 100 = 700 ms."},{"prompt":"A service calls a dependency with a **1000 ms** timeout, retries **3** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["1000 ms","3000 ms","4000 ms","5000 ms"],"answer":2,"explanation":"(3 + 1) × 1000 + 3 × 0 = 4000 ms."},{"prompt":"A service calls a dependency with a **800 ms** timeout, retries **1** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["1600 ms","1800 ms","2600 ms","800 ms"],"answer":1,"explanation":"(1 + 1) × 800 + 1 × 200 = 1800 ms."}]
---
# Design Drill: Timeout budgets #43

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
