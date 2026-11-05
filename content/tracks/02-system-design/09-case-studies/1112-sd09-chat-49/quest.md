---
slug: "sd09-chat-49"
title: "Design Drill: Real-time connections #49"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **860,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["4","1","2","86"],"answer":2},{"prompt":"A chat app has **850,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["170","8","3","4"],"answer":3},{"prompt":"A chat app has **140,000 users**. At peak, **10%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["28","2","3","6"],"answer":2},{"prompt":"A chat app has **970,000 users**. At peak, **10%** are online, each holding one WebSocket. One server holds **100,000** connections. How many servers do you need (no headroom)?","options":["1","2","10"],"answer":0},{"prompt":"A chat app has **940,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["2","4","94","1"],"answer":0}]
---
# Design Drill: Real-time connections #49

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
