---
slug: "sd09-chat-1"
title: "Design Drill: Real-time connections #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **130,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["1","2","3"],"answer":0},{"prompt":"A chat app has **330,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["1","7","2"],"answer":0},{"prompt":"A chat app has **320,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **100,000** connections. How many servers do you need (no headroom)?","options":["4","1","2"],"answer":1},{"prompt":"A chat app has **360,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["12","36","5","6"],"answer":3},{"prompt":"A chat app has **990,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["120","60","198","59"],"answer":1}]
---
# Design Drill: Real-time connections #1

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
