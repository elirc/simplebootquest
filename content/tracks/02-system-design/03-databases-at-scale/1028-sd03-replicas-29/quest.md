---
slug: "sd03-replicas-29"
title: "Design Drill: How many read replicas? #29"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **37,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **1500 reads/s**. How many replicas do you need (no headroom)?","options":["20","19","25","22"],"answer":0},{"prompt":"You have **48,000 reads/s**. All reads can go to replicas. One replica handles **2500 reads/s**. How many replicas do you need (no headroom)?","options":["20","22","19","10"],"answer":0},{"prompt":"You have **11,000 reads/s**. All reads can go to replicas. One replica handles **5000 reads/s**. How many replicas do you need (no headroom)?","options":["5","3","2"],"answer":1},{"prompt":"You have **13,000 reads/s**. All reads can go to replicas. One replica handles **1500 reads/s**. How many replicas do you need (no headroom)?","options":["8","11","9","5"],"answer":2},{"prompt":"You have **53,000 reads/s**. All reads can go to replicas. One replica handles **4000 reads/s**. How many replicas do you need (no headroom)?","options":["14","16","13","7"],"answer":0}]
---
# Design Drill: How many read replicas? #29

Each replica serves reads (and still applies every write). Replicas needed ≈ read load ÷ capacity per node. Keep a little headroom, and remember that replicas don't help write load.
