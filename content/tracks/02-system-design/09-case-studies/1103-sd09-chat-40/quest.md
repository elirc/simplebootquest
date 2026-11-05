---
slug: "sd09-chat-40"
title: "Design Drill: Real-time connections #40"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **340,000 users**. At peak, **20%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["3","2","14","6"],"answer":0},{"prompt":"A chat app has **250,000 users**. At peak, **10%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["1","5","2"],"answer":0},{"prompt":"A chat app has **200,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["4","1","2"],"answer":1},{"prompt":"A chat app has **430,000 users**. At peak, **20%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["17","86","36","18"],"answer":3},{"prompt":"A chat app has **750,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["44","150","90","45"],"answer":3}]
---
# Design Drill: Real-time connections #40

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
