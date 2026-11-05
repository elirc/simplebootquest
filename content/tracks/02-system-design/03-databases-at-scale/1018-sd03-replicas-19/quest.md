---
slug: "sd03-replicas-19"
title: "Design Drill: How many read replicas? #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **32,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **4000 reads/s**. How many replicas do you need (no headroom)?","options":["6","8","9","7"],"answer":3},{"prompt":"You have **25,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **4000 reads/s**. How many replicas do you need (no headroom)?","options":["7","5","4"],"answer":1},{"prompt":"You have **29,000 reads/s**. All reads can go to replicas. One replica handles **2500 reads/s**. How many replicas do you need (no headroom)?","options":["6","11","12","14"],"answer":2},{"prompt":"You have **49,000 reads/s**. All reads can go to replicas. One replica handles **1500 reads/s**. How many replicas do you need (no headroom)?","options":["33","17","32","35"],"answer":0},{"prompt":"You have **36,000 reads/s**. All reads can go to replicas. One replica handles **1500 reads/s**. How many replicas do you need (no headroom)?","options":["23","26","12","24"],"answer":3}]
---
# Design Drill: How many read replicas? #19

Each replica serves reads (and still applies every write). Replicas needed ≈ read load ÷ capacity per node. Keep a little headroom, and remember that replicas don't help write load.
