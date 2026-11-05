---
slug: "sd09-chat-42"
title: "Design Drill: Real-time connections #42"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A chat app has **550,000 users**. At peak, **5%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["2","6","55","3"],"answer":3},{"prompt":"A chat app has **820,000 users**. At peak, **20%** are online, each holding one WebSocket. One server holds **50,000** connections. How many servers do you need (no headroom)?","options":["4","3","17","8"],"answer":0},{"prompt":"A chat app has **670,000 users**. At peak, **30%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["67","20","42","21"],"answer":3},{"prompt":"A chat app has **660,000 users**. At peak, **20%** are online, each holding one WebSocket. One server holds **10,000** connections. How many servers do you need (no headroom)?","options":["66","14","28","13"],"answer":1},{"prompt":"A chat app has **440,000 users**. At peak, **20%** are online, each holding one WebSocket. One server holds **25,000** connections. How many servers do you need (no headroom)?","options":["8","18","4","3"],"answer":2}]
---
# Design Drill: Real-time connections #42

Each connected client holds a WebSocket (or SSE) connection open. Size servers by **concurrent connections** and **messages/s**, not just requests/s.
