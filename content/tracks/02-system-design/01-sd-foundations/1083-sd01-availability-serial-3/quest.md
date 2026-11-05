---
slug: "sd01-availability-serial-3"
title: "Design Drill: Availability of dependencies in series #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99.95%), service B (99.5%), service C (99.99%), service D (99.99%). What is the best possible availability?","options":["99.86%","100%","99.5%","99.43%"],"answer":3,"explanation":"Multiply them: 99.43%."},{"prompt":"A request needs **all** of: service A (99.9%), service B (99.95%). What is the best possible availability?","options":["99.92%","99.9%","100%","99.85%"],"answer":3,"explanation":"Multiply them: 99.85%."},{"prompt":"A request needs **all** of: service A (99%), service B (99.95%), service C (99.9%). What is the best possible availability?","options":["100%","99.62%","99%","98.85%"],"answer":3,"explanation":"Multiply them: 98.85%."},{"prompt":"A request needs **all** of: service A (99.95%), service B (99.9%), service C (99.5%). What is the best possible availability?","options":["99.78%","100%","99.35%","99.5%"],"answer":2,"explanation":"Multiply them: 99.35%."},{"prompt":"A request needs **all** of: service A (99.95%), service B (99.5%), service C (99%). What is the best possible availability?","options":["98.46%","99%","99.48%","100%"],"answer":0,"explanation":"Multiply them: 98.46%."}]
---
# Design Drill: Availability of dependencies in series #3

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
