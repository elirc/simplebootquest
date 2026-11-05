---
slug: "sd01-availability-serial-14"
title: "Design Drill: Availability of dependencies in series #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99.99%), service B (99.5%), service C (99.95%), service D (99.9%). What is the best possible availability?","options":["99.5%","99.34%","100%","99.83%"],"answer":1,"explanation":"Multiply them: 99.34%."},{"prompt":"A request needs **all** of: service A (99.9%), service B (99.99%), service C (99.9%), service D (99.9%). What is the best possible availability?","options":["100%","99.92%","99.9%","99.69%"],"answer":3,"explanation":"Multiply them: 99.69%."},{"prompt":"A request needs **all** of: service A (99.9%), service B (99%), service C (99.99%). What is the best possible availability?","options":["100%","99%","98.89%","99.63%"],"answer":2,"explanation":"Multiply them: 98.89%."},{"prompt":"A request needs **all** of: service A (99.95%), service B (99.95%), service C (99.95%). What is the best possible availability?","options":["99.95%","98.85%","100%","99.85%"],"answer":3,"explanation":"Multiply them: 99.85%."},{"prompt":"A request needs **all** of: service A (99.95%), service B (99.9%), service C (99.9%), service D (99.99%). What is the best possible availability?","options":["99.94%","100%","99.9%","99.74%"],"answer":3,"explanation":"Multiply them: 99.74%."}]
---
# Design Drill: Availability of dependencies in series #14

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
