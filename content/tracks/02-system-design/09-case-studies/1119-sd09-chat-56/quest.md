---
slug: "sd09-chat-56"
title: "Design Drill: Real-time connections #56"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **450,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["1","18","2"],"answer":0},{"prompt":"A chat app has **760,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["2","16","1"],"answer":2},{"prompt":"A chat app has **1 million users**. At peak, **2%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["1","2","20"],"answer":0},{"prompt":"A chat app has **720,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["22","21","44","72"],"answer":0},{"prompt":"A chat app has **190,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["2","1","4"],"answer":0}]
---
# Design Drill: Real-time connections #56

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
