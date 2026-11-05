---
slug: "sd06-timeouts-42"
title: "Design Drill: Timeout budgets #42"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **1200 ms** timeout, retries **3** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["1200 ms","3600 ms","6300 ms","5100 ms"],"answer":3,"explanation":"(3 + 1) × 1200 + 3 × 100 = 5100 ms."},{"prompt":"A service calls a dependency with a **200 ms** timeout, retries **2** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["400 ms","600 ms","200 ms","800 ms"],"answer":1,"explanation":"(2 + 1) × 200 + 2 × 0 = 600 ms."},{"prompt":"A service calls a dependency with a **1000 ms** timeout, retries **2** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["3400 ms","2000 ms","4400 ms","1000 ms"],"answer":0,"explanation":"(2 + 1) × 1000 + 2 × 200 = 3400 ms."},{"prompt":"A service calls a dependency with a **2300 ms** timeout, retries **3** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["9500 ms","6900 ms","11800 ms","2300 ms"],"answer":0,"explanation":"(3 + 1) × 2300 + 3 × 100 = 9500 ms."},{"prompt":"A service calls a dependency with a **300 ms** timeout, retries **1** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["900 ms","600 ms","300 ms"],"answer":1,"explanation":"(1 + 1) × 300 + 1 × 0 = 600 ms."}]
---
# Design Drill: Timeout budgets #42

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
