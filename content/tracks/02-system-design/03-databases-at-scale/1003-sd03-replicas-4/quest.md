---
slug: "sd03-replicas-4"
title: "Design Drill: How many read replicas? #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **58,000 reads/s**. All reads can go to replicas. One replica handles **4000 reads/s**. How many replicas do you need (no headroom)?","options":["14","8","15","17"],"answer":2},{"prompt":"You have **17,000 reads/s**. All reads can go to replicas. One replica handles **5000 reads/s**. How many replicas do you need (no headroom)?","options":["2","4","6","3"],"answer":1},{"prompt":"You have **12,000 reads/s**. All reads can go to replicas. One replica handles **2000 reads/s**. How many replicas do you need (no headroom)?","options":["6","3","5","8"],"answer":0},{"prompt":"You have **20,000 reads/s**. All reads can go to replicas. One replica handles **5000 reads/s**. How many replicas do you need (no headroom)?","options":["4","6","2","3"],"answer":0},{"prompt":"You have **24,000 reads/s**. All reads can go to replicas. One replica handles **1500 reads/s**. How many replicas do you need (no headroom)?","options":["15","8","18","16"],"answer":3}]
---
# Design Drill: How many read replicas? #4

Each replica serves reads (and still applies every write). Replicas needed ≈ read load ÷ capacity per node. Keep a little headroom, and remember that replicas don't help write load.
