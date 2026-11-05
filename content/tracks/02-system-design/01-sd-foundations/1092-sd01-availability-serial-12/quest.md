---
slug: "sd01-availability-serial-12"
title: "Design Drill: Availability of dependencies in series #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99%), service B (99.5%), service C (99.95%). What is the best possible availability?","options":["98.46%","99.48%","99%","100%"],"answer":0,"explanation":"Multiply them: 98.46%."},{"prompt":"A request needs **all** of: service A (99.95%), service B (99.99%), service C (99.9%), service D (99.99%). What is the best possible availability?","options":["99.9%","99.83%","100%","99.96%"],"answer":1,"explanation":"Multiply them: 99.83%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99.9%), service C (99.5%). What is the best possible availability?","options":["99.8%","99.39%","99.5%","100%"],"answer":1,"explanation":"Multiply them: 99.39%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99.5%), service C (99.9%). What is the best possible availability?","options":["99.8%","100%","99.5%","99.39%"],"answer":3,"explanation":"Multiply them: 99.39%."},{"prompt":"A request needs **all** of: service A (99%), service B (99.99%), service C (99%). What is the best possible availability?","options":["100%","98%","99.33%","99%"],"answer":1,"explanation":"Multiply them: 98%."}]
---
# Design Drill: Availability of dependencies in series #12

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
