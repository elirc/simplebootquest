---
slug: "sd09-chat-58"
title: "Design Drill: Real-time connections #58"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **750,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["1","15","2"],"answer":0},{"prompt":"A chat app has **340,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **100,000** connections. How many servers do you need (no headroom)?","options":["4","1","2"],"answer":2},{"prompt":"A chat app has **770,000 users**. At peak, **10%** are online, each holding one WebSocket. One server holds **100,000** connections. How many servers do you need (no headroom)?","options":["2","8","1"],"answer":2},{"prompt":"A chat app has **350,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["1","7","2"],"answer":0},{"prompt":"A chat app has **700,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["42","140","41","84"],"answer":0}]
---
# Design Drill: Real-time connections #58

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
