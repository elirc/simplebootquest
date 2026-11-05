---
slug: "sd06-timeouts-34"
title: "Design Drill: Timeout budgets #34"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **2300 ms** timeout, retries **2** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["4600 ms","2300 ms","6900 ms","9200 ms"],"answer":2,"explanation":"(2 + 1) × 2300 + 2 × 0 = 6900 ms."},{"prompt":"A service calls a dependency with a **1800 ms** timeout, retries **2** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["7200 ms","5400 ms","3600 ms","1800 ms"],"answer":1,"explanation":"(2 + 1) × 1800 + 2 × 0 = 5400 ms."},{"prompt":"A service calls a dependency with a **2200 ms** timeout, retries **3** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["6600 ms","11300 ms","9100 ms","2200 ms"],"answer":2,"explanation":"(3 + 1) × 2200 + 3 × 100 = 9100 ms."},{"prompt":"A service calls a dependency with a **500 ms** timeout, retries **3** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["500 ms","3100 ms","2600 ms","1500 ms"],"answer":2,"explanation":"(3 + 1) × 500 + 3 × 200 = 2600 ms."},{"prompt":"A service calls a dependency with a **2100 ms** timeout, retries **3** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["10800 ms","2100 ms","8700 ms","6300 ms"],"answer":2,"explanation":"(3 + 1) × 2100 + 3 × 100 = 8700 ms."}]
---
# Design Drill: Timeout budgets #34

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
