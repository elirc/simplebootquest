---
slug: "sd09-chat-38"
title: "Design Drill: Real-time connections #38"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **430,000 users**. At peak, **20%** are online, each holding one WebSocket. One server holds **100,000** connections. How many servers do you need (no headroom)?","options":["2","1","5"],"answer":1},{"prompt":"A chat app has **120,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["24","1","2"],"answer":1},{"prompt":"A chat app has **250,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["8","3","25","4"],"answer":3},{"prompt":"A chat app has **480,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["10","4","2","1"],"answer":2},{"prompt":"A chat app has **1 million users**. At peak, **20%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["20","8","4","3"],"answer":2}]
---
# Design Drill: Real-time connections #38

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
