---
slug: "sd09-chat-16"
title: "Design Drill: Real-time connections #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **540,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["14","6","7","22"],"answer":2},{"prompt":"A chat app has **920,000 users**. At peak, **20%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["3","8","19","4"],"answer":3},{"prompt":"A chat app has **650,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **100,000** connections. How many servers do you need (no headroom)?","options":["1","2","7"],"answer":0},{"prompt":"A chat app has **650,000 users**. At peak, **20%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["13","6","2","3"],"answer":3},{"prompt":"A chat app has **630,000 users**. At peak, **20%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["6","26","12","5"],"answer":0}]
---
# Design Drill: Real-time connections #16

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
