---
slug: "sd01-availability-serial-42"
title: "Design Drill: Availability of dependencies in series #42"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99.5%), service B (99.95%), service C (99.99%). What is the best possible availability?","options":["99.5%","99.44%","99.81%","100%"],"answer":1,"explanation":"Multiply them: 99.44%."},{"prompt":"A request needs **all** of: service A (99.95%), service B (99.99%), service C (99%). What is the best possible availability?","options":["100%","99.65%","99%","98.94%"],"answer":3,"explanation":"Multiply them: 98.94%."},{"prompt":"A request needs **all** of: service A (99%), service B (99%), service C (99.5%). What is the best possible availability?","options":["100%","99.17%","99%","97.52%"],"answer":3,"explanation":"Multiply them: 97.52%."},{"prompt":"A request needs **all** of: service A (99.95%), service B (99.99%), service C (99.95%), service D (99.95%). What is the best possible availability?","options":["99.96%","100%","99.84%","99.95%"],"answer":2,"explanation":"Multiply them: 99.84%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99.95%), service C (99.9%), service D (99.9%). What is the best possible availability?","options":["99.9%","100%","99.74%","99.94%"],"answer":2,"explanation":"Multiply them: 99.74%."}]
---
# Design Drill: Availability of dependencies in series #42

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
