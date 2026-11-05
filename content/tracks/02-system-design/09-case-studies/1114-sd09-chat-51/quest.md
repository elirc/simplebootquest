---
slug: "sd09-chat-51"
title: "Design Drill: Real-time connections #51"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **990,000 users**. At peak, **10%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["9","10","99","20"],"answer":1},{"prompt":"A chat app has **320,000 users**. At peak, **20%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["6","13","3","2"],"answer":2},{"prompt":"A chat app has **460,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["6","19","2","3"],"answer":3},{"prompt":"A chat app has **850,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["8","18","9","170"],"answer":2},{"prompt":"A chat app has **340,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["2","7","1"],"answer":2}]
---
# Design Drill: Real-time connections #51

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
