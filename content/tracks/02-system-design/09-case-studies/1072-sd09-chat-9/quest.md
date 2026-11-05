---
slug: "sd09-chat-9"
title: "Design Drill: Real-time connections #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **560,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["4","23","2","1"],"answer":2},{"prompt":"A chat app has **510,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["3","6","102","2"],"answer":0},{"prompt":"A chat app has **500,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["30","50","14","15"],"answer":3},{"prompt":"A chat app has **190,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["8","2","1"],"answer":2},{"prompt":"A chat app has **1 million users**. At peak, **15%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["6","3","2","20"],"answer":1}]
---
# Design Drill: Real-time connections #9

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
