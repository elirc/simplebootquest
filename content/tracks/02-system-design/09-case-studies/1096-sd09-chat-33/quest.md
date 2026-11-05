---
slug: "sd09-chat-33"
title: "Design Drill: Real-time connections #33"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **400,000 users**. At peak, **20%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["16","8","40","7"],"answer":1},{"prompt":"A chat app has **730,000 users**. At peak, **10%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["1","2","15","4"],"answer":1},{"prompt":"A chat app has **370,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["2","1","8"],"answer":1},{"prompt":"A chat app has **750,000 users**. At peak, **20%** are online, each holding one WebSocket. One server holds **100,000** connections. How many servers do you need (no headroom)?","options":["2","4","1","8"],"answer":0},{"prompt":"A chat app has **730,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["2","3","15","6"],"answer":1}]
---
# Design Drill: Real-time connections #33

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
