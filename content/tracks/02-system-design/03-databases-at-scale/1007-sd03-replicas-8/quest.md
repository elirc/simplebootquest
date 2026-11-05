---
slug: "sd03-replicas-8"
title: "Design Drill: How many read replicas? #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **54,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **2500 reads/s**. How many replicas do you need (no headroom)?","options":["18","17","20","22"],"answer":0},{"prompt":"You have **20,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **4000 reads/s**. How many replicas do you need (no headroom)?","options":["4","3","6","5"],"answer":0},{"prompt":"You have **11,000 reads/s**. All reads can go to replicas. One replica handles **1500 reads/s**. How many replicas do you need (no headroom)?","options":["4","10","7","8"],"answer":3},{"prompt":"You have **28,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **2000 reads/s**. How many replicas do you need (no headroom)?","options":["11","12","14","7"],"answer":1},{"prompt":"You have **7000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **2000 reads/s**. How many replicas do you need (no headroom)?","options":["2","5","3","4"],"answer":2}]
---
# Design Drill: How many read replicas? #8

Each replica serves reads (and still applies every write). Replicas needed ≈ read load ÷ capacity per node. Keep a little headroom, and remember that replicas don't help write load.
