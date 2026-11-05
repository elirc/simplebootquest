---
slug: "sd01-availability-serial-23"
title: "Design Drill: Availability of dependencies in series #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99.5%), service B (99.5%). What is the best possible availability?","options":["99%","100%","99.5%","98.01%"],"answer":0,"explanation":"Multiply them: 99%."},{"prompt":"A request needs **all** of: service A (99.95%), service B (99.95%). What is the best possible availability?","options":["100%","99.9%","99.95%","98.9%"],"answer":1,"explanation":"Multiply them: 99.9%."},{"prompt":"A request needs **all** of: service A (99.95%), service B (99.95%), service C (99.9%), service D (99.95%). What is the best possible availability?","options":["99.94%","99.9%","100%","99.75%"],"answer":3,"explanation":"Multiply them: 99.75%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99.5%), service C (99.95%), service D (99.99%). What is the best possible availability?","options":["100%","99.43%","99.86%","99.5%"],"answer":1,"explanation":"Multiply them: 99.43%."},{"prompt":"A request needs **all** of: service A (99.9%), service B (99%), service C (99.5%), service D (99.5%). What is the best possible availability?","options":["99.48%","99%","97.91%","100%"],"answer":2,"explanation":"Multiply them: 97.91%."}]
---
# Design Drill: Availability of dependencies in series #23

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
