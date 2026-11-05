---
slug: "sd01-availability-serial-15"
title: "Design Drill: Availability of dependencies in series #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99.95%), service B (99.99%), service C (99.99%), service D (99.9%). What is the best possible availability?","options":["99.96%","99.9%","100%","99.83%"],"answer":3,"explanation":"Multiply them: 99.83%."},{"prompt":"A request needs **all** of: service A (99.9%), service B (99.9%), service C (99.5%), service D (99.5%). What is the best possible availability?","options":["98.8%","99.5%","100%","99.7%"],"answer":0,"explanation":"Multiply them: 98.8%."},{"prompt":"A request needs **all** of: service A (99.95%), service B (99.5%), service C (99.95%), service D (99.99%). What is the best possible availability?","options":["99.5%","99.39%","99.85%","100%"],"answer":1,"explanation":"Multiply them: 99.39%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99.9%), service C (99.95%). What is the best possible availability?","options":["99.84%","99.95%","99.9%","100%"],"answer":0,"explanation":"Multiply them: 99.84%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99.99%), service C (99.9%), service D (99.9%). What is the best possible availability?","options":["99.95%","100%","99.9%","99.78%"],"answer":3,"explanation":"Multiply them: 99.78%."}]
---
# Design Drill: Availability of dependencies in series #15

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
