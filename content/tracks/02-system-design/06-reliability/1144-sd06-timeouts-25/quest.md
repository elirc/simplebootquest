---
slug: "sd06-timeouts-25"
title: "Design Drill: Timeout budgets #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **1900 ms** timeout, retries **1** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["3800 ms","5900 ms","1900 ms","4000 ms"],"answer":3,"explanation":"(1 + 1) × 1900 + 1 × 200 = 4000 ms."},{"prompt":"A service calls a dependency with a **1100 ms** timeout, retries **3** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["4700 ms","5800 ms","3300 ms","1100 ms"],"answer":0,"explanation":"(3 + 1) × 1100 + 3 × 100 = 4700 ms."},{"prompt":"A service calls a dependency with a **2700 ms** timeout, retries **1** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["8200 ms","2700 ms","5500 ms","5400 ms"],"answer":2,"explanation":"(1 + 1) × 2700 + 1 × 100 = 5500 ms."},{"prompt":"A service calls a dependency with a **600 ms** timeout, retries **2** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["2600 ms","600 ms","2000 ms","1200 ms"],"answer":2,"explanation":"(2 + 1) × 600 + 2 × 100 = 2000 ms."},{"prompt":"A service calls a dependency with a **100 ms** timeout, retries **1** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["100 ms","300 ms","200 ms"],"answer":2,"explanation":"(1 + 1) × 100 + 1 × 0 = 200 ms."}]
---
# Design Drill: Timeout budgets #25

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
