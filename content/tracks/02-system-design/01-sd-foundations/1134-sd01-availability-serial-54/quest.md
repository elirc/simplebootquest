---
slug: "sd01-availability-serial-54"
title: "Design Drill: Availability of dependencies in series #54"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99.5%), service B (99.5%), service C (99.95%), service D (99.5%). What is the best possible availability?","options":["99.61%","100%","98.46%","99.5%"],"answer":2,"explanation":"Multiply them: 98.46%."},{"prompt":"A request needs **all** of: service A (99%), service B (99.5%), service C (99%), service D (99.99%). What is the best possible availability?","options":["99%","99.37%","97.51%","100%"],"answer":2,"explanation":"Multiply them: 97.51%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99.99%), service C (99%), service D (99.5%). What is the best possible availability?","options":["98%","99.5%","100%","99%"],"answer":0,"explanation":"Multiply them: 98%."},{"prompt":"A request needs **all** of: service A (99.95%), service B (99.9%), service C (99.99%). What is the best possible availability?","options":["99.95%","100%","99.9%","99.84%"],"answer":3,"explanation":"Multiply them: 99.84%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99.99%), service C (99.95%), service D (99.9%). What is the best possible availability?","options":["99.34%","99.83%","99.5%","100%"],"answer":0,"explanation":"Multiply them: 99.34%."}]
---
# Design Drill: Availability of dependencies in series #54

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
