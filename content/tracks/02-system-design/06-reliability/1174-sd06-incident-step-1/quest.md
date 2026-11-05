---
slug: "sd06-incident-step-1"
title: "Design Drill: What do you do first? #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**a third-party payment API is down**. What's the first step?","options":["Free space or grow the volume immediately, then find what filled it","Degrade gracefully: queue orders as pending and tell users","Roll back the deploy (or switch off the new feature flag)","Kill or throttle that query, then fix it"],"answer":1},{"prompt":"**the database CPU is at 100% from one runaway report query**. What's the first step?","options":["Kill or throttle that query, then fix it","Free space or grow the volume immediately, then find what filled it","Degrade gracefully: queue orders as pending and tell users","Roll back the deploy (or switch off the new feature flag)"],"answer":0},{"prompt":"**a leaked API key is found in a public repo**. What's the first step?","options":["Kill or throttle that query, then fix it","Degrade gracefully: queue orders as pending and tell users","Revoke and rotate the key immediately","Roll back the deploy (or switch off the new feature flag)"],"answer":2},{"prompt":"**disk is 98% full on the database server**. What's the first step?","options":["Degrade gracefully: queue orders as pending and tell users","Kill or throttle that query, then fix it","Roll back the deploy (or switch off the new feature flag)","Free space or grow the volume immediately, then find what filled it"],"answer":3},{"prompt":"**latency doubled with no deploy, and traffic is up 4×**. What's the first step?","options":["Scale out and enable rate limiting, then investigate the source of the traffic","Kill or throttle that query, then fix it","Roll back the deploy (or switch off the new feature flag)","Degrade gracefully: queue orders as pending and tell users"],"answer":0}]
---
# Design Drill: What do you do first? #1

During an incident: **mitigate first** (roll back, flip a flag, scale up), communicate, *then* find the root cause. Fix forward only when rollback isn't possible.
