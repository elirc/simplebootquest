---
slug: "sd09-chat-4"
title: "Design Drill: Real-time connections #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **280,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["1","6","2"],"answer":0},{"prompt":"A chat app has **900,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["8","18","9","180"],"answer":2},{"prompt":"A chat app has **390,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["4","2","8","1"],"answer":1},{"prompt":"A chat app has **310,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["10","9","31","20"],"answer":0},{"prompt":"A chat app has **820,000 users**. At peak, **10%** are online, each holding one WebSocket. One server holds **100,000** connections. How many servers do you need (no headroom)?","options":["1","2","9"],"answer":0}]
---
# Design Drill: Real-time connections #4

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
