---
slug: "sd01-availability-serial-51"
title: "Design Drill: Availability of dependencies in series #51"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99.9%), service B (99.9%), service C (99%), service D (99.9%). What is the best possible availability?","options":["100%","98.7%","99%","99.67%"],"answer":1,"explanation":"Multiply them: 98.7%."},{"prompt":"A request needs **all** of: service A (99.9%), service B (99.95%), service C (99%), service D (99.5%). What is the best possible availability?","options":["98.36%","99.59%","99%","100%"],"answer":0,"explanation":"Multiply them: 98.36%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99.95%), service C (99.5%), service D (99.5%). What is the best possible availability?","options":["99.5%","99.61%","100%","98.46%"],"answer":3,"explanation":"Multiply them: 98.46%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99.9%), service C (99.99%), service D (99%). What is the best possible availability?","options":["99%","100%","98.88%","99.72%"],"answer":2,"explanation":"Multiply them: 98.88%."},{"prompt":"A request needs **all** of: service A (99.95%), service B (99.99%), service C (99.9%), service D (99%). What is the best possible availability?","options":["98.84%","99%","100%","99.71%"],"answer":0,"explanation":"Multiply them: 98.84%."}]
---
# Design Drill: Availability of dependencies in series #51

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
