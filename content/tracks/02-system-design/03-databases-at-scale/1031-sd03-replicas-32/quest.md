---
slug: "sd03-replicas-32"
title: "Design Drill: How many read replicas? #32"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **5000 reads/s**. All reads can go to replicas. One replica handles **4000 reads/s**. How many replicas do you need (no headroom)?","options":["1","4","2"],"answer":2},{"prompt":"You have **47,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **2500 reads/s**. How many replicas do you need (no headroom)?","options":["15","16","19","18"],"answer":1},{"prompt":"You have **12,000 reads/s**. All reads can go to replicas. One replica handles **2500 reads/s**. How many replicas do you need (no headroom)?","options":["7","5","4","3"],"answer":1},{"prompt":"You have **30,000 reads/s**. All reads can go to replicas. One replica handles **2000 reads/s**. How many replicas do you need (no headroom)?","options":["14","15","8","17"],"answer":1},{"prompt":"You have **26,000 reads/s**. All reads can go to replicas. One replica handles **4000 reads/s**. How many replicas do you need (no headroom)?","options":["6","4","9","7"],"answer":3}]
---
# Design Drill: How many read replicas? #32

Each replica serves reads (and still applies every write). Replicas needed ≈ read load ÷ capacity per node. Keep a little headroom, and remember that replicas don't help write load.
