---
slug: "sd01-availability-serial-38"
title: "Design Drill: Availability of dependencies in series #38"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99.9%), service B (99.5%), service C (99%), service D (99.5%). What is the best possible availability?","options":["100%","97.91%","99%","99.48%"],"answer":1,"explanation":"Multiply them: 97.91%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99%), service C (99.9%), service D (99.5%). What is the best possible availability?","options":["98.4%","99.6%","99%","100%"],"answer":0,"explanation":"Multiply them: 98.4%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99.99%), service C (99%), service D (99.99%). What is the best possible availability?","options":["98.97%","99.74%","99%","100%"],"answer":0,"explanation":"Multiply them: 98.97%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99.9%), service C (99.95%), service D (99.9%). What is the best possible availability?","options":["99.94%","99.74%","99.9%","100%"],"answer":1,"explanation":"Multiply them: 99.74%."},{"prompt":"A request needs **all** of: service A (99.95%), service B (99.95%), service C (99%), service D (99.99%). What is the best possible availability?","options":["100%","98.89%","99.72%","99%"],"answer":1,"explanation":"Multiply them: 98.89%."}]
---
# Design Drill: Availability of dependencies in series #38

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
