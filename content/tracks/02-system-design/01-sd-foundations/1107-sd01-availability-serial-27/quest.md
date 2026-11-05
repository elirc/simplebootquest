---
slug: "sd01-availability-serial-27"
title: "Design Drill: Availability of dependencies in series #27"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99.9%), service B (99.5%), service C (99.95%). What is the best possible availability?","options":["99.78%","99.5%","100%","99.35%"],"answer":3,"explanation":"Multiply them: 99.35%."},{"prompt":"A request needs **all** of: service A (99.95%), service B (99.9%), service C (99%), service D (99.5%). What is the best possible availability?","options":["100%","99%","98.36%","99.59%"],"answer":2,"explanation":"Multiply them: 98.36%."},{"prompt":"A request needs **all** of: service A (99.9%), service B (99%), service C (99.95%). What is the best possible availability?","options":["100%","99%","99.62%","98.85%"],"answer":3,"explanation":"Multiply them: 98.85%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99%), service C (99.95%), service D (99.99%). What is the best possible availability?","options":["98.93%","100%","99%","99.73%"],"answer":0,"explanation":"Multiply them: 98.93%."},{"prompt":"A request needs **all** of: service A (99%), service B (99%), service C (99.5%), service D (99%). What is the best possible availability?","options":["99.13%","100%","99%","96.54%"],"answer":3,"explanation":"Multiply them: 96.54%."}]
---
# Design Drill: Availability of dependencies in series #27

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
