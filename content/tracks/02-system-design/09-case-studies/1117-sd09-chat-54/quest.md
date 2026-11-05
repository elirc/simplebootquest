---
slug: "sd09-chat-54"
title: "Design Drill: Real-time connections #54"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **810,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["49","98","48","162"],"answer":0},{"prompt":"A chat app has **660,000 users**. At peak, **20%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["27","12","5","6"],"answer":3},{"prompt":"A chat app has **580,000 users**. At peak, **15%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["4","24","3","8"],"answer":0},{"prompt":"A chat app has **790,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["3","8","4","79"],"answer":2},{"prompt":"A chat app has **820,000 users**. At peak, **20%** are online, each holding one WebSocket. One server holds **5000** connections. How many servers do you need (no headroom)?","options":["66","164","32","33"],"answer":3}]
---
# Design Drill: Real-time connections #54

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
