---
slug: "sd03-replicas-28"
title: "Design Drill: How many read replicas? #28"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **18,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **5000 reads/s**. How many replicas do you need (no headroom)?","options":["2","4","5","3"],"answer":3},{"prompt":"You have **37,000 reads/s**. All reads can go to replicas. One replica handles **2000 reads/s**. How many replicas do you need (no headroom)?","options":["21","10","18","19"],"answer":3},{"prompt":"You have **60,000 reads/s**. All reads can go to replicas. One replica handles **5000 reads/s**. How many replicas do you need (no headroom)?","options":["11","12","6","14"],"answer":1},{"prompt":"You have **52,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **4000 reads/s**. How many replicas do you need (no headroom)?","options":["11","13","7","10"],"answer":0},{"prompt":"You have **27,000 reads/s**. All reads can go to replicas. One replica handles **5000 reads/s**. How many replicas do you need (no headroom)?","options":["5","6","8","3"],"answer":1}]
---
# Design Drill: How many read replicas? #28

Each replica serves reads (and still applies every write). Replicas needed ≈ read load ÷ capacity per node. Keep a little headroom, and remember that replicas don't help write load.
