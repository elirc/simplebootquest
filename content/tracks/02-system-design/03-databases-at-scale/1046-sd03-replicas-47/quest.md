---
slug: "sd03-replicas-47"
title: "Design Drill: How many read replicas? #47"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **23,000 reads/s**. All reads can go to replicas. One replica handles **2000 reads/s**. How many replicas do you need (no headroom)?","options":["12","6","14","11"],"answer":0},{"prompt":"You have **18,000 reads/s**. All reads can go to replicas. One replica handles **4000 reads/s**. How many replicas do you need (no headroom)?","options":["3","4","7","5"],"answer":3},{"prompt":"You have **14,000 reads/s**. All reads can go to replicas. One replica handles **2500 reads/s**. How many replicas do you need (no headroom)?","options":["6","3","5","8"],"answer":0},{"prompt":"You have **4000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **2000 reads/s**. How many replicas do you need (no headroom)?","options":["1","2","4"],"answer":1},{"prompt":"You have **40,000 reads/s**. All reads can go to replicas. One replica handles **2000 reads/s**. How many replicas do you need (no headroom)?","options":["20","19","10","22"],"answer":0}]
---
# Design Drill: How many read replicas? #47

Each replica serves reads (and still applies every write). Replicas needed ≈ read load ÷ capacity per node. Keep a little headroom, and remember that replicas don't help write load.
