---
slug: "sd03-replicas-20"
title: "Design Drill: How many read replicas? #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **12,000 reads/s**. All reads can go to replicas. One replica handles **5000 reads/s**. How many replicas do you need (no headroom)?","options":["2","3","5"],"answer":1},{"prompt":"You have **48,000 reads/s**. All reads can go to replicas. One replica handles **5000 reads/s**. How many replicas do you need (no headroom)?","options":["9","12","5","10"],"answer":3},{"prompt":"You have **57,000 reads/s**. All reads can go to replicas. One replica handles **2500 reads/s**. How many replicas do you need (no headroom)?","options":["25","12","23","22"],"answer":2},{"prompt":"You have **32,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **1500 reads/s**. How many replicas do you need (no headroom)?","options":["20","17","18","22"],"answer":2},{"prompt":"You have **9000 reads/s**. All reads can go to replicas. One replica handles **1500 reads/s**. How many replicas do you need (no headroom)?","options":["3","8","5","6"],"answer":3}]
---
# Design Drill: How many read replicas? #20

Each replica serves reads (and still applies every write). Replicas needed ≈ read load ÷ capacity per node. Keep a little headroom, and remember that replicas don't help write load.
