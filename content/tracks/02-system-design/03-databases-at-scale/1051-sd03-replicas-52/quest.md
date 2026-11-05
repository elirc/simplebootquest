---
slug: "sd03-replicas-52"
title: "Design Drill: How many read replicas? #52"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **27,000 reads/s**. All reads can go to replicas. One replica handles **1500 reads/s**. How many replicas do you need (no headroom)?","options":["17","18","20","9"],"answer":1},{"prompt":"You have **16,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **2000 reads/s**. How many replicas do you need (no headroom)?","options":["7","9","6","8"],"answer":0},{"prompt":"You have **35,000 reads/s**. All reads can go to replicas. One replica handles **2500 reads/s**. How many replicas do you need (no headroom)?","options":["13","14","7","16"],"answer":1},{"prompt":"You have **19,000 reads/s**. All reads can go to replicas. One replica handles **5000 reads/s**. How many replicas do you need (no headroom)?","options":["2","4","3","6"],"answer":1},{"prompt":"You have **15,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **2500 reads/s**. How many replicas do you need (no headroom)?","options":["4","7","6","5"],"answer":3}]
---
# Design Drill: How many read replicas? #52

Each replica serves reads (and still applies every write). Replicas needed ≈ read load ÷ capacity per node. Keep a little headroom, and remember that replicas don't help write load.
