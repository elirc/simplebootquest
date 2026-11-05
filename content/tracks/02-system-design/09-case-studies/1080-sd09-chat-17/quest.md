---
slug: "sd09-chat-17"
title: "Design Drill: Real-time connections #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **830,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **100,000** connections. How many servers do you need (no headroom)?","options":["2","3","9","6"],"answer":1},{"prompt":"A chat app has **850,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["12","6","5","34"],"answer":1},{"prompt":"A chat app has **450,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["1","2","9"],"answer":0},{"prompt":"A chat app has **50,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["5","1","2","4"],"answer":2},{"prompt":"A chat app has **560,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["12","3","4","8"],"answer":2}]
---
# Design Drill: Real-time connections #17

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
