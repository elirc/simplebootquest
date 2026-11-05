---
slug: "sd09-chat-23"
title: "Design Drill: Real-time connections #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **740,000 users**. At peak, **20%** are online, each holding one WebSocket. One server holds **100,000** connections. How many servers do you need (no headroom)?","options":["1","8","2","4"],"answer":2},{"prompt":"A chat app has **270,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["4","11","3","8"],"answer":0},{"prompt":"A chat app has **940,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["8","188","4","3"],"answer":2},{"prompt":"A chat app has **380,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["5","16","4","10"],"answer":0},{"prompt":"A chat app has **230,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["8","23","4","3"],"answer":2}]
---
# Design Drill: Real-time connections #23

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
