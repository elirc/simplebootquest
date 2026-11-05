---
slug: "sd01-availability-serial-56"
title: "Design Drill: Availability of dependencies in series #56"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99.95%), service B (99.5%), service C (99.9%), service D (99%). What is the best possible availability?","options":["98.36%","99%","100%","99.59%"],"answer":0,"explanation":"Multiply them: 98.36%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99.9%), service C (99.99%). What is the best possible availability?","options":["100%","99.5%","99.8%","99.39%"],"answer":3,"explanation":"Multiply them: 99.39%."},{"prompt":"A request needs **all** of: service A (99.95%), service B (99.99%), service C (99.5%), service D (99.95%). What is the best possible availability?","options":["99.5%","99.39%","100%","99.85%"],"answer":1,"explanation":"Multiply them: 99.39%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99%), service C (99%), service D (99%). What is the best possible availability?","options":["99.25%","99%","97.02%","100%"],"answer":2,"explanation":"Multiply them: 97.02%."},{"prompt":"A request needs **all** of: service A (99%), service B (99%), service C (99.99%), service D (99.5%). What is the best possible availability?","options":["99.37%","99%","100%","97.51%"],"answer":3,"explanation":"Multiply them: 97.51%."}]
---
# Design Drill: Availability of dependencies in series #56

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
