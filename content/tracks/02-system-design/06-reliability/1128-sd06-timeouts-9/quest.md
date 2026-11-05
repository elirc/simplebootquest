---
slug: "sd06-timeouts-9"
title: "Design Drill: Timeout budgets #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **2400 ms** timeout, retries **3** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["9600 ms","2400 ms","7200 ms","12000 ms"],"answer":0,"explanation":"(3 + 1) × 2400 + 3 × 0 = 9600 ms."},{"prompt":"A service calls a dependency with a **2200 ms** timeout, retries **1** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["6600 ms","2200 ms","4400 ms"],"answer":2,"explanation":"(1 + 1) × 2200 + 1 × 0 = 4400 ms."},{"prompt":"A service calls a dependency with a **2300 ms** timeout, retries **1** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["4600 ms","2300 ms","6900 ms"],"answer":0,"explanation":"(1 + 1) × 2300 + 1 × 0 = 4600 ms."},{"prompt":"A service calls a dependency with a **1500 ms** timeout, retries **1** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["3100 ms","3000 ms","4600 ms","1500 ms"],"answer":0,"explanation":"(1 + 1) × 1500 + 1 × 100 = 3100 ms."},{"prompt":"A service calls a dependency with a **2000 ms** timeout, retries **2** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["4000 ms","8400 ms","6400 ms","2000 ms"],"answer":2,"explanation":"(2 + 1) × 2000 + 2 × 200 = 6400 ms."}]
---
# Design Drill: Timeout budgets #9

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
