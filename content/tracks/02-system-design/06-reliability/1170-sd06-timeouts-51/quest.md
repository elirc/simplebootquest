---
slug: "sd06-timeouts-51"
title: "Design Drill: Timeout budgets #51"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A service calls a dependency with a **800 ms** timeout, retries **2** times, and waits **0 ms** between attempts. What's the worst-case time spent on this call?","options":["2400 ms","3200 ms","800 ms","1600 ms"],"answer":0,"explanation":"(2 + 1) × 800 + 2 × 0 = 2400 ms."},{"prompt":"A service calls a dependency with a **1300 ms** timeout, retries **3** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["5800 ms","1300 ms","7100 ms","3900 ms"],"answer":0,"explanation":"(3 + 1) × 1300 + 3 × 200 = 5800 ms."},{"prompt":"A service calls a dependency with a **800 ms** timeout, retries **2** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["3600 ms","1600 ms","2800 ms","800 ms"],"answer":2,"explanation":"(2 + 1) × 800 + 2 × 200 = 2800 ms."},{"prompt":"A service calls a dependency with a **2500 ms** timeout, retries **2** times, and waits **200 ms** between attempts. What's the worst-case time spent on this call?","options":["7900 ms","10400 ms","2500 ms","5000 ms"],"answer":0,"explanation":"(2 + 1) × 2500 + 2 × 200 = 7900 ms."},{"prompt":"A service calls a dependency with a **900 ms** timeout, retries **1** times, and waits **100 ms** between attempts. What's the worst-case time spent on this call?","options":["900 ms","1900 ms","1800 ms","2800 ms"],"answer":1,"explanation":"(1 + 1) × 900 + 1 × 100 = 1900 ms."}]
---
# Design Drill: Timeout budgets #51

Downstream timeouts must fit inside the caller's timeout. With retries, the worst case is (retries + 1) × timeout (+ backoff). Make it smaller than what the client will wait.
