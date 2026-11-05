---
slug: "sd03-replicas-24"
title: "Design Drill: How many read replicas? #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **16,000 reads/s**. All reads can go to replicas. One replica handles **1500 reads/s**. How many replicas do you need (no headroom)?","options":["6","10","13","11"],"answer":3},{"prompt":"You have **44,000 reads/s**. All reads can go to replicas. One replica handles **5000 reads/s**. How many replicas do you need (no headroom)?","options":["8","11","5","9"],"answer":3},{"prompt":"You have **22,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **2000 reads/s**. How many replicas do you need (no headroom)?","options":["11","6","9","8"],"answer":2},{"prompt":"You have **12,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **2000 reads/s**. How many replicas do you need (no headroom)?","options":["7","6","5","4"],"answer":2},{"prompt":"You have **41,000 reads/s**. All reads can go to replicas. One replica handles **2500 reads/s**. How many replicas do you need (no headroom)?","options":["19","16","9","17"],"answer":3}]
---
# Design Drill: How many read replicas? #24

Each replica serves reads (and still applies every write). Replicas needed ≈ read load ÷ capacity per node. Keep a little headroom, and remember that replicas don't help write load.
