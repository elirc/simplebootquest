---
slug: "sd01-availability-serial-53"
title: "Design Drill: Availability of dependencies in series #53"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99%), service B (99%), service C (99.9%), service D (99.95%). What is the best possible availability?","options":["99%","99.46%","97.86%","100%"],"answer":2,"explanation":"Multiply them: 97.86%."},{"prompt":"A request needs **all** of: service A (99.95%), service B (99.5%), service C (99.9%), service D (99.5%). What is the best possible availability?","options":["98.85%","99.71%","100%","99.5%"],"answer":0,"explanation":"Multiply them: 98.85%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99.5%), service C (99.5%). What is the best possible availability?","options":["98.51%","100%","99.5%","97.52%"],"answer":0,"explanation":"Multiply them: 98.51%."},{"prompt":"A request needs **all** of: service A (99%), service B (99.95%), service C (99%), service D (99.9%). What is the best possible availability?","options":["97.86%","99%","99.46%","100%"],"answer":0,"explanation":"Multiply them: 97.86%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99%), service C (99.9%), service D (99.99%). What is the best possible availability?","options":["100%","99%","98.4%","99.6%"],"answer":2,"explanation":"Multiply them: 98.4%."}]
---
# Design Drill: Availability of dependencies in series #53

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
