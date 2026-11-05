---
slug: "sd01-availability-serial-41"
title: "Design Drill: Availability of dependencies in series #41"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99.9%), service B (99.5%), service C (99.95%), service D (99.5%). What is the best possible availability?","options":["100%","99.71%","99.5%","98.85%"],"answer":3,"explanation":"Multiply them: 98.85%."},{"prompt":"A request needs **all** of: service A (99%), service B (99.99%), service C (99.9%), service D (99.99%). What is the best possible availability?","options":["99%","100%","99.72%","98.88%"],"answer":3,"explanation":"Multiply them: 98.88%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99.9%), service C (99.5%), service D (99%). What is the best possible availability?","options":["100%","99.6%","99%","98.4%"],"answer":3,"explanation":"Multiply them: 98.4%."},{"prompt":"A request needs **all** of: service A (99.9%), service B (99%), service C (99.5%), service D (99.95%). What is the best possible availability?","options":["98.36%","99%","99.59%","100%"],"answer":0,"explanation":"Multiply them: 98.36%."},{"prompt":"A request needs **all** of: service A (99.9%), service B (99.95%), service C (99%), service D (99.95%). What is the best possible availability?","options":["99.7%","100%","98.8%","99%"],"answer":2,"explanation":"Multiply them: 98.8%."}]
---
# Design Drill: Availability of dependencies in series #41

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
