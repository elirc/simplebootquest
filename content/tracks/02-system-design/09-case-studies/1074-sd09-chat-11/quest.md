---
slug: "sd09-chat-11"
title: "Design Drill: Real-time connections #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **230,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["4","10","2","1"],"answer":2},{"prompt":"A chat app has **800,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["10","5","32","4"],"answer":1},{"prompt":"A chat app has **620,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["3","62","4","8"],"answer":2},{"prompt":"A chat app has **570,000 users**. At peak, **10%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["24","11","114","12"],"answer":3},{"prompt":"A chat app has **420,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["12","84","26","13"],"answer":3}]
---
# Design Drill: Real-time connections #11

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
