---
slug: "sd09-chat-3"
title: "Design Drill: Real-time connections #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **570,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["1","23","2"],"answer":0},{"prompt":"A chat app has **540,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["11","2","1","4"],"answer":1},{"prompt":"A chat app has **240,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **100,000** connections. How many servers do you need (no headroom)?","options":["1","2","3"],"answer":0},{"prompt":"A chat app has **760,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["5","4","16","10"],"answer":0},{"prompt":"A chat app has **690,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["138","14","6","7"],"answer":3}]
---
# Design Drill: Real-time connections #3

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
