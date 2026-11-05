---
slug: "sd03-replicas-37"
title: "Design Drill: How many read replicas? #37"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **43,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **2000 reads/s**. How many replicas do you need (no headroom)?","options":["18","20","22","17"],"answer":0},{"prompt":"You have **12,000 reads/s**. All reads can go to replicas. One replica handles **1500 reads/s**. How many replicas do you need (no headroom)?","options":["7","8","10","4"],"answer":1},{"prompt":"You have **45,000 reads/s**. All reads can go to replicas. One replica handles **4000 reads/s**. How many replicas do you need (no headroom)?","options":["14","12","11","6"],"answer":1},{"prompt":"You have **45,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **2000 reads/s**. How many replicas do you need (no headroom)?","options":["17","23","18","20"],"answer":2},{"prompt":"You have **22,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **2500 reads/s**. How many replicas do you need (no headroom)?","options":["7","10","8","9"],"answer":2}]
---
# Design Drill: How many read replicas? #37

Each replica serves reads (and still applies every write). Replicas needed ≈ read load ÷ capacity per node. Keep a little headroom, and remember that replicas don't help write load.
