---
slug: "sd03-replicas-15"
title: "Design Drill: How many read replicas? #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **60,000 reads/s**. All reads can go to replicas. One replica handles **1500 reads/s**. How many replicas do you need (no headroom)?","options":["39","42","40","20"],"answer":2},{"prompt":"You have **27,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **4000 reads/s**. How many replicas do you need (no headroom)?","options":["8","6","5","7"],"answer":1},{"prompt":"You have **41,000 reads/s**. All reads can go to replicas. One replica handles **2000 reads/s**. How many replicas do you need (no headroom)?","options":["20","21","11","23"],"answer":1},{"prompt":"You have **21,000 reads/s**. All reads can go to replicas. One replica handles **4000 reads/s**. How many replicas do you need (no headroom)?","options":["6","5","8","3"],"answer":0},{"prompt":"You have **40,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **5000 reads/s**. How many replicas do you need (no headroom)?","options":["9","8","7","6"],"answer":2}]
---
# Design Drill: How many read replicas? #15

Each replica serves reads (and still applies every write). Replicas needed ≈ read load ÷ capacity per node. Keep a little headroom, and remember that replicas don't help write load.
