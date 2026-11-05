---
slug: "sd09-chat-37"
title: "Design Drill: Real-time connections #37"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **530,000 users**. At peak, **10%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["11","106","10","22"],"answer":0},{"prompt":"A chat app has **910,000 users**. At peak, **20%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["3","4","19","8"],"answer":1},{"prompt":"A chat app has **370,000 users**. At peak, **20%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["1","8","4","2"],"answer":3},{"prompt":"A chat app has **350,000 users**. At peak, **20%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["7","6","14","35"],"answer":0},{"prompt":"A chat app has **820,000 users**. At peak, **20%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["82","16","34","17"],"answer":3}]
---
# Design Drill: Real-time connections #37

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
