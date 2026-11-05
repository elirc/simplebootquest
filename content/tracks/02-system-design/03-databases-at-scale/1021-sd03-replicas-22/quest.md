---
slug: "sd03-replicas-22"
title: "Design Drill: How many read replicas? #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **51,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **2500 reads/s**. How many replicas do you need (no headroom)?","options":["21","16","19","17"],"answer":3},{"prompt":"You have **32,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **5000 reads/s**. How many replicas do you need (no headroom)?","options":["8","6","5","7"],"answer":1},{"prompt":"You have **46,000 reads/s**. All reads can go to replicas. One replica handles **5000 reads/s**. How many replicas do you need (no headroom)?","options":["10","9","5","12"],"answer":0},{"prompt":"You have **14,000 reads/s**. All reads can go to replicas. One replica handles **5000 reads/s**. How many replicas do you need (no headroom)?","options":["2","3","5"],"answer":1},{"prompt":"You have **25,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **2000 reads/s**. How many replicas do you need (no headroom)?","options":["12","13","10","9"],"answer":2}]
---
# Design Drill: How many read replicas? #22

Each replica serves reads (and still applies every write). Replicas needed ≈ read load ÷ capacity per node. Keep a little headroom, and remember that replicas don't help write load.
