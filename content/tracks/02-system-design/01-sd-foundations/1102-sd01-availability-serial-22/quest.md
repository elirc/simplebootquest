---
slug: "sd01-availability-serial-22"
title: "Design Drill: Availability of dependencies in series #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99%), service B (99.99%), service C (99.9%). What is the best possible availability?","options":["100%","99%","99.63%","98.89%"],"answer":3,"explanation":"Multiply them: 98.89%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99%), service C (99.5%). What is the best possible availability?","options":["98.01%","99.33%","99%","100%"],"answer":0,"explanation":"Multiply them: 98.01%."},{"prompt":"A request needs **all** of: service A (99%), service B (99.95%), service C (99.99%), service D (99.9%). What is the best possible availability?","options":["99.71%","99%","100%","98.84%"],"answer":3,"explanation":"Multiply them: 98.84%."},{"prompt":"A request needs **all** of: service A (99%), service B (99.99%). What is the best possible availability?","options":["99.99%","98.99%","99%","99.5%"],"answer":1,"explanation":"Multiply them: 98.99%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99.99%), service C (99.99%). What is the best possible availability?","options":["98.97%","100%","99.97%","99.99%"],"answer":2,"explanation":"Multiply them: 99.97%."}]
---
# Design Drill: Availability of dependencies in series #22

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
