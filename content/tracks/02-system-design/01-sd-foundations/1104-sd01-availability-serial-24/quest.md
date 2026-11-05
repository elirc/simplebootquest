---
slug: "sd01-availability-serial-24"
title: "Design Drill: Availability of dependencies in series #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99%), service B (99.95%), service C (99.95%), service D (99.5%). What is the best possible availability?","options":["99%","100%","99.6%","98.41%"],"answer":3,"explanation":"Multiply them: 98.41%."},{"prompt":"A request needs **all** of: service A (99.95%), service B (99.95%), service C (99.95%), service D (99.5%). What is the best possible availability?","options":["99.35%","100%","99.84%","99.5%"],"answer":0,"explanation":"Multiply them: 99.35%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99.95%), service C (99%), service D (99%). What is the best possible availability?","options":["99%","99.36%","100%","97.47%"],"answer":3,"explanation":"Multiply them: 97.47%."},{"prompt":"A request needs **all** of: service A (99%), service B (99.9%). What is the best possible availability?","options":["99.99%","99.45%","99%","98.9%"],"answer":3,"explanation":"Multiply them: 98.9%."},{"prompt":"A request needs **all** of: service A (99.95%), service B (99.9%), service C (99.95%). What is the best possible availability?","options":["99.93%","99.9%","99.8%","100%"],"answer":2,"explanation":"Multiply them: 99.8%."}]
---
# Design Drill: Availability of dependencies in series #24

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
