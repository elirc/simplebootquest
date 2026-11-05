---
slug: "sd09-chat-7"
title: "Design Drill: Real-time connections #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **90,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["9","2","4","1"],"answer":1},{"prompt":"A chat app has **760,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["2","4","76","1"],"answer":0},{"prompt":"A chat app has **660,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **100,000** connections. How many servers do you need (no headroom)?","options":["2","7","1"],"answer":2},{"prompt":"A chat app has **680,000 users**. At peak, **20%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["14","28","13","68"],"answer":0},{"prompt":"A chat app has **130,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["1","2","13","4"],"answer":1}]
---
# Design Drill: Real-time connections #7

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
