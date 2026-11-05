---
slug: "sd09-chat-50"
title: "Design Drill: Real-time connections #50"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **100,000 users**. At peak, **20%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["4","1","2"],"answer":1},{"prompt":"A chat app has **410,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["3","41","2","6"],"answer":0},{"prompt":"A chat app has **200,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["8","2","1"],"answer":2},{"prompt":"A chat app has **960,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["1","39","2"],"answer":0},{"prompt":"A chat app has **120,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["4","24","3","8"],"answer":0}]
---
# Design Drill: Real-time connections #50

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
