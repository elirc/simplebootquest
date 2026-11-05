---
slug: "sd01-availability-serial-32"
title: "Design Drill: Availability of dependencies in series #32"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99.9%), service B (99.5%), service C (99.99%), service D (99.95%). What is the best possible availability?","options":["99.34%","99.5%","99.84%","100%"],"answer":0,"explanation":"Multiply them: 99.34%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99.95%), service C (99%). What is the best possible availability?","options":["98.94%","99.65%","99%","100%"],"answer":0,"explanation":"Multiply them: 98.94%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99.5%), service C (99.5%), service D (99.95%). What is the best possible availability?","options":["100%","98.46%","99.61%","99.5%"],"answer":1,"explanation":"Multiply them: 98.46%."},{"prompt":"A request needs **all** of: service A (99%), service B (99.99%), service C (99.95%), service D (99.5%). What is the best possible availability?","options":["99%","98.45%","99.61%","100%"],"answer":1,"explanation":"Multiply them: 98.45%."},{"prompt":"A request needs **all** of: service A (99%), service B (99.5%), service C (99.95%), service D (99.5%). What is the best possible availability?","options":["97.96%","99%","100%","99.49%"],"answer":0,"explanation":"Multiply them: 97.96%."}]
---
# Design Drill: Availability of dependencies in series #32

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
