---
slug: "sd01-availability-serial-59"
title: "Design Drill: Availability of dependencies in series #59"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99.99%), service B (99.99%), service C (99.9%), service D (99.99%). What is the best possible availability?","options":["99.9%","100%","99.87%","99.97%"],"answer":2,"explanation":"Multiply them: 99.87%."},{"prompt":"A request needs **all** of: service A (99%), service B (99%), service C (99.99%). What is the best possible availability?","options":["99.33%","98%","99%","100%"],"answer":1,"explanation":"Multiply them: 98%."},{"prompt":"A request needs **all** of: service A (99.9%), service B (99.5%), service C (99.9%), service D (99.95%). What is the best possible availability?","options":["99.25%","99.5%","99.81%","100%"],"answer":0,"explanation":"Multiply them: 99.25%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99.9%), service C (99.5%), service D (99%). What is the best possible availability?","options":["97.91%","99.48%","99%","100%"],"answer":0,"explanation":"Multiply them: 97.91%."},{"prompt":"A request needs **all** of: service A (99%), service B (99.5%), service C (99.5%). What is the best possible availability?","options":["100%","99%","98.01%","99.33%"],"answer":2,"explanation":"Multiply them: 98.01%."}]
---
# Design Drill: Availability of dependencies in series #59

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
