---
slug: "sd01-availability-serial-1"
title: "Design Drill: Availability of dependencies in series #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99%), service B (99.5%), service C (99.9%), service D (99.5%). What is the best possible availability?","options":["100%","99.48%","97.91%","99%"],"answer":2,"explanation":"Multiply them: 97.91%."},{"prompt":"A request needs **all** of: service A (99%), service B (99.95%). What is the best possible availability?","options":["99%","99.99%","98.95%","99.48%"],"answer":2,"explanation":"Multiply them: 98.95%."},{"prompt":"A request needs **all** of: service A (99%), service B (99.5%), service C (99.9%). What is the best possible availability?","options":["99.47%","98.41%","99%","100%"],"answer":1,"explanation":"Multiply them: 98.41%."},{"prompt":"A request needs **all** of: service A (99.95%), service B (99.9%). What is the best possible availability?","options":["99.9%","100%","99.85%","99.92%"],"answer":2,"explanation":"Multiply them: 99.85%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99.9%), service C (99.5%), service D (99.95%). What is the best possible availability?","options":["100%","99.71%","99.5%","98.85%"],"answer":3,"explanation":"Multiply them: 98.85%."}]
---
# Design Drill: Availability of dependencies in series #1

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
