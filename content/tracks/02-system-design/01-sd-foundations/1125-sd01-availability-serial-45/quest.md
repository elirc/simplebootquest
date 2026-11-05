---
slug: "sd01-availability-serial-45"
title: "Design Drill: Availability of dependencies in series #45"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99.95%), service B (99.5%), service C (99.5%). What is the best possible availability?","options":["99.5%","100%","98.95%","99.65%"],"answer":2,"explanation":"Multiply them: 98.95%."},{"prompt":"A request needs **all** of: service A (99%), service B (99.9%), service C (99.9%), service D (99.5%). What is the best possible availability?","options":["99.58%","99%","98.31%","100%"],"answer":2,"explanation":"Multiply them: 98.31%."},{"prompt":"A request needs **all** of: service A (99%), service B (99.99%), service C (99.95%). What is the best possible availability?","options":["98.94%","99.65%","100%","99%"],"answer":0,"explanation":"Multiply them: 98.94%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99%), service C (99%), service D (99.99%). What is the best possible availability?","options":["99.5%","100%","99%","97.99%"],"answer":3,"explanation":"Multiply them: 97.99%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99.99%), service C (99.9%), service D (99.99%). What is the best possible availability?","options":["99.5%","99.84%","100%","99.38%"],"answer":3,"explanation":"Multiply them: 99.38%."}]
---
# Design Drill: Availability of dependencies in series #45

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
