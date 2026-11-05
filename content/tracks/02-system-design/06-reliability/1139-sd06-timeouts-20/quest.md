---
slug: "sd06-timeouts-20"
title: "Design Drill: Timeout budgets #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **1600 ms** timeout, retries **2** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["3200 ms","1600 ms","4800 ms","6400 ms"],"answer":2,"explanation":"(2 + 1) × 1600 + 2 × 0 = 4800 ms."},{"prompt":"A service calls a dependency with a **3000 ms** timeout, retries **2** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["6000 ms","3000 ms","9000 ms","12000 ms"],"answer":2,"explanation":"(2 + 1) × 3000 + 2 × 0 = 9000 ms."},{"prompt":"A service calls a dependency with a **800 ms** timeout, retries **1** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["2400 ms","1600 ms","800 ms"],"answer":1,"explanation":"(1 + 1) × 800 + 1 × 0 = 1600 ms."},{"prompt":"A service calls a dependency with a **1100 ms** timeout, retries **3** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["5000 ms","3300 ms","1100 ms","6100 ms"],"answer":0,"explanation":"(3 + 1) × 1100 + 3 × 200 = 5000 ms."},{"prompt":"A service calls a dependency with a **400 ms** timeout, retries **2** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["800 ms","400 ms","1600 ms","2000 ms"],"answer":2,"explanation":"(2 + 1) × 400 + 2 × 200 = 1600 ms."}]
---
# Design Drill: Timeout budgets #20

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
