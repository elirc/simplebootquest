---
slug: "sd09-chat-44"
title: "Design Drill: Real-time connections #44"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **530,000 users**. At peak, **20%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["53","22","11","10"],"answer":2},{"prompt":"A chat app has **810,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **100,000** connections. How many servers do you need (no headroom)?","options":["2","9","1"],"answer":2},{"prompt":"A chat app has **420,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["17","6","12","5"],"answer":1},{"prompt":"A chat app has **860,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["18","1","2"],"answer":1},{"prompt":"A chat app has **440,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["1","9","2"],"answer":0}]
---
# Design Drill: Real-time connections #44

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
