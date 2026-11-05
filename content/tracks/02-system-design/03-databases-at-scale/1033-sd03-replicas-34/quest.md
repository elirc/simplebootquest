---
slug: "sd03-replicas-34"
title: "Design Drill: How many read replicas? #34"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **12,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **1500 reads/s**. How many replicas do you need (no headroom)?","options":["9","8","6","7"],"answer":3},{"prompt":"You have **58,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **5000 reads/s**. How many replicas do you need (no headroom)?","options":["12","9","6","10"],"answer":3},{"prompt":"You have **28,000 reads/s**. All reads can go to replicas. One replica handles **2500 reads/s**. How many replicas do you need (no headroom)?","options":["12","11","6","14"],"answer":0},{"prompt":"You have **38,000 reads/s**. All reads can go to replicas. One replica handles **2000 reads/s**. How many replicas do you need (no headroom)?","options":["10","19","18","21"],"answer":1},{"prompt":"You have **31,000 reads/s**. All reads can go to replicas. One replica handles **2000 reads/s**. How many replicas do you need (no headroom)?","options":["16","15","8","18"],"answer":0}]
---
# Design Drill: How many read replicas? #34

Each replica serves reads (and still applies every write). Replicas needed ≈ read load ÷ capacity per node. Keep a little headroom, and remember that replicas don't help write load.
