---
slug: "sd03-replicas-2"
title: "Design Drill: How many read replicas? #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **4000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **2500 reads/s**. How many replicas do you need (no headroom)?","options":["2","4","1"],"answer":0},{"prompt":"You have **60,000 reads/s**. All reads can go to replicas. One replica handles **2000 reads/s**. How many replicas do you need (no headroom)?","options":["32","29","30","15"],"answer":2},{"prompt":"You have **39,000 reads/s**. All reads can go to replicas. One replica handles **2500 reads/s**. How many replicas do you need (no headroom)?","options":["16","15","8","18"],"answer":0},{"prompt":"You have **24,000 reads/s**. All reads can go to replicas. One replica handles **2500 reads/s**. How many replicas do you need (no headroom)?","options":["12","10","5","9"],"answer":1},{"prompt":"You have **24,000 reads/s**. All reads can go to replicas. One replica handles **4000 reads/s**. How many replicas do you need (no headroom)?","options":["3","8","6","5"],"answer":2}]
---
# Design Drill: How many read replicas? #2

Each replica serves reads (and still applies every write). Replicas needed ≈ read load ÷ capacity per node. Keep a little headroom, and remember that replicas don't help write load.
