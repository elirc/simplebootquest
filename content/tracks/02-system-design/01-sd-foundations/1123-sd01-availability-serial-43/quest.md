---
slug: "sd01-availability-serial-43"
title: "Design Drill: Availability of dependencies in series #43"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99.5%), service B (99.9%), service C (99.95%), service D (99%). What is the best possible availability?","options":["99%","100%","99.59%","98.36%"],"answer":3,"explanation":"Multiply them: 98.36%."},{"prompt":"A request needs **all** of: service A (99.95%), service B (99.95%), service C (99.99%). What is the best possible availability?","options":["99.96%","99.95%","99.89%","100%"],"answer":2,"explanation":"Multiply them: 99.89%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99%), service C (99.5%), service D (99.95%). What is the best possible availability?","options":["99%","97.96%","99.49%","100%"],"answer":1,"explanation":"Multiply them: 97.96%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99.99%), service C (99.99%), service D (99.95%). What is the best possible availability?","options":["99.92%","100%","99.95%","99.98%"],"answer":0,"explanation":"Multiply them: 99.92%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99%), service C (99.9%). What is the best possible availability?","options":["98.41%","99.47%","100%","99%"],"answer":0,"explanation":"Multiply them: 98.41%."}]
---
# Design Drill: Availability of dependencies in series #43

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
