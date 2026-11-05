---
slug: "sd03-replicas-12"
title: "Design Drill: How many read replicas? #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **9000 reads/s**. All reads can go to replicas. One replica handles **5000 reads/s**. How many replicas do you need (no headroom)?","options":["1","2","4"],"answer":1},{"prompt":"You have **52,000 reads/s**. All reads can go to replicas. One replica handles **2000 reads/s**. How many replicas do you need (no headroom)?","options":["13","26","28","25"],"answer":1},{"prompt":"You have **57,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **1500 reads/s**. How many replicas do you need (no headroom)?","options":["30","31","38","33"],"answer":1},{"prompt":"You have **36,000 reads/s**. All reads can go to replicas. One replica handles **2500 reads/s**. How many replicas do you need (no headroom)?","options":["15","14","8","17"],"answer":0},{"prompt":"You have **6000 reads/s**. All reads can go to replicas. One replica handles **2500 reads/s**. How many replicas do you need (no headroom)?","options":["3","2","5"],"answer":0}]
---
# Design Drill: How many read replicas? #12

Each replica serves reads (and still applies every write). Replicas needed ≈ read load ÷ capacity per node. Keep a little headroom, and remember that replicas don't help write load.
