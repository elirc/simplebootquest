---
slug: "sd01-availability-serial-58"
title: "Design Drill: Availability of dependencies in series #58"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99.5%), service B (99%), service C (99.9%), service D (99.95%). What is the best possible availability?","options":["100%","99%","98.36%","99.59%"],"answer":2,"explanation":"Multiply them: 98.36%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99.5%), service C (99.5%), service D (99.9%). What is the best possible availability?","options":["100%","99.5%","99.6%","98.41%"],"answer":3,"explanation":"Multiply them: 98.41%."},{"prompt":"A request needs **all** of: service A (99%), service B (99.95%), service C (99.99%), service D (99%). What is the best possible availability?","options":["97.95%","99.48%","99%","100%"],"answer":0,"explanation":"Multiply them: 97.95%."},{"prompt":"A request needs **all** of: service A (99.95%), service B (99.5%), service C (99.5%), service D (99%). What is the best possible availability?","options":["97.96%","100%","99.49%","99%"],"answer":0,"explanation":"Multiply them: 97.96%."},{"prompt":"A request needs **all** of: service A (99%), service B (99.95%), service C (99%), service D (99%). What is the best possible availability?","options":["99%","100%","99.24%","96.98%"],"answer":3,"explanation":"Multiply them: 96.98%."}]
---
# Design Drill: Availability of dependencies in series #58

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
