---
slug: "sd06-timeouts-15"
title: "Design Drill: Timeout budgets #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **2700 ms** timeout, retries **1** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["5400 ms","2700 ms","5600 ms","8300 ms"],"answer":2,"explanation":"(1 + 1) × 2700 + 1 × 200 = 5600 ms."},{"prompt":"A service calls a dependency with a **1200 ms** timeout, retries **1** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["1200 ms","2600 ms","2400 ms","3800 ms"],"answer":1,"explanation":"(1 + 1) × 1200 + 1 × 200 = 2600 ms."},{"prompt":"A service calls a dependency with a **3000 ms** timeout, retries **2** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["6000 ms","12400 ms","3000 ms","9400 ms"],"answer":3,"explanation":"(2 + 1) × 3000 + 2 × 200 = 9400 ms."},{"prompt":"A service calls a dependency with a **2800 ms** timeout, retries **2** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["5600 ms","11400 ms","8600 ms","2800 ms"],"answer":2,"explanation":"(2 + 1) × 2800 + 2 × 100 = 8600 ms."},{"prompt":"A service calls a dependency with a **2300 ms** timeout, retries **3** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["11500 ms","6900 ms","2300 ms","9200 ms"],"answer":3,"explanation":"(3 + 1) × 2300 + 3 × 0 = 9200 ms."}]
---
# Design Drill: Timeout budgets #15

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
