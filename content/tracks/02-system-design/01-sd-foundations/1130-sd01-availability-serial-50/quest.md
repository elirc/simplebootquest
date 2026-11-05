---
slug: "sd01-availability-serial-50"
title: "Design Drill: Availability of dependencies in series #50"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99.5%), service B (99.5%), service C (99%). What is the best possible availability?","options":["99.33%","99%","100%","98.01%"],"answer":3,"explanation":"Multiply them: 98.01%."},{"prompt":"A request needs **all** of: service A (99.9%), service B (99.5%), service C (99.99%), service D (99.9%). What is the best possible availability?","options":["99.29%","99.82%","100%","99.5%"],"answer":0,"explanation":"Multiply them: 99.29%."},{"prompt":"A request needs **all** of: service A (99.95%), service B (99.9%), service C (99.99%), service D (99.9%). What is the best possible availability?","options":["99.94%","99.9%","100%","99.74%"],"answer":3,"explanation":"Multiply them: 99.74%."},{"prompt":"A request needs **all** of: service A (99%), service B (99.5%), service C (99.99%), service D (99%). What is the best possible availability?","options":["99%","100%","97.51%","99.37%"],"answer":2,"explanation":"Multiply them: 97.51%."},{"prompt":"A request needs **all** of: service A (99.9%), service B (99.9%), service C (99.9%), service D (99.5%). What is the best possible availability?","options":["99.8%","99.2%","99.5%","100%"],"answer":1,"explanation":"Multiply them: 99.2%."}]
---
# Design Drill: Availability of dependencies in series #50

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
