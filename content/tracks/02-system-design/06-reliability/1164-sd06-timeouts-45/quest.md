---
slug: "sd06-timeouts-45"
title: "Design Drill: Timeout budgets #45"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **800 ms** timeout, retries **3** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["3200 ms","4000 ms","800 ms","2400 ms"],"answer":0,"explanation":"(3 + 1) × 800 + 3 × 0 = 3200 ms."},{"prompt":"A service calls a dependency with a **3000 ms** timeout, retries **1** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["6000 ms","3000 ms","9000 ms"],"answer":0,"explanation":"(1 + 1) × 3000 + 1 × 0 = 6000 ms."},{"prompt":"A service calls a dependency with a **500 ms** timeout, retries **3** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["2000 ms","2500 ms","500 ms","1500 ms"],"answer":0,"explanation":"(3 + 1) × 500 + 3 × 0 = 2000 ms."},{"prompt":"A service calls a dependency with a **2900 ms** timeout, retries **2** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["5800 ms","2900 ms","11600 ms","8700 ms"],"answer":3,"explanation":"(2 + 1) × 2900 + 2 × 0 = 8700 ms."},{"prompt":"A service calls a dependency with a **1700 ms** timeout, retries **3** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["1700 ms","5100 ms","9100 ms","7400 ms"],"answer":3,"explanation":"(3 + 1) × 1700 + 3 × 200 = 7400 ms."}]
---
# Design Drill: Timeout budgets #45

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
