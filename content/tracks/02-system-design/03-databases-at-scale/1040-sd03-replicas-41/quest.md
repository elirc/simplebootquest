---
slug: "sd03-replicas-41"
title: "Design Drill: How many read replicas? #41"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **35,000 reads/s**. All reads can go to replicas. One replica handles **5000 reads/s**. How many replicas do you need (no headroom)?","options":["7","6","4","9"],"answer":0},{"prompt":"You have **3000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **2500 reads/s**. How many replicas do you need (no headroom)?","options":["1","3","0","2"],"answer":0},{"prompt":"You have **47,000 reads/s**. All reads can go to replicas. One replica handles **1500 reads/s**. How many replicas do you need (no headroom)?","options":["32","34","31","16"],"answer":0},{"prompt":"You have **27,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **2000 reads/s**. How many replicas do you need (no headroom)?","options":["13","10","11","14"],"answer":2},{"prompt":"You have **15,000 reads/s**. 20% of them must hit the primary (read-your-writes). One replica handles **2000 reads/s**. How many replicas do you need (no headroom)?","options":["5","8","6","4"],"answer":2}]
---
# Design Drill: How many read replicas? #41

Each replica serves reads (and still applies every write). Replicas needed ≈ read load ÷ capacity per node. Keep a little headroom, and remember that replicas don't help write load.
