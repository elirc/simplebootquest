---
slug: "sd03-replicas-51"
title: "Design Drill: How many read replicas? #51"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **55,000 reads/s**. All reads can go to replicas. One replica handles **5000 reads/s**. How many replicas do you need (no headroom)?","options":["10","11","13","6"],"answer":1},{"prompt":"You have **50,000 reads/s**. All reads can go to replicas. One replica handles **1500 reads/s**. How many replicas do you need (no headroom)?","options":["36","33","17","34"],"answer":3},{"prompt":"You have **33,000 reads/s**. All reads can go to replicas. One replica handles **2500 reads/s**. How many replicas do you need (no headroom)?","options":["13","16","14","7"],"answer":2},{"prompt":"You have **30,000 reads/s**. All reads can go to replicas. One replica handles **2500 reads/s**. How many replicas do you need (no headroom)?","options":["6","14","12","11"],"answer":2},{"prompt":"You have **46,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **5000 reads/s**. How many replicas do you need (no headroom)?","options":["7","5","8","10"],"answer":2}]
---
# Design Drill: How many read replicas? #51

Each replica serves reads (and still applies every write). Replicas needed ≈ read load ÷ capacity per node. Keep a little headroom, and remember that replicas don't help write load.
