---
slug: "sd03-replicas-55"
title: "Design Drill: How many read replicas? #55"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **5000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **2000 reads/s**. How many replicas do you need (no headroom)?","options":["2","1","4","3"],"answer":0},{"prompt":"You have **36,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **1500 reads/s**. How many replicas do you need (no headroom)?","options":["19","24","20","22"],"answer":2},{"prompt":"You have **28,000 reads/s**. All reads can go to replicas. One replica handles **2000 reads/s**. How many replicas do you need (no headroom)?","options":["14","16","7","13"],"answer":0},{"prompt":"You have **44,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **2500 reads/s**. How many replicas do you need (no headroom)?","options":["18","15","14","17"],"answer":1},{"prompt":"You have **52,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **2000 reads/s**. How many replicas do you need (no headroom)?","options":["20","23","21","26"],"answer":2}]
---
# Design Drill: How many read replicas? #55

Each replica serves reads (and still applies every write). Replicas needed ≈ read load ÷ capacity per node. Keep a little headroom, and remember that replicas don't help write load.
