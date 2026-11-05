---
slug: "sd06-timeouts-2"
title: "Design Drill: Timeout budgets #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **1800 ms** timeout, retries **3** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["1800 ms","9300 ms","7500 ms","5400 ms"],"answer":2,"explanation":"(3 + 1) × 1800 + 3 × 100 = 7500 ms."},{"prompt":"A service calls a dependency with a **2500 ms** timeout, retries **1** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["5000 ms","2500 ms","5200 ms","7700 ms"],"answer":2,"explanation":"(1 + 1) × 2500 + 1 × 200 = 5200 ms."},{"prompt":"A service calls a dependency with a **1400 ms** timeout, retries **2** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["6000 ms","2800 ms","1400 ms","4600 ms"],"answer":3,"explanation":"(2 + 1) × 1400 + 2 × 200 = 4600 ms."},{"prompt":"A service calls a dependency with a **2400 ms** timeout, retries **3** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["7200 ms","10200 ms","2400 ms","12600 ms"],"answer":1,"explanation":"(3 + 1) × 2400 + 3 × 200 = 10200 ms."},{"prompt":"A service calls a dependency with a **2200 ms** timeout, retries **1** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["6800 ms","2200 ms","4400 ms","4600 ms"],"answer":3,"explanation":"(1 + 1) × 2200 + 1 × 200 = 4600 ms."}]
---
# Design Drill: Timeout budgets #2

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
