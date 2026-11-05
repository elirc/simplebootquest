---
slug: "sd03-replicas-17"
title: "Design Drill: How many read replicas? #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **34,000 reads/s**. All reads can go to replicas. One replica handles **2500 reads/s**. How many replicas do you need (no headroom)?","options":["14","13","7","16"],"answer":0},{"prompt":"You have **37,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **5000 reads/s**. How many replicas do you need (no headroom)?","options":["8","4","6","5"],"answer":2},{"prompt":"You have **50,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **2000 reads/s**. How many replicas do you need (no headroom)?","options":["19","25","22","20"],"answer":3},{"prompt":"You have **32,000 reads/s**. All reads can go to replicas. One replica handles **4000 reads/s**. How many replicas do you need (no headroom)?","options":["10","8","7","4"],"answer":1},{"prompt":"You have **35,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **4000 reads/s**. How many replicas do you need (no headroom)?","options":["5","7","6","9"],"answer":1}]
---
# Design Drill: How many read replicas? #17

Each replica serves reads (and still applies every write). Replicas needed ≈ read load ÷ capacity per node. Keep a little headroom, and remember that replicas don't help write load.
