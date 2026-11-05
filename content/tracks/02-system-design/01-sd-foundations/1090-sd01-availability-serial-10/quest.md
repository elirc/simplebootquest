---
slug: "sd01-availability-serial-10"
title: "Design Drill: Availability of dependencies in series #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99%), service B (99.5%), service C (99%), service D (99.5%). What is the best possible availability?","options":["97.03%","100%","99%","99.25%"],"answer":0,"explanation":"Multiply them: 97.03%."},{"prompt":"A request needs **all** of: service A (99.95%), service B (99.9%), service C (99%). What is the best possible availability?","options":["100%","99%","98.85%","99.62%"],"answer":2,"explanation":"Multiply them: 98.85%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99.95%), service C (99.5%). What is the best possible availability?","options":["99.44%","99.5%","99.81%","100%"],"answer":0,"explanation":"Multiply them: 99.44%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99.95%), service C (99.5%). What is the best possible availability?","options":["99.5%","100%","99.65%","98.95%"],"answer":3,"explanation":"Multiply them: 98.95%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99.5%), service C (99.5%). What is the best possible availability?","options":["99.66%","98.99%","99.5%","100%"],"answer":1,"explanation":"Multiply them: 98.99%."}]
---
# Design Drill: Availability of dependencies in series #10

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
