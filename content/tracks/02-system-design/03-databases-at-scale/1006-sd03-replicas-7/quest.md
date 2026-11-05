---
slug: "sd03-replicas-7"
title: "Design Drill: How many read replicas? #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **20,000 reads/s**. All reads can go to replicas. One replica handles **1500 reads/s**. How many replicas do you need (no headroom)?","options":["14","16","7","13"],"answer":0},{"prompt":"You have **34,000 reads/s**. All reads can go to replicas. One replica handles **2000 reads/s**. How many replicas do you need (no headroom)?","options":["19","17","9","16"],"answer":1},{"prompt":"You have **5000 reads/s**. All reads can go to replicas. One replica handles **5000 reads/s**. How many replicas do you need (no headroom)?","options":["3","1","0"],"answer":1},{"prompt":"You have **45,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **4000 reads/s**. How many replicas do you need (no headroom)?","options":["9","11","8","12"],"answer":0},{"prompt":"You have **42,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **2000 reads/s**. How many replicas do you need (no headroom)?","options":["16","21","19","17"],"answer":3}]
---
# Design Drill: How many read replicas? #7

Each replica serves reads (and still applies every write). Replicas needed ≈ read load ÷ capacity per node. Keep a little headroom, and remember that replicas don't help write load.
