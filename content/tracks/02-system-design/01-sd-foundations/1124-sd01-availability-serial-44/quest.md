---
slug: "sd01-availability-serial-44"
title: "Design Drill: Availability of dependencies in series #44"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99%), service B (99.95%), service C (99%). What is the best possible availability?","options":["99%","100%","99.32%","97.96%"],"answer":3,"explanation":"Multiply them: 97.96%."},{"prompt":"A request needs **all** of: service A (99.95%), service B (99.95%), service C (99.5%). What is the best possible availability?","options":["100%","99.8%","99.4%","99.5%"],"answer":2,"explanation":"Multiply them: 99.4%."},{"prompt":"A request needs **all** of: service A (99.95%), service B (99.95%), service C (99.99%), service D (99.9%). What is the best possible availability?","options":["100%","99.9%","99.79%","99.95%"],"answer":2,"explanation":"Multiply them: 99.79%."},{"prompt":"A request needs **all** of: service A (99.9%), service B (99.95%), service C (99.95%), service D (99%). What is the best possible availability?","options":["98.8%","99.7%","99%","100%"],"answer":0,"explanation":"Multiply them: 98.8%."},{"prompt":"A request needs **all** of: service A (99.9%), service B (99.5%), service C (99.9%), service D (99%). What is the best possible availability?","options":["98.31%","99.57%","99%","100%"],"answer":0,"explanation":"Multiply them: 98.31%."}]
---
# Design Drill: Availability of dependencies in series #44

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
