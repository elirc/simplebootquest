---
slug: "sd06-timeouts-52"
title: "Design Drill: Timeout budgets #52"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **1800 ms** timeout, retries **3** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["7200 ms","9000 ms","1800 ms","5400 ms"],"answer":0,"explanation":"(3 + 1) × 1800 + 3 × 0 = 7200 ms."},{"prompt":"A service calls a dependency with a **200 ms** timeout, retries **2** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["200 ms","400 ms","1000 ms","1200 ms"],"answer":2,"explanation":"(2 + 1) × 200 + 2 × 200 = 1000 ms."},{"prompt":"A service calls a dependency with a **600 ms** timeout, retries **2** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["2200 ms","600 ms","2800 ms","1200 ms"],"answer":0,"explanation":"(2 + 1) × 600 + 2 × 200 = 2200 ms."},{"prompt":"A service calls a dependency with a **700 ms** timeout, retries **3** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["2100 ms","700 ms","3100 ms","3800 ms"],"answer":2,"explanation":"(3 + 1) × 700 + 3 × 100 = 3100 ms."},{"prompt":"A service calls a dependency with a **300 ms** timeout, retries **2** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["600 ms","300 ms","1100 ms","1400 ms"],"answer":2,"explanation":"(2 + 1) × 300 + 2 × 100 = 1100 ms."}]
---
# Design Drill: Timeout budgets #52

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
