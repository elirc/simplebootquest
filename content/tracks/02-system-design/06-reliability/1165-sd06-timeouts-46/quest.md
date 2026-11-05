---
slug: "sd06-timeouts-46"
title: "Design Drill: Timeout budgets #46"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **1700 ms** timeout, retries **3** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["1700 ms","7100 ms","8800 ms","5100 ms"],"answer":1,"explanation":"(3 + 1) × 1700 + 3 × 100 = 7100 ms."},{"prompt":"A service calls a dependency with a **2600 ms** timeout, retries **1** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["5200 ms","5400 ms","2600 ms","8000 ms"],"answer":1,"explanation":"(1 + 1) × 2600 + 1 × 200 = 5400 ms."},{"prompt":"A service calls a dependency with a **300 ms** timeout, retries **3** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["900 ms","2100 ms","1800 ms","300 ms"],"answer":2,"explanation":"(3 + 1) × 300 + 3 × 200 = 1800 ms."},{"prompt":"A service calls a dependency with a **2500 ms** timeout, retries **3** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["7500 ms","12800 ms","2500 ms","10300 ms"],"answer":3,"explanation":"(3 + 1) × 2500 + 3 × 100 = 10300 ms."},{"prompt":"A service calls a dependency with a **2200 ms** timeout, retries **2** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["2200 ms","9200 ms","7000 ms","4400 ms"],"answer":2,"explanation":"(2 + 1) × 2200 + 2 × 200 = 7000 ms."}]
---
# Design Drill: Timeout budgets #46

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
