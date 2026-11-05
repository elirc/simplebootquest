---
slug: "sd03-replicas-27"
title: "Design Drill: How many read replicas? #27"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **20,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **2500 reads/s**. How many replicas do you need (no headroom)?","options":["8","9","7","6"],"answer":2},{"prompt":"You have **22,000 reads/s**. All reads can go to replicas. One replica handles **2000 reads/s**. How many replicas do you need (no headroom)?","options":["13","6","11","10"],"answer":2},{"prompt":"You have **14,000 reads/s**. All reads can go to replicas. One replica handles **1500 reads/s**. How many replicas do you need (no headroom)?","options":["9","10","12","5"],"answer":1},{"prompt":"You have **24,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **1500 reads/s**. How many replicas do you need (no headroom)?","options":["13","15","16","12"],"answer":0},{"prompt":"You have **30,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **5000 reads/s**. How many replicas do you need (no headroom)?","options":["5","7","6","4"],"answer":0}]
---
# Design Drill: How many read replicas? #27

Each replica serves reads (and still applies every write). Replicas needed ≈ read load ÷ capacity per node. Keep a little headroom, and remember that replicas don't help write load.
