---
slug: "sd06-timeouts-26"
title: "Design Drill: Timeout budgets #26"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **2200 ms** timeout, retries **3** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["8800 ms","6600 ms","2200 ms","11000 ms"],"answer":0,"explanation":"(3 + 1) × 2200 + 3 × 0 = 8800 ms."},{"prompt":"A service calls a dependency with a **1300 ms** timeout, retries **2** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["1300 ms","2600 ms","5400 ms","4100 ms"],"answer":3,"explanation":"(2 + 1) × 1300 + 2 × 100 = 4100 ms."},{"prompt":"A service calls a dependency with a **1400 ms** timeout, retries **1** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["2900 ms","4300 ms","2800 ms","1400 ms"],"answer":0,"explanation":"(1 + 1) × 1400 + 1 × 100 = 2900 ms."},{"prompt":"A service calls a dependency with a **2900 ms** timeout, retries **3** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["15100 ms","2900 ms","8700 ms","12200 ms"],"answer":3,"explanation":"(3 + 1) × 2900 + 3 × 200 = 12200 ms."},{"prompt":"A service calls a dependency with a **900 ms** timeout, retries **3** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["3900 ms","4800 ms","900 ms","2700 ms"],"answer":0,"explanation":"(3 + 1) × 900 + 3 × 100 = 3900 ms."}]
---
# Design Drill: Timeout budgets #26

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
