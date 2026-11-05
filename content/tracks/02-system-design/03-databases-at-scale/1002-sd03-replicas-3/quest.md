---
slug: "sd03-replicas-3"
title: "Design Drill: How many read replicas? #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **5000 reads/s**. All reads can go to replicas. One replica handles **2000 reads/s**. How many replicas do you need (no headroom)?","options":["2","5","3"],"answer":2},{"prompt":"You have **50,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **5000 reads/s**. How many replicas do you need (no headroom)?","options":["5","10","8","7"],"answer":2},{"prompt":"You have **52,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **5000 reads/s**. How many replicas do you need (no headroom)?","options":["8","6","9","11"],"answer":2},{"prompt":"You have **42,000 reads/s**. All reads can go to replicas. One replica handles **2000 reads/s**. How many replicas do you need (no headroom)?","options":["21","11","23","20"],"answer":0},{"prompt":"You have **24,000 reads/s**. All reads can go to replicas. One replica handles **5000 reads/s**. How many replicas do you need (no headroom)?","options":["4","7","5","3"],"answer":2}]
---
# Design Drill: How many read replicas? #3

Each replica serves reads (and still applies every write). Replicas needed ≈ read load ÷ capacity per node. Keep a little headroom, and remember that replicas don't help write load.
