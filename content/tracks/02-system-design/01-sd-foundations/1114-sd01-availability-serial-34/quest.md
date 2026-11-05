---
slug: "sd01-availability-serial-34"
title: "Design Drill: Availability of dependencies in series #34"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99.99%), service B (99.99%), service C (99.95%). What is the best possible availability?","options":["99.93%","100%","99.95%","99.98%"],"answer":0,"explanation":"Multiply them: 99.93%."},{"prompt":"A request needs **all** of: service A (99.95%), service B (99.95%), service C (99%). What is the best possible availability?","options":["99.63%","99%","100%","98.9%"],"answer":3,"explanation":"Multiply them: 98.9%."},{"prompt":"A request needs **all** of: service A (99.95%), service B (99.99%), service C (99.99%). What is the best possible availability?","options":["99.93%","99.98%","99.95%","100%"],"answer":0,"explanation":"Multiply them: 99.93%."},{"prompt":"A request needs **all** of: service A (99.95%), service B (99.95%), service C (99.5%), service D (99%). What is the best possible availability?","options":["100%","99.6%","99%","98.41%"],"answer":3,"explanation":"Multiply them: 98.41%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99%), service C (99.5%), service D (99.9%). What is the best possible availability?","options":["99.48%","97.91%","99%","100%"],"answer":1,"explanation":"Multiply them: 97.91%."}]
---
# Design Drill: Availability of dependencies in series #34

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
