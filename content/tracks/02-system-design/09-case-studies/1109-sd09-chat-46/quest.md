---
slug: "sd09-chat-46"
title: "Design Drill: Real-time connections #46"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **930,000 users**. At peak, **10%** are online, each holding one WebSocket. One server holds **100,000** connections. How many servers do you need (no headroom)?","options":["1","2","10"],"answer":0},{"prompt":"A chat app has **610,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["4","13","8","3"],"answer":0},{"prompt":"A chat app has **940,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **100,000** connections. How many servers do you need (no headroom)?","options":["2","1","10"],"answer":1},{"prompt":"A chat app has **970,000 users**. At peak, **20%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["40","19","97","20"],"answer":3},{"prompt":"A chat app has **630,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["2","3","6","126"],"answer":1}]
---
# Design Drill: Real-time connections #46

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
