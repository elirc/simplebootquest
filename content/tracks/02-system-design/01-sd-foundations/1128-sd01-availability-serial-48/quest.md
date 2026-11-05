---
slug: "sd01-availability-serial-48"
title: "Design Drill: Availability of dependencies in series #48"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99.9%), service B (99.5%), service C (99.95%), service D (99%). What is the best possible availability?","options":["98.36%","99.59%","99%","100%"],"answer":0,"explanation":"Multiply them: 98.36%."},{"prompt":"A request needs **all** of: service A (99.9%), service B (99.99%), service C (99%). What is the best possible availability?","options":["100%","98.89%","99.63%","99%"],"answer":1,"explanation":"Multiply them: 98.89%."},{"prompt":"A request needs **all** of: service A (99.95%), service B (99%), service C (99.99%). What is the best possible availability?","options":["99%","100%","99.65%","98.94%"],"answer":3,"explanation":"Multiply them: 98.94%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99.5%), service C (99.95%), service D (99.5%). What is the best possible availability?","options":["99.5%","100%","99.73%","98.94%"],"answer":3,"explanation":"Multiply them: 98.94%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99.5%), service C (99.99%), service D (99.99%). What is the best possible availability?","options":["99.5%","100%","98.98%","99.74%"],"answer":2,"explanation":"Multiply them: 98.98%."}]
---
# Design Drill: Availability of dependencies in series #48

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
