---
slug: "sd09-chat-13"
title: "Design Drill: Real-time connections #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **410,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["9","2","1"],"answer":2},{"prompt":"A chat app has **280,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["4","12","1","2"],"answer":3},{"prompt":"A chat app has **490,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["49","15","30","14"],"answer":1},{"prompt":"A chat app has **810,000 users**. At peak, **20%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["6","33","7","14"],"answer":2},{"prompt":"A chat app has **630,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["38","18","63","19"],"answer":3}]
---
# Design Drill: Real-time connections #13

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
