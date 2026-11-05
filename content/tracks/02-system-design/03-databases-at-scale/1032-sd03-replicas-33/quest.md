---
slug: "sd03-replicas-33"
title: "Design Drill: How many read replicas? #33"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **7000 reads/s**. All reads can go to replicas. One replica handles **1500 reads/s**. How many replicas do you need (no headroom)?","options":["5","7","4","3"],"answer":0},{"prompt":"You have **28,000 reads/s**. All reads can go to replicas. One replica handles **5000 reads/s**. How many replicas do you need (no headroom)?","options":["6","3","8","5"],"answer":0},{"prompt":"You have **17,000 reads/s**. All reads can go to replicas. One replica handles **1500 reads/s**. How many replicas do you need (no headroom)?","options":["14","12","6","11"],"answer":1},{"prompt":"You have **28,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **4000 reads/s**. How many replicas do you need (no headroom)?","options":["5","7","8","6"],"answer":3},{"prompt":"You have **25,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **2500 reads/s**. How many replicas do you need (no headroom)?","options":["5","10","8","7"],"answer":2}]
---
# Design Drill: How many read replicas? #33

Each replica serves reads (and still applies every write). Replicas needed ≈ read load ÷ capacity per node. Keep a little headroom, and remember that replicas don't help write load.
