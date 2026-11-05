---
slug: "sd09-chat-48"
title: "Design Drill: Real-time connections #48"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **1 million users**. At peak, **10%** are online, each holding one WebSocket. One server holds **100,000** connections. How many servers do you need (no headroom)?","options":["2","10","1"],"answer":2},{"prompt":"A chat app has **60,000 users**. At peak, **10%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["1","2","3"],"answer":0},{"prompt":"A chat app has **420,000 users**. At peak, **10%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["1","2","17","4"],"answer":1},{"prompt":"A chat app has **370,000 users**. At peak, **20%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["14","30","15","74"],"answer":2},{"prompt":"A chat app has **260,000 users**. At peak, **20%** are online, each holding one WebSocket. One server holds **100,000** connections. How many servers do you need (no headroom)?","options":["3","2","1"],"answer":2}]
---
# Design Drill: Real-time connections #48

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
