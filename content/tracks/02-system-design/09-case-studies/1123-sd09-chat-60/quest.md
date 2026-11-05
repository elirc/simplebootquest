---
slug: "sd09-chat-60"
title: "Design Drill: Real-time connections #60"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **300,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["1","2","6"],"answer":0},{"prompt":"A chat app has **630,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["26","1","2"],"answer":1},{"prompt":"A chat app has **540,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["2","11","1"],"answer":2},{"prompt":"A chat app has **580,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["58","4","1","2"],"answer":3},{"prompt":"A chat app has **240,000 users**. At peak, **20%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["24","4","5","10"],"answer":2}]
---
# Design Drill: Real-time connections #60

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
