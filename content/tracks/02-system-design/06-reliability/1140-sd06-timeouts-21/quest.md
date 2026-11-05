---
slug: "sd06-timeouts-21"
title: "Design Drill: Timeout budgets #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **1900 ms** timeout, retries **2** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["3800 ms","6100 ms","1900 ms","8000 ms"],"answer":1,"explanation":"(2 + 1) × 1900 + 2 × 200 = 6100 ms."},{"prompt":"A service calls a dependency with a **2000 ms** timeout, retries **3** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["8300 ms","10300 ms","2000 ms","6000 ms"],"answer":0,"explanation":"(3 + 1) × 2000 + 3 × 100 = 8300 ms."},{"prompt":"A service calls a dependency with a **2900 ms** timeout, retries **2** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["11800 ms","2900 ms","8900 ms","5800 ms"],"answer":2,"explanation":"(2 + 1) × 2900 + 2 × 100 = 8900 ms."},{"prompt":"A service calls a dependency with a **1900 ms** timeout, retries **2** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["5900 ms","3800 ms","7800 ms","1900 ms"],"answer":0,"explanation":"(2 + 1) × 1900 + 2 × 100 = 5900 ms."},{"prompt":"A service calls a dependency with a **700 ms** timeout, retries **3** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["2100 ms","3400 ms","4100 ms","700 ms"],"answer":1,"explanation":"(3 + 1) × 700 + 3 × 200 = 3400 ms."}]
---
# Design Drill: Timeout budgets #21

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
