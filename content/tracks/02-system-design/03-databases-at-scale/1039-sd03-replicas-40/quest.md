---
slug: "sd03-replicas-40"
title: "Design Drill: How many read replicas? #40"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **22,000 reads/s**. All reads can go to replicas. One replica handles **4000 reads/s**. How many replicas do you need (no headroom)?","options":["8","3","5","6"],"answer":3},{"prompt":"You have **32,000 reads/s**. All reads can go to replicas. One replica handles **1500 reads/s**. How many replicas do you need (no headroom)?","options":["11","22","21","24"],"answer":1},{"prompt":"You have **30,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **4000 reads/s**. How many replicas do you need (no headroom)?","options":["4","8","5","6"],"answer":3},{"prompt":"You have **15,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **4000 reads/s**. How many replicas do you need (no headroom)?","options":["3","4","5","2"],"answer":0},{"prompt":"You have **4000 reads/s**. All reads can go to replicas. One replica handles **2000 reads/s**. How many replicas do you need (no headroom)?","options":["2","4","1"],"answer":0}]
---
# Design Drill: How many read replicas? #40

Each replica serves reads (and still applies every write). Replicas needed ≈ read load ÷ capacity per node. Keep a little headroom, and remember that replicas don't help write load.
