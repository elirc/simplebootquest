---
slug: "sd01-availability-serial-29"
title: "Design Drill: Availability of dependencies in series #29"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99.95%), service B (99.9%), service C (99.5%), service D (99.99%). What is the best possible availability?","options":["100%","99.84%","99.5%","99.34%"],"answer":3,"explanation":"Multiply them: 99.34%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99.99%), service C (99.5%). What is the best possible availability?","options":["99.5%","100%","99.66%","98.99%"],"answer":3,"explanation":"Multiply them: 98.99%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99.9%), service C (99.5%), service D (99.95%). What is the best possible availability?","options":["99.34%","100%","99.5%","99.84%"],"answer":0,"explanation":"Multiply them: 99.34%."},{"prompt":"A request needs **all** of: service A (99%), service B (99.9%), service C (99.95%), service D (99.95%). What is the best possible availability?","options":["99.7%","98.8%","100%","99%"],"answer":1,"explanation":"Multiply them: 98.8%."},{"prompt":"A request needs **all** of: service A (99.9%), service B (99.95%), service C (99.5%). What is the best possible availability?","options":["99.78%","100%","99.5%","99.35%"],"answer":3,"explanation":"Multiply them: 99.35%."}]
---
# Design Drill: Availability of dependencies in series #29

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
