---
slug: "sd09-chat-35"
title: "Design Drill: Real-time connections #35"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **850,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["3","17","2","6"],"answer":0},{"prompt":"A chat app has **620,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["13","2","1","4"],"answer":1},{"prompt":"A chat app has **90,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["2","3","6","9"],"answer":1},{"prompt":"A chat app has **80,000 users**. At peak, **20%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["4","2","1","8"],"answer":1},{"prompt":"A chat app has **400,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **100,000** connections. How many servers do you need (no headroom)?","options":["1","2","4"],"answer":0}]
---
# Design Drill: Real-time connections #35

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
