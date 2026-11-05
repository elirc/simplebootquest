---
slug: "sd06-timeouts-8"
title: "Design Drill: Timeout budgets #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **2000 ms** timeout, retries **1** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["2000 ms","6000 ms","4000 ms"],"answer":2,"explanation":"(1 + 1) × 2000 + 1 × 0 = 4000 ms."},{"prompt":"A service calls a dependency with a **2100 ms** timeout, retries **2** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["2100 ms","8800 ms","6700 ms","4200 ms"],"answer":2,"explanation":"(2 + 1) × 2100 + 2 × 200 = 6700 ms."},{"prompt":"A service calls a dependency with a **1200 ms** timeout, retries **3** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["4800 ms","6000 ms","3600 ms","1200 ms"],"answer":0,"explanation":"(3 + 1) × 1200 + 3 × 0 = 4800 ms."},{"prompt":"A service calls a dependency with a **300 ms** timeout, retries **2** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["600 ms","300 ms","1300 ms","1600 ms"],"answer":2,"explanation":"(2 + 1) × 300 + 2 × 200 = 1300 ms."},{"prompt":"A service calls a dependency with a **1300 ms** timeout, retries **1** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["1300 ms","4100 ms","2800 ms","2600 ms"],"answer":2,"explanation":"(1 + 1) × 1300 + 1 × 200 = 2800 ms."}]
---
# Design Drill: Timeout budgets #8

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
