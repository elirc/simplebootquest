---
slug: "sd01-availability-serial-57"
title: "Design Drill: Availability of dependencies in series #57"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99.95%), service B (99.95%), service C (99.5%), service D (99.99%). What is the best possible availability?","options":["100%","99.5%","99.85%","99.39%"],"answer":3,"explanation":"Multiply them: 99.39%."},{"prompt":"A request needs **all** of: service A (99%), service B (99.99%), service C (99.99%). What is the best possible availability?","options":["100%","98.98%","99.66%","99%"],"answer":1,"explanation":"Multiply them: 98.98%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99.9%), service C (99.99%), service D (99.5%). What is the best possible availability?","options":["99.5%","98.89%","99.72%","100%"],"answer":1,"explanation":"Multiply them: 98.89%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99.9%), service C (99.9%), service D (99.95%). What is the best possible availability?","options":["99.25%","99.5%","99.81%","100%"],"answer":0,"explanation":"Multiply them: 99.25%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99%), service C (99.95%), service D (99%). What is the best possible availability?","options":["100%","97.95%","99%","99.48%"],"answer":1,"explanation":"Multiply them: 97.95%."}]
---
# Design Drill: Availability of dependencies in series #57

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
