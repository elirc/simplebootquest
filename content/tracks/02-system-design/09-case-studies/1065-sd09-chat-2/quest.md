---
slug: "sd09-chat-2"
title: "Design Drill: Real-time connections #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **600,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["1","2","60","4"],"answer":1},{"prompt":"A chat app has **710,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["1","15","2"],"answer":0},{"prompt":"A chat app has **960,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["10","5","4","96"],"answer":1},{"prompt":"A chat app has **460,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["46","14","13","28"],"answer":1},{"prompt":"A chat app has **240,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["3","24","8","4"],"answer":3}]
---
# Design Drill: Real-time connections #2

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
