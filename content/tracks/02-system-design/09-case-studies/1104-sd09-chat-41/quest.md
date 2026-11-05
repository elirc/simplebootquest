---
slug: "sd09-chat-41"
title: "Design Drill: Real-time connections #41"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **980,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["30","29","196","60"],"answer":0},{"prompt":"A chat app has **480,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **100,000** connections. How many servers do you need (no headroom)?","options":["2","5","1"],"answer":2},{"prompt":"A chat app has **260,000 users**. At peak, **10%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["26","2","6","3"],"answer":3},{"prompt":"A chat app has **620,000 users**. At peak, **20%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["12","62","26","13"],"answer":3},{"prompt":"A chat app has **740,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["23","46","22","148"],"answer":0}]
---
# Design Drill: Real-time connections #41

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
