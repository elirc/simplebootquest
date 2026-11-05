---
slug: "sd01-availability-serial-35"
title: "Design Drill: Availability of dependencies in series #35"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99.5%), service B (99.95%), service C (99.95%). What is the best possible availability?","options":["99.8%","100%","99.4%","99.5%"],"answer":2,"explanation":"Multiply them: 99.4%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99.99%), service C (99.5%), service D (99.99%). What is the best possible availability?","options":["100%","99.74%","98.98%","99.5%"],"answer":2,"explanation":"Multiply them: 98.98%."},{"prompt":"A request needs **all** of: service A (99%), service B (99%), service C (99.95%), service D (99.5%). What is the best possible availability?","options":["99.36%","97.47%","100%","99%"],"answer":1,"explanation":"Multiply them: 97.47%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99.95%), service C (99.95%). What is the best possible availability?","options":["99.96%","99.95%","100%","99.89%"],"answer":3,"explanation":"Multiply them: 99.89%."},{"prompt":"A request needs **all** of: service A (99.9%), service B (99.5%), service C (99.5%). What is the best possible availability?","options":["100%","99.63%","99.5%","98.9%"],"answer":3,"explanation":"Multiply them: 98.9%."}]
---
# Design Drill: Availability of dependencies in series #35

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
