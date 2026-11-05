---
slug: "sd01-availability-serial-17"
title: "Design Drill: Availability of dependencies in series #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99.5%), service B (99.9%), service C (99.99%), service D (99%). What is the best possible availability?","options":["98.4%","99%","99.6%","100%"],"answer":0,"explanation":"Multiply them: 98.4%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99.99%), service C (99.9%), service D (99%). What is the best possible availability?","options":["100%","99.72%","99%","98.88%"],"answer":3,"explanation":"Multiply them: 98.88%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99.95%), service C (99.99%). What is the best possible availability?","options":["99.95%","100%","99.93%","99.98%"],"answer":2,"explanation":"Multiply them: 99.93%."},{"prompt":"A request needs **all** of: service A (99.9%), service B (99.5%), service C (99.99%). What is the best possible availability?","options":["99.5%","100%","99.39%","99.8%"],"answer":2,"explanation":"Multiply them: 99.39%."},{"prompt":"A request needs **all** of: service A (99.9%), service B (99.5%), service C (99.5%), service D (99.99%). What is the best possible availability?","options":["98.89%","99.72%","100%","99.5%"],"answer":0,"explanation":"Multiply them: 98.89%."}]
---
# Design Drill: Availability of dependencies in series #17

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
