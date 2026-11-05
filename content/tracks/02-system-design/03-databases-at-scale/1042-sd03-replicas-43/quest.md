---
slug: "sd03-replicas-43"
title: "Design Drill: How many read replicas? #43"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **22,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **1500 reads/s**. How many replicas do you need (no headroom)?","options":["11","15","14","12"],"answer":3},{"prompt":"You have **2000 reads/s**. All reads can go to replicas. One replica handles **2500 reads/s**. How many replicas do you need (no headroom)?","options":["3","1","0"],"answer":1},{"prompt":"You have **33,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **2500 reads/s**. How many replicas do you need (no headroom)?","options":["11","13","10","14"],"answer":0},{"prompt":"You have **19,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **2500 reads/s**. How many replicas do you need (no headroom)?","options":["7","8","6","9"],"answer":0},{"prompt":"You have **58,000 reads/s**. All reads can go to replicas. One replica handles **2000 reads/s**. How many replicas do you need (no headroom)?","options":["29","31","28","15"],"answer":0}]
---
# Design Drill: How many read replicas? #43

Each replica serves reads (and still applies every write). Replicas needed ≈ read load ÷ capacity per node. Keep a little headroom, and remember that replicas don't help write load.
