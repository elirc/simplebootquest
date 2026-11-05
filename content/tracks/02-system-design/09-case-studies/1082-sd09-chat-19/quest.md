---
slug: "sd09-chat-19"
title: "Design Drill: Real-time connections #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **420,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["7","14","42","6"],"answer":0},{"prompt":"A chat app has **620,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["4","1","2","62"],"answer":2},{"prompt":"A chat app has **860,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["172","9","18","8"],"answer":1},{"prompt":"A chat app has **310,000 users**. At peak, **20%** are online, each holding one WebSocket. One server holds **100,000** connections. How many servers do you need (no headroom)?","options":["2","1","4"],"answer":1},{"prompt":"A chat app has **970,000 users**. At peak, **10%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["20","10","9","97"],"answer":1}]
---
# Design Drill: Real-time connections #19

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
