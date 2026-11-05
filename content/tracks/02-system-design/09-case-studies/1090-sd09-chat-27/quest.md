---
slug: "sd09-chat-27"
title: "Design Drill: Real-time connections #27"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **470,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **100,000** connections. How many servers do you need (no headroom)?","options":["2","5","1"],"answer":2},{"prompt":"A chat app has **770,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["2","31","1"],"answer":2},{"prompt":"A chat app has **220,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["2","22","1"],"answer":2},{"prompt":"A chat app has **990,000 users**. At peak, **20%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["40","99","19","20"],"answer":3},{"prompt":"A chat app has **630,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["18","19","38","126"],"answer":1}]
---
# Design Drill: Real-time connections #27

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
