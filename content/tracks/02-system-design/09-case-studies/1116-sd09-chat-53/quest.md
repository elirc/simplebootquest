---
slug: "sd09-chat-53"
title: "Design Drill: Real-time connections #53"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **100,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["3","6","20","2"],"answer":0},{"prompt":"A chat app has **940,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["28","29","188","58"],"answer":1},{"prompt":"A chat app has **70,000 users**. At peak, **20%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["2","7","1","4"],"answer":0},{"prompt":"A chat app has **120,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["1","5","2","4"],"answer":2},{"prompt":"A chat app has **610,000 users**. At peak, **10%** are online, each holding one WebSocket. One server holds **100,000** connections. How many servers do you need (no headroom)?","options":["2","7","1"],"answer":2}]
---
# Design Drill: Real-time connections #53

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
