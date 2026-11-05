---
slug: "sd09-chat-10"
title: "Design Drill: Real-time connections #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **220,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["44","2","3","6"],"answer":2},{"prompt":"A chat app has **320,000 users**. At peak, **10%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["4","1","13","2"],"answer":3},{"prompt":"A chat app has **90,000 users**. At peak, **20%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["1","4","2"],"answer":0},{"prompt":"A chat app has **450,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["2","1","4","9"],"answer":0},{"prompt":"A chat app has **470,000 users**. At peak, **20%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["10","47","9","20"],"answer":0}]
---
# Design Drill: Real-time connections #10

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
