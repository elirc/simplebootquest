---
slug: "sd01-availability-serial-39"
title: "Design Drill: Availability of dependencies in series #39"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99.5%), service B (99.9%), service C (99.99%), service D (99.9%). What is the best possible availability?","options":["99.5%","100%","99.29%","99.82%"],"answer":2,"explanation":"Multiply them: 99.29%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99.9%), service C (99.99%). What is the best possible availability?","options":["99.96%","100%","99.9%","99.88%"],"answer":3,"explanation":"Multiply them: 99.88%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99.95%), service C (99.5%), service D (99.95%). What is the best possible availability?","options":["99.39%","100%","99.5%","99.85%"],"answer":0,"explanation":"Multiply them: 99.39%."},{"prompt":"A request needs **all** of: service A (99.95%), service B (99.5%), service C (99.99%). What is the best possible availability?","options":["99.5%","99.81%","99.44%","100%"],"answer":2,"explanation":"Multiply them: 99.44%."},{"prompt":"A request needs **all** of: service A (99%), service B (99.9%), service C (99.9%), service D (99%). What is the best possible availability?","options":["100%","99%","99.45%","97.81%"],"answer":3,"explanation":"Multiply them: 97.81%."}]
---
# Design Drill: Availability of dependencies in series #39

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
