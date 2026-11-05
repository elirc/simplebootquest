---
slug: "sd09-chat-22"
title: "Design Drill: Real-time connections #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **160,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["2","4","1"],"answer":2},{"prompt":"A chat app has **890,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["2","3","18","6"],"answer":1},{"prompt":"A chat app has **220,000 users**. At peak, **10%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["4","10","44","5"],"answer":3},{"prompt":"A chat app has **90,000 users**. At peak, **20%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["2","4","1","9"],"answer":0},{"prompt":"A chat app has **730,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["44","21","73","22"],"answer":3}]
---
# Design Drill: Real-time connections #22

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
