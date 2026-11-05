---
slug: "sd01-availability-serial-4"
title: "Design Drill: Availability of dependencies in series #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99%), service B (99.9%), service C (99.95%). What is the best possible availability?","options":["98.85%","99.62%","100%","99%"],"answer":0,"explanation":"Multiply them: 98.85%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99.95%), service C (99.9%), service D (99.99%). What is the best possible availability?","options":["99.96%","100%","99.83%","99.9%"],"answer":2,"explanation":"Multiply them: 99.83%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99.99%), service C (99%). What is the best possible availability?","options":["100%","98.5%","99%","99.5%"],"answer":1,"explanation":"Multiply them: 98.5%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99.99%). What is the best possible availability?","options":["100%","98.98%","99.99%","99.98%"],"answer":3,"explanation":"Multiply them: 99.98%."},{"prompt":"A request needs **all** of: service A (99.9%), service B (99.5%). What is the best possible availability?","options":["99.7%","100%","99.4%","99.5%"],"answer":2,"explanation":"Multiply them: 99.4%."}]
---
# Design Drill: Availability of dependencies in series #4

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
