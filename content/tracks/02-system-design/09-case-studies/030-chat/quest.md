---
slug: "sd-case-chat"
title: "Case Study: Real-Time Chat"
type: "design"
xp: 60
hints: ["What happens to a message published while a client is reconnecting?"]
rubric: ["States functional and non-functional requirements, with rough numbers", "Includes a high-level diagram or component list showing how requests flow", "Defines the data model (tables or collections, with key fields and indexes)", "Describes the API endpoints or interfaces between components", "Identifies the main bottleneck or risk and how the design handles it", "Names at least two trade-offs or rejected alternatives", "Explains how messages reach clients connected to different server instances (pub/sub)"]
minWords: 150
---
# Case Study: Real-Time Chat

Add team chat to your capstone: channels within an organisation, messages with text and mentions, **real-time delivery**, typing indicators, online presence, unread counts, and message history with infinite scroll.

Assume 20k concurrent connected users at peak, with 500 messages/second. Design the system. The tricky parts are fan-out to connected clients across many server instances, ordering, delivery while offline, and unread counts.
