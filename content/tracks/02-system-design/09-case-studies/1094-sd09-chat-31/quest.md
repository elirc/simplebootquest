---
slug: "sd09-chat-31"
title: "Design Drill: Real-time connections #31"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **30,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["1","6","2"],"answer":0},{"prompt":"A chat app has **870,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["1","2","18"],"answer":0},{"prompt":"A chat app has **700,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **100,000** connections. How many servers do you need (no headroom)?","options":["2","1","7"],"answer":1},{"prompt":"A chat app has **310,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["1","31","2"],"answer":0},{"prompt":"A chat app has **790,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["12","79","11","24"],"answer":0}]
---
# Design Drill: Real-time connections #31

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
