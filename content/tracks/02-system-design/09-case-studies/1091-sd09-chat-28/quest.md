---
slug: "sd09-chat-28"
title: "Design Drill: Real-time connections #28"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **350,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **100,000** connections. How many servers do you need (no headroom)?","options":["2","1","4"],"answer":1},{"prompt":"A chat app has **980,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **100,000** connections. How many servers do you need (no headroom)?","options":["10","2","1"],"answer":2},{"prompt":"A chat app has **800,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["80","24","23","48"],"answer":1},{"prompt":"A chat app has **730,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **100,000** connections. How many servers do you need (no headroom)?","options":["2","1","8"],"answer":1},{"prompt":"A chat app has **590,000 users**. At peak, **10%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["6","59","5","12"],"answer":0}]
---
# Design Drill: Real-time connections #28

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
