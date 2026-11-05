---
slug: "sd09-chat-52"
title: "Design Drill: Real-time connections #52"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **720,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["4","15","5","10"],"answer":2},{"prompt":"A chat app has **840,000 users**. At peak, **20%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["16","17","84","34"],"answer":1},{"prompt":"A chat app has **840,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["51","50","168","102"],"answer":0},{"prompt":"A chat app has **850,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["51","50","170","102"],"answer":0},{"prompt":"A chat app has **250,000 users**. At peak, **20%** are online, each holding one WebSocket. One server holds **100,000** connections. How many servers do you need (no headroom)?","options":["1","3","2"],"answer":0}]
---
# Design Drill: Real-time connections #52

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
