---
slug: "sd09-chat-24"
title: "Design Drill: Real-time connections #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **920,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["56","27","28","184"],"answer":2},{"prompt":"A chat app has **160,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["1","2","4"],"answer":0},{"prompt":"A chat app has **390,000 users**. At peak, **2%** are online, each holding one WebSocket. One server holds **100,000** connections. How many servers do you need (no headroom)?","options":["2","1","4"],"answer":1},{"prompt":"A chat app has **460,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["6","10","2","3"],"answer":3},{"prompt":"A chat app has **880,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["5","12","18","6"],"answer":3}]
---
# Design Drill: Real-time connections #24

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
