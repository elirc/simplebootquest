---
slug: "sd01-availability-serial-8"
title: "Design Drill: Availability of dependencies in series #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99.99%), service B (99.9%). What is the best possible availability?","options":["100%","99.94%","99.89%","99.9%"],"answer":2,"explanation":"Multiply them: 99.89%."},{"prompt":"A request needs **all** of: service A (99.9%), service B (99.99%), service C (99.5%). What is the best possible availability?","options":["99.8%","99.5%","100%","99.39%"],"answer":3,"explanation":"Multiply them: 99.39%."},{"prompt":"A request needs **all** of: service A (99.95%), service B (99%), service C (99%). What is the best possible availability?","options":["99%","99.32%","97.96%","100%"],"answer":2,"explanation":"Multiply them: 97.96%."},{"prompt":"A request needs **all** of: service A (99%), service B (99.5%), service C (99.5%), service D (99.99%). What is the best possible availability?","options":["99%","100%","99.5%","98%"],"answer":3,"explanation":"Multiply them: 98%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99.5%), service C (99.95%). What is the best possible availability?","options":["100%","98.95%","99.5%","99.65%"],"answer":1,"explanation":"Multiply them: 98.95%."}]
---
# Design Drill: Availability of dependencies in series #8

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
