---
slug: "sd09-chat-18"
title: "Design Drill: Real-time connections #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **290,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["1","2","6"],"answer":0},{"prompt":"A chat app has **880,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["10","36","22","11"],"answer":3},{"prompt":"A chat app has **720,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **100,000** connections. How many servers do you need (no headroom)?","options":["8","4","2","1"],"answer":2},{"prompt":"A chat app has **110,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["22","4","1","2"],"answer":3},{"prompt":"A chat app has **440,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **100,000** connections. How many servers do you need (no headroom)?","options":["2","5","1"],"answer":2}]
---
# Design Drill: Real-time connections #18

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
