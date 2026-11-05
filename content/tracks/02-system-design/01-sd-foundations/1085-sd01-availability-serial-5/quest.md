---
slug: "sd01-availability-serial-5"
title: "Design Drill: Availability of dependencies in series #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99.9%), service B (99%). What is the best possible availability?","options":["99.45%","99%","98.9%","99.99%"],"answer":2,"explanation":"Multiply them: 98.9%."},{"prompt":"A request needs **all** of: service A (99%), service B (99.9%), service C (99.95%), service D (99.5%). What is the best possible availability?","options":["98.36%","99%","99.59%","100%"],"answer":0,"explanation":"Multiply them: 98.36%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99.99%). What is the best possible availability?","options":["99.49%","99.5%","99.74%","100%"],"answer":0,"explanation":"Multiply them: 99.49%."},{"prompt":"A request needs **all** of: service A (99.9%), service B (99.9%). What is the best possible availability?","options":["100%","98.8%","99.9%","99.8%"],"answer":3,"explanation":"Multiply them: 99.8%."},{"prompt":"A request needs **all** of: service A (99.95%), service B (99.99%). What is the best possible availability?","options":["100%","99.95%","99.97%","99.94%"],"answer":3,"explanation":"Multiply them: 99.94%."}]
---
# Design Drill: Availability of dependencies in series #5

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
