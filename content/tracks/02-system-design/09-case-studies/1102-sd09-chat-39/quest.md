---
slug: "sd09-chat-39"
title: "Design Drill: Real-time connections #39"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **360,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["8","6","3","2"],"answer":2},{"prompt":"A chat app has **940,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["56","57","114","188"],"answer":1},{"prompt":"A chat app has **600,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["12","1","4","2"],"answer":3},{"prompt":"A chat app has **300,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["1","12","2"],"answer":0},{"prompt":"A chat app has **840,000 users**. At peak, **10%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["17","34","16","168"],"answer":0}]
---
# Design Drill: Real-time connections #39

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
