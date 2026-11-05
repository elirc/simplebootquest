---
slug: "sd09-chat-25"
title: "Design Drill: Real-time connections #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **530,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["64","106","31","32"],"answer":3},{"prompt":"A chat app has **890,000 users**. At peak, **20%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["8","36","7","16"],"answer":0},{"prompt":"A chat app has **840,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **100,000** connections. How many servers do you need (no headroom)?","options":["6","2","3","9"],"answer":2},{"prompt":"A chat app has **960,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["12","6","5","20"],"answer":1},{"prompt":"A chat app has **250,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["2","25","1"],"answer":2}]
---
# Design Drill: Real-time connections #25

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
