---
slug: "sd09-chat-55"
title: "Design Drill: Real-time connections #55"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **820,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["1","33","2"],"answer":0},{"prompt":"A chat app has **260,000 users**. At peak, **20%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["52","22","11","10"],"answer":2},{"prompt":"A chat app has **460,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["92","1","2","4"],"answer":2},{"prompt":"A chat app has **670,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["2","4","1","27"],"answer":0},{"prompt":"A chat app has **870,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **100,000** connections. How many servers do you need (no headroom)?","options":["2","3","6","9"],"answer":1}]
---
# Design Drill: Real-time connections #55

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
