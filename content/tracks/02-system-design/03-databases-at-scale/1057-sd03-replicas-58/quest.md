---
slug: "sd03-replicas-58"
title: "Design Drill: How many read replicas? #58"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **42,000 reads/s**. All reads can go to replicas. One replica handles **4000 reads/s**. How many replicas do you need (no headroom)?","options":["11","6","13","10"],"answer":0},{"prompt":"You have **16,000 reads/s**. All reads can go to replicas. One replica handles **2000 reads/s**. How many replicas do you need (no headroom)?","options":["4","8","7","10"],"answer":1},{"prompt":"You have **43,000 reads/s**. All reads can go to replicas. One replica handles **2500 reads/s**. How many replicas do you need (no headroom)?","options":["17","9","18","20"],"answer":2},{"prompt":"You have **47,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **5000 reads/s**. How many replicas do you need (no headroom)?","options":["7","8","5","10"],"answer":1},{"prompt":"You have **23,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **2500 reads/s**. How many replicas do you need (no headroom)?","options":["10","8","7","5"],"answer":1}]
---
# Design Drill: How many read replicas? #58

Each replica serves reads (and still applies every write). Replicas needed ≈ read load ÷ capacity per node. Keep a little headroom, and remember that replicas don't help write load.
