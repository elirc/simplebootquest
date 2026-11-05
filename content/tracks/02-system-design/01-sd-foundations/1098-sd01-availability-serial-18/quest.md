---
slug: "sd01-availability-serial-18"
title: "Design Drill: Availability of dependencies in series #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99.5%), service B (99.95%). What is the best possible availability?","options":["99.72%","99.45%","99.5%","100%"],"answer":1,"explanation":"Multiply them: 99.45%."},{"prompt":"A request needs **all** of: service A (99.95%), service B (99%). What is the best possible availability?","options":["99.48%","99%","98.95%","99.99%"],"answer":2,"explanation":"Multiply them: 98.95%."},{"prompt":"A request needs **all** of: service A (99%), service B (99.99%), service C (99.99%), service D (99.99%). What is the best possible availability?","options":["100%","99.74%","99%","98.97%"],"answer":3,"explanation":"Multiply them: 98.97%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99.9%), service C (99.95%), service D (99%). What is the best possible availability?","options":["100%","99%","99.71%","98.84%"],"answer":3,"explanation":"Multiply them: 98.84%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99.5%), service C (99.99%), service D (99.99%). What is the best possible availability?","options":["99.87%","99.5%","100%","99.47%"],"answer":3,"explanation":"Multiply them: 99.47%."}]
---
# Design Drill: Availability of dependencies in series #18

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
