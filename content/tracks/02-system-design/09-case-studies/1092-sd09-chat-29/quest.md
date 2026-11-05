---
slug: "sd09-chat-29"
title: "Design Drill: Real-time connections #29"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **140,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["2","6","1"],"answer":2},{"prompt":"A chat app has **580,000 users**. At peak, **10%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["12","116","11","24"],"answer":0},{"prompt":"A chat app has **230,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["1","23","2"],"answer":0},{"prompt":"A chat app has **780,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["2","1","78","4"],"answer":0},{"prompt":"A chat app has **140,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["2","14","6","3"],"answer":3}]
---
# Design Drill: Real-time connections #29

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
