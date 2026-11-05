---
slug: "sd09-chat-32"
title: "Design Drill: Real-time connections #32"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **910,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["2","19","1"],"answer":2},{"prompt":"A chat app has **480,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["20","1","2"],"answer":1},{"prompt":"A chat app has **600,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["6","3","2","120"],"answer":1},{"prompt":"A chat app has **940,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["38","11","24","12"],"answer":3},{"prompt":"A chat app has **170,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["34","1","2"],"answer":1}]
---
# Design Drill: Real-time connections #32

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
