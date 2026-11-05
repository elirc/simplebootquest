---
slug: "sd03-replicas-60"
title: "Design Drill: How many read replicas? #60"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **59,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **5000 reads/s**. How many replicas do you need (no headroom)?","options":["9","10","6","12"],"answer":1},{"prompt":"You have **51,000 reads/s**. All reads can go to replicas. One replica handles **2500 reads/s**. How many replicas do you need (no headroom)?","options":["11","23","21","20"],"answer":2},{"prompt":"You have **30,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **2000 reads/s**. How many replicas do you need (no headroom)?","options":["12","11","15","14"],"answer":0},{"prompt":"You have **49,000 reads/s**. All reads can go to replicas. One replica handles **2000 reads/s**. How many replicas do you need (no headroom)?","options":["13","27","25","24"],"answer":2},{"prompt":"You have **13,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **1500 reads/s**. How many replicas do you need (no headroom)?","options":["5","6","7","9"],"answer":2}]
---
# Design Drill: How many read replicas? #60

Each replica serves reads (and still applies every write). Replicas needed ≈ read load ÷ capacity per node. Keep a little headroom, and remember that replicas don't help write load.
