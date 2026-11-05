---
slug: "sd01-availability-serial-13"
title: "Design Drill: Availability of dependencies in series #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99%), service B (99.95%), service C (99.5%), service D (99.9%). What is the best possible availability?","options":["99.59%","100%","99%","98.36%"],"answer":3,"explanation":"Multiply them: 98.36%."},{"prompt":"A request needs **all** of: service A (99.9%), service B (99.9%), service C (99.99%). What is the best possible availability?","options":["100%","99.79%","99.93%","99.9%"],"answer":1,"explanation":"Multiply them: 99.79%."},{"prompt":"A request needs **all** of: service A (99%), service B (99.99%), service C (99.9%), service D (99%). What is the best possible availability?","options":["99%","99.47%","97.9%","100%"],"answer":2,"explanation":"Multiply them: 97.9%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99%), service C (99%). What is the best possible availability?","options":["99%","97.52%","99.17%","100%"],"answer":1,"explanation":"Multiply them: 97.52%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99.95%), service C (99.9%), service D (99.5%). What is the best possible availability?","options":["98.85%","99.5%","100%","99.71%"],"answer":0,"explanation":"Multiply them: 98.85%."}]
---
# Design Drill: Availability of dependencies in series #13

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
