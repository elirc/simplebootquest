---
slug: "sd09-chat-36"
title: "Design Drill: Real-time connections #36"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **480,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["1","2","10"],"answer":0},{"prompt":"A chat app has **540,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **100,000** connections. How many servers do you need (no headroom)?","options":["1","6","2"],"answer":0},{"prompt":"A chat app has **450,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["1","2","45"],"answer":0},{"prompt":"A chat app has **830,000 users**. At peak, **10%** are online, each holding one WebSocket. One server holds **100,000** connections. How many servers do you need (no headroom)?","options":["9","2","1"],"answer":2},{"prompt":"A chat app has **240,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["7","8","24","16"],"answer":1}]
---
# Design Drill: Real-time connections #36

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
