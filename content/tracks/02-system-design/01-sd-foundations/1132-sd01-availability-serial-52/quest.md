---
slug: "sd01-availability-serial-52"
title: "Design Drill: Availability of dependencies in series #52"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99.9%), service B (99.9%), service C (99.9%), service D (99.9%). What is the best possible availability?","options":["99.6%","100%","98.6%","99.9%"],"answer":0,"explanation":"Multiply them: 99.6%."},{"prompt":"A request needs **all** of: service A (99.9%), service B (99.99%), service C (99.9%), service D (99%). What is the best possible availability?","options":["99.7%","100%","99%","98.79%"],"answer":3,"explanation":"Multiply them: 98.79%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99.95%), service C (99.95%), service D (99.5%). What is the best possible availability?","options":["99.85%","99.39%","99.5%","100%"],"answer":1,"explanation":"Multiply them: 99.39%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99.5%), service C (99%). What is the best possible availability?","options":["98.5%","99%","99.5%","100%"],"answer":0,"explanation":"Multiply them: 98.5%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99%), service C (99%), service D (99%). What is the best possible availability?","options":["100%","99%","99.13%","96.54%"],"answer":3,"explanation":"Multiply them: 96.54%."}]
---
# Design Drill: Availability of dependencies in series #52

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
