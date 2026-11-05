---
slug: "sd01-availability-serial-26"
title: "Design Drill: Availability of dependencies in series #26"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99.95%), service B (99.5%), service C (99.95%), service D (99%). What is the best possible availability?","options":["100%","99.6%","99%","98.41%"],"answer":3,"explanation":"Multiply them: 98.41%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99.99%), service C (99.5%). What is the best possible availability?","options":["99.48%","99.5%","99.83%","100%"],"answer":0,"explanation":"Multiply them: 99.48%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99%), service C (99%). What is the best possible availability?","options":["99%","100%","98%","99.33%"],"answer":2,"explanation":"Multiply them: 98%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99.99%), service C (99.95%). What is the best possible availability?","options":["100%","99.44%","99.81%","99.5%"],"answer":1,"explanation":"Multiply them: 99.44%."},{"prompt":"A request needs **all** of: service A (99.9%), service B (99.99%), service C (99.5%), service D (99%). What is the best possible availability?","options":["99.6%","100%","99%","98.4%"],"answer":3,"explanation":"Multiply them: 98.4%."}]
---
# Design Drill: Availability of dependencies in series #26

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
