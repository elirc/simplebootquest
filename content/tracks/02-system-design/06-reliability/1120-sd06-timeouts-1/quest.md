---
slug: "sd06-timeouts-1"
title: "Design Drill: Timeout budgets #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **600 ms** timeout, retries **2** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["1800 ms","1200 ms","600 ms","2400 ms"],"answer":0,"explanation":"(2 + 1) × 600 + 2 × 0 = 1800 ms."},{"prompt":"A service calls a dependency with a **1100 ms** timeout, retries **3** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["3300 ms","1100 ms","5500 ms","4400 ms"],"answer":3,"explanation":"(3 + 1) × 1100 + 3 × 0 = 4400 ms."},{"prompt":"A service calls a dependency with a **3000 ms** timeout, retries **2** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["3000 ms","9200 ms","6000 ms","12200 ms"],"answer":1,"explanation":"(2 + 1) × 3000 + 2 × 100 = 9200 ms."},{"prompt":"A service calls a dependency with a **600 ms** timeout, retries **3** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["1800 ms","3600 ms","600 ms","3000 ms"],"answer":3,"explanation":"(3 + 1) × 600 + 3 × 200 = 3000 ms."},{"prompt":"A service calls a dependency with a **500 ms** timeout, retries **1** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["1500 ms","500 ms","1000 ms"],"answer":2,"explanation":"(1 + 1) × 500 + 1 × 0 = 1000 ms."}]
---
# Design Drill: Timeout budgets #1

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
