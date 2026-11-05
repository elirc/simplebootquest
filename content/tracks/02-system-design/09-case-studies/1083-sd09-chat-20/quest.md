---
slug: "sd09-chat-20"
title: "Design Drill: Real-time connections #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **420,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["9","1","2"],"answer":1},{"prompt":"A chat app has **860,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["12","13","26","86"],"answer":1},{"prompt":"A chat app has **990,000 users**. At peak, **10%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["198","19","40","20"],"answer":3},{"prompt":"A chat app has **960,000 users**. At peak, **10%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["8","39","3","4"],"answer":3},{"prompt":"A chat app has **820,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["82","26","12","13"],"answer":3}]
---
# Design Drill: Real-time connections #20

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
