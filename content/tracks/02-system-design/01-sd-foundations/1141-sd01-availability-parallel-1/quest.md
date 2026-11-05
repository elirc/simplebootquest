---
slug: "sd01-availability-parallel-1"
title: "Design Drill: Redundancy in parallel #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You run **3 independent replicas**, each **99.5%** available. A request succeeds if at least one is up. What is the availability?","options":["99.83%","98.51%","99.5%","100%"],"answer":3,"explanation":"1 − (1 − 0.995)^3 = 100%."},{"prompt":"You run **3 independent replicas**, each **99%** available. A request succeeds if at least one is up. What is the availability?","options":["97.03%","100%","99%","99.67%"],"answer":1,"explanation":"1 − (1 − 0.99)^3 = 100%."},{"prompt":"You run **3 independent replicas**, each **90%** available. A request succeeds if at least one is up. What is the availability?","options":["99.9%","100%","72.9%","90%"],"answer":0,"explanation":"1 − (1 − 0.9)^3 = 99.9%."},{"prompt":"You run **2 independent replicas**, each **99%** available. A request succeeds if at least one is up. What is the availability?","options":["99.99%","98.01%","99%","100%"],"answer":0,"explanation":"1 − (1 − 0.99)^2 = 99.99%."},{"prompt":"You run **2 independent replicas**, each **99.5%** available. A request succeeds if at least one is up. What is the availability?","options":["99%","100%","99.75%","99.5%"],"answer":1,"explanation":"1 − (1 − 0.995)^2 = 100%."}]
---
# Design Drill: Redundancy in parallel #1

With N independent replicas, all of them are down only (1 − a)^N of the time, so availability = 1 − (1 − a)^N. That assumes **independent** failures, which a shared region or bad deploy breaks.
