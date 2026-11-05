---
slug: "sd09-chat-43"
title: "Design Drill: Real-time connections #43"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **530,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["2","11","1"],"answer":2},{"prompt":"A chat app has **710,000 users**. At peak, **20%** are online, each holding one WebSocket. One server holds **100,000** connections. How many servers do you need (no headroom)?","options":["4","2","8","1"],"answer":1},{"prompt":"A chat app has **700,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **100,000** connections. How many servers do you need (no headroom)?","options":["3","7","2","6"],"answer":0},{"prompt":"A chat app has **860,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["4","1","2","35"],"answer":2},{"prompt":"A chat app has **550,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["4","22","2","1"],"answer":2}]
---
# Design Drill: Real-time connections #43

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
