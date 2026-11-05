---
slug: "sd01-availability-serial-11"
title: "Design Drill: Availability of dependencies in series #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99%), service B (99.5%). What is the best possible availability?","options":["99.25%","99.99%","99%","98.5%"],"answer":3,"explanation":"Multiply them: 98.5%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99.5%), service C (99.9%), service D (99.95%). What is the best possible availability?","options":["98.85%","99.71%","99.5%","100%"],"answer":0,"explanation":"Multiply them: 98.85%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99.5%), service C (99.5%), service D (99%). What is the best possible availability?","options":["99%","97.52%","99.37%","100%"],"answer":1,"explanation":"Multiply them: 97.52%."},{"prompt":"A request needs **all** of: service A (99.9%), service B (99%), service C (99.9%). What is the best possible availability?","options":["99%","99.6%","100%","98.8%"],"answer":3,"explanation":"Multiply them: 98.8%."},{"prompt":"A request needs **all** of: service A (99%), service B (99%), service C (99.95%), service D (99.9%). What is the best possible availability?","options":["99%","99.46%","97.86%","100%"],"answer":2,"explanation":"Multiply them: 97.86%."}]
---
# Design Drill: Availability of dependencies in series #11

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
