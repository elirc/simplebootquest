---
slug: "sd06-timeouts-23"
title: "Design Drill: Timeout budgets #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **1900 ms** timeout, retries **3** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["7600 ms","1900 ms","9500 ms","5700 ms"],"answer":0,"explanation":"(3 + 1) × 1900 + 3 × 0 = 7600 ms."},{"prompt":"A service calls a dependency with a **1300 ms** timeout, retries **3** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["1300 ms","6500 ms","3900 ms","5200 ms"],"answer":3,"explanation":"(3 + 1) × 1300 + 3 × 0 = 5200 ms."},{"prompt":"A service calls a dependency with a **2700 ms** timeout, retries **3** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["2700 ms","11100 ms","13800 ms","8100 ms"],"answer":1,"explanation":"(3 + 1) × 2700 + 3 × 100 = 11100 ms."},{"prompt":"A service calls a dependency with a **300 ms** timeout, retries **3** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["1200 ms","900 ms","300 ms","1500 ms"],"answer":0,"explanation":"(3 + 1) × 300 + 3 × 0 = 1200 ms."},{"prompt":"A service calls a dependency with a **1200 ms** timeout, retries **1** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["1200 ms","3700 ms","2500 ms","2400 ms"],"answer":2,"explanation":"(1 + 1) × 1200 + 1 × 100 = 2500 ms."}]
---
# Design Drill: Timeout budgets #23

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
