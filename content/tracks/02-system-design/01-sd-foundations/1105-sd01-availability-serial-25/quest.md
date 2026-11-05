---
slug: "sd01-availability-serial-25"
title: "Design Drill: Availability of dependencies in series #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99.99%), service B (99.9%), service C (99.5%), service D (99.9%). What is the best possible availability?","options":["99.5%","100%","99.82%","99.29%"],"answer":3,"explanation":"Multiply them: 99.29%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99%), service C (99.95%). What is the best possible availability?","options":["100%","99%","98.46%","99.48%"],"answer":2,"explanation":"Multiply them: 98.46%."},{"prompt":"A request needs **all** of: service A (99.95%), service B (99%), service C (99.99%), service D (99.5%). What is the best possible availability?","options":["100%","99.61%","98.45%","99%"],"answer":2,"explanation":"Multiply them: 98.45%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99.95%), service C (99.9%), service D (99.5%). What is the best possible availability?","options":["99.34%","100%","99.84%","99.5%"],"answer":0,"explanation":"Multiply them: 99.34%."},{"prompt":"A request needs **all** of: service A (99%), service B (99.5%), service C (99.5%), service D (99.5%). What is the best possible availability?","options":["99.38%","99%","97.52%","100%"],"answer":2,"explanation":"Multiply them: 97.52%."}]
---
# Design Drill: Availability of dependencies in series #25

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
