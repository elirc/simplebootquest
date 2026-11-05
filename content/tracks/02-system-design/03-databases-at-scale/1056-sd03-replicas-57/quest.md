---
slug: "sd03-replicas-57"
title: "Design Drill: How many read replicas? #57"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **8000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **5000 reads/s**. How many replicas do you need (no headroom)?","options":["4","1","2"],"answer":2},{"prompt":"You have **38,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **2500 reads/s**. How many replicas do you need (no headroom)?","options":["13","12","16","15"],"answer":0},{"prompt":"You have **22,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **4000 reads/s**. How many replicas do you need (no headroom)?","options":["4","5","6","7"],"answer":1},{"prompt":"You have **27,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **2500 reads/s**. How many replicas do you need (no headroom)?","options":["8","11","6","9"],"answer":3},{"prompt":"You have **27,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **1500 reads/s**. How many replicas do you need (no headroom)?","options":["15","18","14","17"],"answer":0}]
---
# Design Drill: How many read replicas? #57

Each replica serves reads (and still applies every write). Replicas needed ≈ read load ÷ capacity per node. Keep a little headroom, and remember that replicas don't help write load.
