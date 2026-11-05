---
slug: "sd01-availability-serial-47"
title: "Design Drill: Availability of dependencies in series #47"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99.99%), service B (99.9%), service C (99.9%), service D (99%). What is the best possible availability?","options":["98.79%","99.7%","100%","99%"],"answer":0,"explanation":"Multiply them: 98.79%."},{"prompt":"A request needs **all** of: service A (99%), service B (99.95%), service C (99.95%). What is the best possible availability?","options":["99.63%","98.9%","100%","99%"],"answer":1,"explanation":"Multiply them: 98.9%."},{"prompt":"A request needs **all** of: service A (99.95%), service B (99.5%), service C (99.9%). What is the best possible availability?","options":["99.5%","99.78%","99.35%","100%"],"answer":2,"explanation":"Multiply them: 99.35%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99.99%), service C (99.99%). What is the best possible availability?","options":["99.48%","99.83%","99.5%","100%"],"answer":0,"explanation":"Multiply them: 99.48%."},{"prompt":"A request needs **all** of: service A (99.95%), service B (99.99%), service C (99.99%), service D (99.5%). What is the best possible availability?","options":["99.43%","99.5%","100%","99.86%"],"answer":0,"explanation":"Multiply them: 99.43%."}]
---
# Design Drill: Availability of dependencies in series #47

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
