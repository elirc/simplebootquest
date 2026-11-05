---
slug: "sd09-chat-45"
title: "Design Drill: Real-time connections #45"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **840,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["4","2","1","84"],"answer":1},{"prompt":"A chat app has **460,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["92","28","27","56"],"answer":1},{"prompt":"A chat app has **1 million users**. At peak, **5%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["9","10","200","20"],"answer":1},{"prompt":"A chat app has **530,000 users**. At peak, **10%** are online, each holding one WebSocket. One server holds **100,000** connections. How many servers do you need (no headroom)?","options":["1","6","2"],"answer":0},{"prompt":"A chat app has **770,000 users**. At peak, **20%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["6","31","7","14"],"answer":2}]
---
# Design Drill: Real-time connections #45

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
