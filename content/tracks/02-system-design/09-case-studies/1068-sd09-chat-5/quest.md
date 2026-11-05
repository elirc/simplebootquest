---
slug: "sd09-chat-5"
title: "Design Drill: Real-time connections #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **530,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["22","2","4","1"],"answer":1},{"prompt":"A chat app has **790,000 users**. At peak, **10%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["3","4","8","32"],"answer":1},{"prompt":"A chat app has **480,000 users**. At peak, **20%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["1","10","2","4"],"answer":2},{"prompt":"A chat app has **860,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["35","1","2"],"answer":1},{"prompt":"A chat app has **780,000 users**. At peak, **10%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["2","16","4","1"],"answer":0}]
---
# Design Drill: Real-time connections #5

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
