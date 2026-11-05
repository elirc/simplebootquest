---
slug: "sd03-replicas-6"
title: "Design Drill: How many read replicas? #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **31,000 reads/s**. All reads can go to replicas. One replica handles **2500 reads/s**. How many replicas do you need (no headroom)?","options":["12","7","15","13"],"answer":3},{"prompt":"You have **33,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **5000 reads/s**. How many replicas do you need (no headroom)?","options":["5","7","8","6"],"answer":3},{"prompt":"You have **51,000 reads/s**. All reads can go to replicas. One replica handles **1500 reads/s**. How many replicas do you need (no headroom)?","options":["36","33","34","17"],"answer":2},{"prompt":"You have **37,000 reads/s**. All reads can go to replicas. One replica handles **4000 reads/s**. How many replicas do you need (no headroom)?","options":["9","12","5","10"],"answer":3},{"prompt":"You have **39,000 reads/s**. All reads can go to replicas. One replica handles **2000 reads/s**. How many replicas do you need (no headroom)?","options":["20","10","19","22"],"answer":0}]
---
# Design Drill: How many read replicas? #6

Each replica serves reads (and still applies every write). Replicas needed ≈ read load ÷ capacity per node. Keep a little headroom, and remember that replicas don't help write load.
