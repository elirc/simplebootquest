---
slug: "sd09-chat-6"
title: "Design Drill: Real-time connections #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **330,000 users**. At peak, **10%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["6","7","14","66"],"answer":1},{"prompt":"A chat app has **730,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["146","16","7","8"],"answer":3},{"prompt":"A chat app has **490,000 users**. At peak, **10%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["10","2","1"],"answer":2},{"prompt":"A chat app has **400,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["8","4","1","2"],"answer":3},{"prompt":"A chat app has **90,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["2","1","4"],"answer":1}]
---
# Design Drill: Real-time connections #6

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
