---
slug: "sd01-availability-serial-6"
title: "Design Drill: Availability of dependencies in series #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99.9%), service B (99%), service C (99%), service D (99.5%). What is the best possible availability?","options":["99.35%","100%","97.42%","99%"],"answer":2,"explanation":"Multiply them: 97.42%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99.95%), service C (99.5%), service D (99%). What is the best possible availability?","options":["99%","98.45%","100%","99.61%"],"answer":1,"explanation":"Multiply them: 98.45%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99.9%), service C (99.9%), service D (99.5%). What is the best possible availability?","options":["100%","98.8%","99.7%","99.5%"],"answer":1,"explanation":"Multiply them: 98.8%."},{"prompt":"A request needs **all** of: service A (99.95%), service B (99.9%), service C (99.9%). What is the best possible availability?","options":["99.92%","100%","99.75%","99.9%"],"answer":2,"explanation":"Multiply them: 99.75%."},{"prompt":"A request needs **all** of: service A (99.9%), service B (99.99%), service C (99.5%), service D (99.9%). What is the best possible availability?","options":["99.29%","99.82%","99.5%","100%"],"answer":0,"explanation":"Multiply them: 99.29%."}]
---
# Design Drill: Availability of dependencies in series #6

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
