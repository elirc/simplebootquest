---
slug: "sd09-chat-57"
title: "Design Drill: Real-time connections #57"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **880,000 users**. At peak, **10%** are online, each holding one WebSocket. One server holds **100,000** connections. How many servers do you need (no headroom)?","options":["1","9","2"],"answer":0},{"prompt":"A chat app has **660,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["7","27","16","8"],"answer":3},{"prompt":"A chat app has **170,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["6","7","3","2"],"answer":2},{"prompt":"A chat app has **980,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **100,000** connections. How many servers do you need (no headroom)?","options":["1","2","10"],"answer":0},{"prompt":"A chat app has **840,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **100,000** connections. How many servers do you need (no headroom)?","options":["9","1","2"],"answer":1}]
---
# Design Drill: Real-time connections #57

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
