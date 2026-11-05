---
slug: "sd01-availability-serial-19"
title: "Design Drill: Availability of dependencies in series #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99%), service B (99.9%), service C (99.5%), service D (99.9%). What is the best possible availability?","options":["98.31%","99.58%","99%","100%"],"answer":0,"explanation":"Multiply them: 98.31%."},{"prompt":"A request needs **all** of: service A (99.9%), service B (99%), service C (99.9%), service D (99%). What is the best possible availability?","options":["100%","99%","99.45%","97.81%"],"answer":3,"explanation":"Multiply them: 97.81%."},{"prompt":"A request needs **all** of: service A (99.95%), service B (99%), service C (99%), service D (99.5%). What is the best possible availability?","options":["97.47%","99%","100%","99.36%"],"answer":0,"explanation":"Multiply them: 97.47%."},{"prompt":"A request needs **all** of: service A (99.9%), service B (99.5%), service C (99.99%), service D (99.99%). What is the best possible availability?","options":["99.84%","99.5%","99.38%","100%"],"answer":2,"explanation":"Multiply them: 99.38%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99.9%), service C (99%), service D (99.95%). What is the best possible availability?","options":["98.84%","99.71%","100%","99%"],"answer":0,"explanation":"Multiply them: 98.84%."}]
---
# Design Drill: Availability of dependencies in series #19

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
