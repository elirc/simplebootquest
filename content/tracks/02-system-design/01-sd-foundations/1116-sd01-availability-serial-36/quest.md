---
slug: "sd01-availability-serial-36"
title: "Design Drill: Availability of dependencies in series #36"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99.9%), service B (99.9%), service C (99.9%), service D (99%). What is the best possible availability?","options":["100%","99.67%","99%","98.7%"],"answer":3,"explanation":"Multiply them: 98.7%."},{"prompt":"A request needs **all** of: service A (99.9%), service B (99%), service C (99.9%), service D (99.9%). What is the best possible availability?","options":["100%","98.7%","99%","99.67%"],"answer":1,"explanation":"Multiply them: 98.7%."},{"prompt":"A request needs **all** of: service A (99.9%), service B (99.95%), service C (99.9%). What is the best possible availability?","options":["99.75%","99.92%","99.9%","100%"],"answer":0,"explanation":"Multiply them: 99.75%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99.9%), service C (99.9%). What is the best possible availability?","options":["99.5%","99.3%","99.77%","100%"],"answer":1,"explanation":"Multiply them: 99.3%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99.99%), service C (99.99%), service D (99.9%). What is the best possible availability?","options":["99.84%","99.38%","100%","99.5%"],"answer":1,"explanation":"Multiply them: 99.38%."}]
---
# Design Drill: Availability of dependencies in series #36

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
