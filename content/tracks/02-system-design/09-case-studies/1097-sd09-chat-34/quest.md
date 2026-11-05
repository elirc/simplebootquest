---
slug: "sd09-chat-34"
title: "Design Drill: Real-time connections #34"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **900,000 users**. At peak, **20%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["7","16","36","8"],"answer":3},{"prompt":"A chat app has **810,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["25","50","24","81"],"answer":0},{"prompt":"A chat app has **720,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["29","2","1"],"answer":2},{"prompt":"A chat app has **660,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["80","132","39","40"],"answer":3},{"prompt":"A chat app has **700,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["42","140","21","20"],"answer":2}]
---
# Design Drill: Real-time connections #34

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
