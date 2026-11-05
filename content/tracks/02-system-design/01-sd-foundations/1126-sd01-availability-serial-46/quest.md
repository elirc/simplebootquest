---
slug: "sd01-availability-serial-46"
title: "Design Drill: Availability of dependencies in series #46"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99.99%), service B (99.5%), service C (99.9%), service D (99.95%). What is the best possible availability?","options":["99.34%","99.84%","100%","99.5%"],"answer":0,"explanation":"Multiply them: 99.34%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99.99%), service C (99.5%), service D (99.95%). What is the best possible availability?","options":["99.73%","99.5%","100%","98.94%"],"answer":3,"explanation":"Multiply them: 98.94%."},{"prompt":"A request needs **all** of: service A (99%), service B (99%), service C (99%), service D (99%). What is the best possible availability?","options":["100%","95.1%","99%","96.06%"],"answer":3,"explanation":"Multiply them: 96.06%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99.99%), service C (99.9%), service D (99.95%). What is the best possible availability?","options":["100%","99.5%","99.34%","99.84%"],"answer":2,"explanation":"Multiply them: 99.34%."},{"prompt":"A request needs **all** of: service A (99.95%), service B (99%), service C (99.9%), service D (99.5%). What is the best possible availability?","options":["99.59%","99%","98.36%","100%"],"answer":2,"explanation":"Multiply them: 98.36%."}]
---
# Design Drill: Availability of dependencies in series #46

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
