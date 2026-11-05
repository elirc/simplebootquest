---
slug: "sd03-replicas-48"
title: "Design Drill: How many read replicas? #48"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **30,000 reads/s**. All reads can go to replicas. One replica handles **1500 reads/s**. How many replicas do you need (no headroom)?","options":["20","22","19","10"],"answer":0},{"prompt":"You have **32,000 reads/s**. All reads can go to replicas. One replica handles **2000 reads/s**. How many replicas do you need (no headroom)?","options":["8","18","16","15"],"answer":2},{"prompt":"You have **55,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **2000 reads/s**. How many replicas do you need (no headroom)?","options":["28","22","21","24"],"answer":1},{"prompt":"You have **43,000 reads/s**. All reads can go to replicas. One replica handles **1500 reads/s**. How many replicas do you need (no headroom)?","options":["31","28","15","29"],"answer":3},{"prompt":"You have **21,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **2500 reads/s**. How many replicas do you need (no headroom)?","options":["7","5","6","9"],"answer":0}]
---
# Design Drill: How many read replicas? #48

Each replica serves reads (and still applies every write). Replicas needed ≈ read load ÷ capacity per node. Keep a little headroom, and remember that replicas don't help write load.
