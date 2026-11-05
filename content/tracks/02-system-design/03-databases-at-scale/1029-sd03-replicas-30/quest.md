---
slug: "sd03-replicas-30"
title: "Design Drill: How many read replicas? #30"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **8000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **2000 reads/s**. How many replicas do you need (no headroom)?","options":["6","4","2","3"],"answer":1},{"prompt":"You have **45,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **2500 reads/s**. How many replicas do you need (no headroom)?","options":["18","14","17","15"],"answer":3},{"prompt":"You have **11,000 reads/s**. All reads can go to replicas. One replica handles **4000 reads/s**. How many replicas do you need (no headroom)?","options":["5","2","3"],"answer":2},{"prompt":"You have **19,000 reads/s**. All reads can go to replicas. One replica handles **2000 reads/s**. How many replicas do you need (no headroom)?","options":["5","10","9","12"],"answer":1},{"prompt":"You have **20,000 reads/s**. All reads can go to replicas. One replica handles **2000 reads/s**. How many replicas do you need (no headroom)?","options":["5","10","9","12"],"answer":1}]
---
# Design Drill: How many read replicas? #30

Each replica serves reads (and still applies every write). Replicas needed ≈ read load ÷ capacity per node. Keep a little headroom, and remember that replicas don't help write load.
