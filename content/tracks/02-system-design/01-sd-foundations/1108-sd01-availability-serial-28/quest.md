---
slug: "sd01-availability-serial-28"
title: "Design Drill: Availability of dependencies in series #28"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99.99%), service B (99%), service C (99.9%), service D (99.99%). What is the best possible availability?","options":["99.72%","100%","98.88%","99%"],"answer":2,"explanation":"Multiply them: 98.88%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99.9%), service C (99.9%). What is the best possible availability?","options":["99.93%","99.9%","100%","99.79%"],"answer":3,"explanation":"Multiply them: 99.79%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99%), service C (99.99%). What is the best possible availability?","options":["100%","99%","99.5%","98.5%"],"answer":3,"explanation":"Multiply them: 98.5%."},{"prompt":"A request needs **all** of: service A (99%), service B (99.95%), service C (99%), service D (99.5%). What is the best possible availability?","options":["100%","99.36%","99%","97.47%"],"answer":3,"explanation":"Multiply them: 97.47%."},{"prompt":"A request needs **all** of: service A (99.9%), service B (99.5%), service C (99%), service D (99.9%). What is the best possible availability?","options":["98.31%","100%","99%","99.58%"],"answer":0,"explanation":"Multiply them: 98.31%."}]
---
# Design Drill: Availability of dependencies in series #28

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
