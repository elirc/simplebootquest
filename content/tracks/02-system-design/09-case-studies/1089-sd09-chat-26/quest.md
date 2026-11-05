---
slug: "sd09-chat-26"
title: "Design Drill: Real-time connections #26"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **490,000 users**. At peak, **10%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["98","20","9","10"],"answer":3},{"prompt":"A chat app has **750,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["24","11","75","12"],"answer":3},{"prompt":"A chat app has **100,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["2","20","1"],"answer":2},{"prompt":"A chat app has **120,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["12","2","1"],"answer":2},{"prompt":"A chat app has **550,000 users**. At peak, **20%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["3","2","11","6"],"answer":0}]
---
# Design Drill: Real-time connections #26

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
