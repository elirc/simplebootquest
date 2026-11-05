---
slug: "sd06-timeouts-28"
title: "Design Drill: Timeout budgets #28"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **2600 ms** timeout, retries **3** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["7800 ms","13300 ms","2600 ms","10700 ms"],"answer":3,"explanation":"(3 + 1) × 2600 + 3 × 100 = 10700 ms."},{"prompt":"A service calls a dependency with a **1900 ms** timeout, retries **1** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["3800 ms","1900 ms","5800 ms","3900 ms"],"answer":3,"explanation":"(1 + 1) × 1900 + 1 × 100 = 3900 ms."},{"prompt":"A service calls a dependency with a **1300 ms** timeout, retries **2** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["2600 ms","3900 ms","5200 ms","1300 ms"],"answer":1,"explanation":"(2 + 1) × 1300 + 2 × 0 = 3900 ms."},{"prompt":"A service calls a dependency with a **1000 ms** timeout, retries **3** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["3000 ms","4300 ms","5300 ms","1000 ms"],"answer":1,"explanation":"(3 + 1) × 1000 + 3 × 100 = 4300 ms."},{"prompt":"A service calls a dependency with a **1600 ms** timeout, retries **2** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["6800 ms","3200 ms","1600 ms","5200 ms"],"answer":3,"explanation":"(2 + 1) × 1600 + 2 × 200 = 5200 ms."}]
---
# Design Drill: Timeout budgets #28

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
