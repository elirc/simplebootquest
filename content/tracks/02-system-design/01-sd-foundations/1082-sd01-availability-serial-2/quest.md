---
slug: "sd01-availability-serial-2"
title: "Design Drill: Availability of dependencies in series #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99%), service B (99.95%), service C (99.95%), service D (99.9%). What is the best possible availability?","options":["100%","98.8%","99.7%","99%"],"answer":1,"explanation":"Multiply them: 98.8%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99.9%), service C (99%), service D (99.95%). What is the best possible availability?","options":["99%","100%","98.36%","99.59%"],"answer":2,"explanation":"Multiply them: 98.36%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99%). What is the best possible availability?","options":["99.25%","99.99%","99%","98.5%"],"answer":3,"explanation":"Multiply them: 98.5%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99%), service C (99.5%). What is the best possible availability?","options":["99.5%","98.5%","100%","99%"],"answer":1,"explanation":"Multiply them: 98.5%."},{"prompt":"A request needs **all** of: service A (99.95%), service B (99.5%). What is the best possible availability?","options":["99.72%","99.45%","100%","99.5%"],"answer":1,"explanation":"Multiply them: 99.45%."}]
---
# Design Drill: Availability of dependencies in series #2

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
