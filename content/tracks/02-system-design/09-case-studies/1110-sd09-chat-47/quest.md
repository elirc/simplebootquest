---
slug: "sd09-chat-47"
title: "Design Drill: Real-time connections #47"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **700,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **100,000** connections. How many servers do you need (no headroom)?","options":["7","2","4","1"],"answer":1},{"prompt":"A chat app has **270,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["2","1","6"],"answer":1},{"prompt":"A chat app has **940,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **100,000** connections. How many servers do you need (no headroom)?","options":["3","2","6","10"],"answer":0},{"prompt":"A chat app has **420,000 users**. At peak, **10%** are online, each holding one WebSocket. One server holds **100,000** connections. How many servers do you need (no headroom)?","options":["2","5","1"],"answer":2},{"prompt":"A chat app has **510,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["4","21","8","3"],"answer":0}]
---
# Design Drill: Real-time connections #47

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
