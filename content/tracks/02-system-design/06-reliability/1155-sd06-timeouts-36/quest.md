---
slug: "sd06-timeouts-36"
title: "Design Drill: Timeout budgets #36"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **2600 ms** timeout, retries **2** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["2600 ms","10600 ms","8000 ms","5200 ms"],"answer":2,"explanation":"(2 + 1) × 2600 + 2 × 100 = 8000 ms."},{"prompt":"A service calls a dependency with a **900 ms** timeout, retries **3** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["4500 ms","3600 ms","900 ms","2700 ms"],"answer":1,"explanation":"(3 + 1) × 900 + 3 × 0 = 3600 ms."},{"prompt":"A service calls a dependency with a **900 ms** timeout, retries **2** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["3800 ms","1800 ms","2900 ms","900 ms"],"answer":2,"explanation":"(2 + 1) × 900 + 2 × 100 = 2900 ms."},{"prompt":"A service calls a dependency with a **2400 ms** timeout, retries **1** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["4900 ms","4800 ms","2400 ms","7300 ms"],"answer":0,"explanation":"(1 + 1) × 2400 + 1 × 100 = 4900 ms."},{"prompt":"A service calls a dependency with a **400 ms** timeout, retries **3** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["1200 ms","1900 ms","400 ms","2300 ms"],"answer":1,"explanation":"(3 + 1) × 400 + 3 × 100 = 1900 ms."}]
---
# Design Drill: Timeout budgets #36

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
