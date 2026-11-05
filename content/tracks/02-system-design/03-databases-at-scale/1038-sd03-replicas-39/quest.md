---
slug: "sd03-replicas-39"
title: "Design Drill: How many read replicas? #39"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **23,000 reads/s**. All reads can go to replicas. One replica handles **5000 reads/s**. How many replicas do you need (no headroom)?","options":["3","5","7","4"],"answer":1},{"prompt":"You have **33,000 reads/s**. All reads can go to replicas. One replica handles **2000 reads/s**. How many replicas do you need (no headroom)?","options":["16","19","9","17"],"answer":3},{"prompt":"You have **37,000 reads/s**. All reads can go to replicas. One replica handles **1500 reads/s**. How many replicas do you need (no headroom)?","options":["13","25","27","24"],"answer":1},{"prompt":"You have **30,000 reads/s**. All reads can go to replicas. One replica handles **4000 reads/s**. How many replicas do you need (no headroom)?","options":["8","7","10","4"],"answer":0},{"prompt":"You have **39,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **5000 reads/s**. How many replicas do you need (no headroom)?","options":["7","6","9","8"],"answer":0}]
---
# Design Drill: How many read replicas? #39

Each replica serves reads (and still applies every write). Replicas needed ≈ read load ÷ capacity per node. Keep a little headroom, and remember that replicas don't help write load.
