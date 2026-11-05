---
slug: "sd01-availability-serial-7"
title: "Design Drill: Availability of dependencies in series #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99%), service B (99%), service C (99.95%). What is the best possible availability?","options":["99.32%","97.96%","100%","99%"],"answer":1,"explanation":"Multiply them: 97.96%."},{"prompt":"A request needs **all** of: service A (99.9%), service B (99.9%), service C (99.9%). What is the best possible availability?","options":["99.7%","99.9%","100%","98.7%"],"answer":0,"explanation":"Multiply them: 99.7%."},{"prompt":"A request needs **all** of: service A (99%), service B (99.9%), service C (99%). What is the best possible availability?","options":["99.3%","100%","97.91%","99%"],"answer":2,"explanation":"Multiply them: 97.91%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99.99%), service C (99.9%). What is the best possible availability?","options":["99.5%","99.8%","99.39%","100%"],"answer":2,"explanation":"Multiply them: 99.39%."},{"prompt":"A request needs **all** of: service A (99%), service B (99.9%), service C (99.5%). What is the best possible availability?","options":["99.47%","98.41%","99%","100%"],"answer":1,"explanation":"Multiply them: 98.41%."}]
---
# Design Drill: Availability of dependencies in series #7

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
