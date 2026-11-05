---
slug: "sd06-timeouts-5"
title: "Design Drill: Timeout budgets #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **1500 ms** timeout, retries **2** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["1500 ms","4500 ms","3000 ms","6000 ms"],"answer":1,"explanation":"(2 + 1) × 1500 + 2 × 0 = 4500 ms."},{"prompt":"A service calls a dependency with a **100 ms** timeout, retries **2** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["700 ms","200 ms","100 ms","800 ms"],"answer":0,"explanation":"(2 + 1) × 100 + 2 × 200 = 700 ms."},{"prompt":"A service calls a dependency with a **2700 ms** timeout, retries **3** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["2700 ms","14100 ms","11400 ms","8100 ms"],"answer":2,"explanation":"(3 + 1) × 2700 + 3 × 200 = 11400 ms."},{"prompt":"A service calls a dependency with a **2600 ms** timeout, retries **2** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["2600 ms","10400 ms","7800 ms","5200 ms"],"answer":2,"explanation":"(2 + 1) × 2600 + 2 × 0 = 7800 ms."},{"prompt":"A service calls a dependency with a **2600 ms** timeout, retries **3** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["2600 ms","7800 ms","11000 ms","13600 ms"],"answer":2,"explanation":"(3 + 1) × 2600 + 3 × 200 = 11000 ms."}]
---
# Design Drill: Timeout budgets #5

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
