---
slug: "sd01-availability-serial-9"
title: "Design Drill: Availability of dependencies in series #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99.5%), service B (99.9%). What is the best possible availability?","options":["99.4%","99.5%","99.7%","100%"],"answer":0,"explanation":"Multiply them: 99.4%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99%). What is the best possible availability?","options":["98.99%","99%","99.5%","99.99%"],"answer":0,"explanation":"Multiply them: 98.99%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99.5%). What is the best possible availability?","options":["99.49%","100%","99.5%","99.74%"],"answer":0,"explanation":"Multiply them: 99.49%."},{"prompt":"A request needs **all** of: service A (99.9%), service B (99.9%), service C (99%). What is the best possible availability?","options":["100%","99.6%","98.8%","99%"],"answer":2,"explanation":"Multiply them: 98.8%."},{"prompt":"A request needs **all** of: service A (99.9%), service B (99.5%), service C (99.9%). What is the best possible availability?","options":["100%","99.5%","99.77%","99.3%"],"answer":3,"explanation":"Multiply them: 99.3%."}]
---
# Design Drill: Availability of dependencies in series #9

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
