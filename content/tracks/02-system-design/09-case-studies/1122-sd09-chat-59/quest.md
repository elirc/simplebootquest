---
slug: "sd09-chat-59"
title: "Design Drill: Real-time connections #59"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **1 million users**. At peak, **2%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["40","2","1"],"answer":2},{"prompt":"A chat app has **340,000 users**. At peak, **10%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["7","2","1"],"answer":2},{"prompt":"A chat app has **660,000 users**. At peak, **10%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["14","13","28","132"],"answer":0},{"prompt":"A chat app has **340,000 users**. At peak, **10%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["14","1","2","4"],"answer":2},{"prompt":"A chat app has **800,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["12","80","11","24"],"answer":0}]
---
# Design Drill: Real-time connections #59

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
