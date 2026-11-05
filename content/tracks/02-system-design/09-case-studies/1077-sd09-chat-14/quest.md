---
slug: "sd09-chat-14"
title: "Design Drill: Real-time connections #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **480,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["10","96","5","4"],"answer":2},{"prompt":"A chat app has **630,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["1","13","2"],"answer":0},{"prompt":"A chat app has **600,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **100,000** connections. How many servers do you need (no headroom)?","options":["6","4","2","1"],"answer":2},{"prompt":"A chat app has **450,000 users**. At peak, **20%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["36","18","90","17"],"answer":1},{"prompt":"A chat app has **690,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["14","1","2"],"answer":1}]
---
# Design Drill: Real-time connections #14

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
