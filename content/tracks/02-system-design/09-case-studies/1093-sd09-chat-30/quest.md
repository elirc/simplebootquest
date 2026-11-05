---
slug: "sd09-chat-30"
title: "Design Drill: Real-time connections #30"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **510,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["11","4","8","3"],"answer":1},{"prompt":"A chat app has **260,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["1","2","6"],"answer":0},{"prompt":"A chat app has **1 million users**. At peak, **30%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["200","59","60","120"],"answer":2},{"prompt":"A chat app has **650,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["19","20","40","65"],"answer":1},{"prompt":"A chat app has **440,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["5","88","10","4"],"answer":0}]
---
# Design Drill: Real-time connections #30

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
