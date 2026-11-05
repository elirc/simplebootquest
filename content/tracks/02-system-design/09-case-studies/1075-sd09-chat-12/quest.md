---
slug: "sd09-chat-12"
title: "Design Drill: Real-time connections #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **620,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["62","38","18","19"],"answer":3},{"prompt":"A chat app has **170,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["1","2","17"],"answer":0},{"prompt":"A chat app has **410,000 users**. At peak, **10%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["4","41","10","5"],"answer":3},{"prompt":"A chat app has **540,000 users**. At peak, **20%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["5","22","4","10"],"answer":0},{"prompt":"A chat app has **500,000 users**. At peak, **10%** are online, each holding one WebSocket. One server holds **100,000** connections. How many servers do you need (no headroom)?","options":["1","5","2"],"answer":0}]
---
# Design Drill: Real-time connections #12

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
