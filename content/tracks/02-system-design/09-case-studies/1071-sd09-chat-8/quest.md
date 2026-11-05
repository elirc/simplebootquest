---
slug: "sd09-chat-8"
title: "Design Drill: Real-time connections #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **290,000 users**. At peak, **20%** are online, each holding one WebSocket. One server holds **100,000** connections. How many servers do you need (no headroom)?","options":["1","3","2"],"answer":0},{"prompt":"A chat app has **230,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["5","1","2"],"answer":1},{"prompt":"A chat app has **440,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["18","1","2"],"answer":1},{"prompt":"A chat app has **950,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **100,000** connections. How many servers do you need (no headroom)?","options":["6","3","2","10"],"answer":1},{"prompt":"A chat app has **960,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["96","4","2","1"],"answer":2}]
---
# Design Drill: Real-time connections #8

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
