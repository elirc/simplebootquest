---
slug: "sd03-replicas-18"
title: "Design Drill: How many read replicas? #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **35,000 reads/s**. All reads can go to replicas. One replica handles **4000 reads/s**. How many replicas do you need (no headroom)?","options":["5","8","9","11"],"answer":2},{"prompt":"You have **52,000 reads/s**. All reads can go to replicas. One replica handles **5000 reads/s**. How many replicas do you need (no headroom)?","options":["6","13","11","10"],"answer":2},{"prompt":"You have **14,000 reads/s**. All reads can go to replicas. One replica handles **2000 reads/s**. How many replicas do you need (no headroom)?","options":["7","4","9","6"],"answer":0},{"prompt":"You have **18,000 reads/s**. All reads can go to replicas. One replica handles **1500 reads/s**. How many replicas do you need (no headroom)?","options":["12","14","11","6"],"answer":0},{"prompt":"You have **28,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **5000 reads/s**. How many replicas do you need (no headroom)?","options":["5","6","4","7"],"answer":0}]
---
# Design Drill: How many read replicas? #18

Each replica serves reads (and still applies every write). Replicas needed ≈ read load ÷ capacity per node. Keep a little headroom, and remember that replicas don't help write load.
