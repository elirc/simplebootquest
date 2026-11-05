---
slug: "sd01-availability-serial-60"
title: "Design Drill: Availability of dependencies in series #60"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99%), service B (99.5%), service C (99.99%), service D (99.99%). What is the best possible availability?","options":["99.62%","99%","98.49%","100%"],"answer":2,"explanation":"Multiply them: 98.49%."},{"prompt":"A request needs **all** of: service A (99.95%), service B (99%), service C (99.5%), service D (99.99%). What is the best possible availability?","options":["99.61%","100%","98.45%","99%"],"answer":2,"explanation":"Multiply them: 98.45%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99.5%), service C (99%), service D (99%). What is the best possible availability?","options":["99.25%","99%","97.03%","100%"],"answer":2,"explanation":"Multiply them: 97.03%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99%), service C (99.99%), service D (99.95%). What is the best possible availability?","options":["99.61%","98.45%","99%","100%"],"answer":1,"explanation":"Multiply them: 98.45%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99.9%), service C (99%), service D (99.5%). What is the best possible availability?","options":["99.6%","98.4%","99%","100%"],"answer":1,"explanation":"Multiply them: 98.4%."}]
---
# Design Drill: Availability of dependencies in series #60

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
