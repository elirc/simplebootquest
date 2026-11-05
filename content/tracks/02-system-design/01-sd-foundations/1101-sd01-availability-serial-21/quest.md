---
slug: "sd01-availability-serial-21"
title: "Design Drill: Availability of dependencies in series #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99.9%), service B (99.99%). What is the best possible availability?","options":["99.89%","99.9%","100%","99.94%"],"answer":0,"explanation":"Multiply them: 99.89%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99.95%), service C (99.9%). What is the best possible availability?","options":["100%","99.5%","99.35%","99.78%"],"answer":2,"explanation":"Multiply them: 99.35%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99.95%), service C (99.99%), service D (99.5%). What is the best possible availability?","options":["99.73%","98.94%","100%","99.5%"],"answer":1,"explanation":"Multiply them: 98.94%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99%), service C (99.5%), service D (99.95%). What is the best possible availability?","options":["99.61%","99%","100%","98.45%"],"answer":3,"explanation":"Multiply them: 98.45%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99.5%), service C (99.5%), service D (99.99%). What is the best possible availability?","options":["98.98%","99.5%","99.74%","100%"],"answer":0,"explanation":"Multiply them: 98.98%."}]
---
# Design Drill: Availability of dependencies in series #21

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
