---
slug: "sd01-availability-serial-16"
title: "Design Drill: Availability of dependencies in series #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99%), service B (99.95%), service C (99.95%), service D (99.99%). What is the best possible availability?","options":["100%","99.72%","98.89%","99%"],"answer":2,"explanation":"Multiply them: 98.89%."},{"prompt":"A request needs **all** of: service A (99%), service B (99.5%), service C (99.99%). What is the best possible availability?","options":["100%","99%","98.5%","99.5%"],"answer":2,"explanation":"Multiply them: 98.5%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99.95%). What is the best possible availability?","options":["99.94%","99.97%","99.95%","100%"],"answer":0,"explanation":"Multiply them: 99.94%."},{"prompt":"A request needs **all** of: service A (99%), service B (99.9%), service C (99.5%), service D (99.5%). What is the best possible availability?","options":["100%","99.48%","99%","97.91%"],"answer":3,"explanation":"Multiply them: 97.91%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99.5%), service C (99%), service D (99.95%). What is the best possible availability?","options":["99%","100%","99.61%","98.45%"],"answer":3,"explanation":"Multiply them: 98.45%."}]
---
# Design Drill: Availability of dependencies in series #16

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
