---
slug: "sd01-availability-serial-37"
title: "Design Drill: Availability of dependencies in series #37"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99%), service B (99.5%), service C (99.95%), service D (99.95%). What is the best possible availability?","options":["98.41%","100%","99.6%","99%"],"answer":0,"explanation":"Multiply them: 98.41%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99.9%), service C (99.95%), service D (99.95%). What is the best possible availability?","options":["100%","99.95%","99.79%","99.9%"],"answer":2,"explanation":"Multiply them: 99.79%."},{"prompt":"A request needs **all** of: service A (99.9%), service B (99.9%), service C (99%), service D (99%). What is the best possible availability?","options":["99%","99.45%","97.81%","100%"],"answer":2,"explanation":"Multiply them: 97.81%."},{"prompt":"A request needs **all** of: service A (99.95%), service B (99.5%), service C (99.9%), service D (99.99%). What is the best possible availability?","options":["100%","99.34%","99.84%","99.5%"],"answer":1,"explanation":"Multiply them: 99.34%."},{"prompt":"A request needs **all** of: service A (99.9%), service B (99.5%), service C (99.5%), service D (99.95%). What is the best possible availability?","options":["99.5%","100%","98.85%","99.71%"],"answer":2,"explanation":"Multiply them: 98.85%."}]
---
# Design Drill: Availability of dependencies in series #37

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
