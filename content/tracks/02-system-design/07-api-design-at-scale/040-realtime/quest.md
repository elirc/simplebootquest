---
slug: "sd-realtime"
title: "Real-Time Updates: Polling, SSE & WebSockets"
type: "quiz"
xp: 15
resources: [{"title": "MDN: Server-sent events", "url": "https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events"}]
questions: [{"prompt": "Which technique fits streaming notifications from server to browser simply?", "options": ["WebSockets only", "Server-Sent Events", "FTP"], "answer": 1}, {"prompt": "What does a collaborative editor most likely need?", "options": ["Polling every minute", "WebSockets (bidirectional, low latency)", "Email"], "answer": 1}, {"prompt": "A user on instance A must get an event created on instance B. What do you need?", "options": ["A bigger instance", "Pub/sub that broadcasts events to all instances", "Sticky sessions only"], "answer": 1}, {"prompt": "What is the main downside of polling every 2 seconds?", "options": ["It doesn't work behind proxies", "Lots of wasted requests, and updates still lag by up to the interval", "It needs WebSockets"], "answer": 1}, {"prompt": "Why do persistent connections change capacity planning?", "options": ["They use no resources", "Every connected (even idle) user holds an open connection and memory on a server", "They are cached"], "answer": 1}]
---
# Real-Time Updates: Polling, SSE & WebSockets

How does the browser learn about new data?

| Technique | How | Good for | Costs |
|-----------|-----|----------|-------|
| **Polling** | `GET` every N seconds | Simple dashboards, low frequency | Wasted requests, delay up to N s |
| **Long polling** | The server holds the request open until there's data | Older environments | Awkward to implement |
| **Server-Sent Events (SSE)** | One long-lived HTTP response streaming events | Notifications, live feeds, progress, AI token streaming | Server → client only |
| **WebSockets** | A bidirectional persistent connection | Chat, multiplayer, collaborative editing | More complex. Needs sticky routing or a pub/sub fan-out |

### Scaling real-time

With several instances, a user connected to instance A must receive an event produced on instance B. Use **pub/sub** (Redis pub/sub, Postgres `LISTEN/NOTIFY`, or a managed service like Pusher or Ably) to broadcast events to every instance, and each instance forwards them to its own connected clients.

Persistent connections also change capacity planning: 50k connected users means 50k open sockets, even if they're idle. Many teams start with polling or SSE and only adopt WebSockets when they need two-way, low-latency messaging.
