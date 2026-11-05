---
slug: "sd09-chat-21"
title: "Design Drill: Real-time connections #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **240,000 users**. At peak, **10%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["2","6","3","24"],"answer":2},{"prompt":"A chat app has **950,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["4","1","2","95"],"answer":2},{"prompt":"A chat app has **540,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["16","34","17","108"],"answer":2},{"prompt":"A chat app has **110,000 users**. At peak, **10%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["3","1","2"],"answer":1},{"prompt":"A chat app has **910,000 users**. At peak, **10%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["1","2","4","19"],"answer":1}]
---
# Design Drill: Real-time connections #21

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
