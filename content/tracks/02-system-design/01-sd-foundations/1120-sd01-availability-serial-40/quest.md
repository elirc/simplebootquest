---
slug: "sd01-availability-serial-40"
title: "Design Drill: Availability of dependencies in series #40"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99.9%), service B (99.9%), service C (99.95%). What is the best possible availability?","options":["99.92%","100%","99.9%","99.75%"],"answer":3,"explanation":"Multiply them: 99.75%."},{"prompt":"A request needs **all** of: service A (99%), service B (99.5%), service C (99.95%), service D (99%). What is the best possible availability?","options":["99.36%","100%","97.47%","99%"],"answer":2,"explanation":"Multiply them: 97.47%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99.5%), service C (99.95%), service D (99.9%). What is the best possible availability?","options":["99.71%","100%","98.85%","99.5%"],"answer":2,"explanation":"Multiply them: 98.85%."},{"prompt":"A request needs **all** of: service A (99.95%), service B (99.99%), service C (99.99%), service D (99.99%). What is the best possible availability?","options":["99.92%","99.95%","99.98%","100%"],"answer":0,"explanation":"Multiply them: 99.92%."},{"prompt":"A request needs **all** of: service A (99%), service B (99.9%), service C (99.5%), service D (99.99%). What is the best possible availability?","options":["99%","98.4%","100%","99.6%"],"answer":1,"explanation":"Multiply them: 98.4%."}]
---
# Design Drill: Availability of dependencies in series #40

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
