---
slug: "sd03-replicas-10"
title: "Design Drill: How many read replicas? #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **14,000 reads/s**. All reads can go to replicas. One replica handles **4000 reads/s**. How many replicas do you need (no headroom)?","options":["6","3","2","4"],"answer":3},{"prompt":"You have **19,000 reads/s**. All reads can go to replicas. One replica handles **4000 reads/s**. How many replicas do you need (no headroom)?","options":["3","5","7","4"],"answer":1},{"prompt":"You have **47,000 reads/s**. All reads can go to replicas. One replica handles **4000 reads/s**. How many replicas do you need (no headroom)?","options":["11","12","6","14"],"answer":1},{"prompt":"You have **56,000 reads/s**. All reads can go to replicas. One replica handles **5000 reads/s**. How many replicas do you need (no headroom)?","options":["14","11","6","12"],"answer":3},{"prompt":"You have **46,000 reads/s**. All reads can go to replicas. One replica handles **4000 reads/s**. How many replicas do you need (no headroom)?","options":["6","11","14","12"],"answer":3}]
---
# Design Drill: How many read replicas? #10

Each replica serves reads (and still applies every write). Replicas needed ≈ read load ÷ capacity per node. Keep a little headroom, and remember that replicas don't help write load.
