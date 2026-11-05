---
slug: "sd01-availability-serial-49"
title: "Design Drill: Availability of dependencies in series #49"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99.9%), service B (99.5%), service C (99.5%), service D (99.9%). What is the best possible availability?","options":["98.8%","100%","99.5%","99.7%"],"answer":0,"explanation":"Multiply them: 98.8%."},{"prompt":"A request needs **all** of: service A (99.95%), service B (99.9%), service C (99.9%), service D (99%). What is the best possible availability?","options":["99.69%","98.75%","100%","99%"],"answer":1,"explanation":"Multiply them: 98.75%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99.95%), service C (99.9%). What is the best possible availability?","options":["99.95%","99.9%","99.84%","100%"],"answer":2,"explanation":"Multiply them: 99.84%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99.99%), service C (99.9%), service D (99%). What is the best possible availability?","options":["100%","98.4%","99.6%","99%"],"answer":1,"explanation":"Multiply them: 98.4%."},{"prompt":"A request needs **all** of: service A (99.9%), service B (99%), service C (99.5%). What is the best possible availability?","options":["99.47%","99%","100%","98.41%"],"answer":3,"explanation":"Multiply them: 98.41%."}]
---
# Design Drill: Availability of dependencies in series #49

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
