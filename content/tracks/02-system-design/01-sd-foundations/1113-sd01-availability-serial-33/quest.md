---
slug: "sd01-availability-serial-33"
title: "Design Drill: Availability of dependencies in series #33"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99.5%), service B (99%), service C (99.95%), service D (99.9%). What is the best possible availability?","options":["100%","99.59%","99%","98.36%"],"answer":3,"explanation":"Multiply them: 98.36%."},{"prompt":"A request needs **all** of: service A (99.95%), service B (99%), service C (99.95%). What is the best possible availability?","options":["98.9%","99.63%","99%","100%"],"answer":0,"explanation":"Multiply them: 98.9%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99.5%), service C (99.99%), service D (99.9%). What is the best possible availability?","options":["99.72%","99.5%","100%","98.89%"],"answer":3,"explanation":"Multiply them: 98.89%."},{"prompt":"A request needs **all** of: service A (99%), service B (99%), service C (99.5%), service D (99.99%). What is the best possible availability?","options":["99.37%","97.51%","100%","99%"],"answer":1,"explanation":"Multiply them: 97.51%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99.95%), service C (99%). What is the best possible availability?","options":["98.46%","99%","100%","99.48%"],"answer":0,"explanation":"Multiply them: 98.46%."}]
---
# Design Drill: Availability of dependencies in series #33

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
