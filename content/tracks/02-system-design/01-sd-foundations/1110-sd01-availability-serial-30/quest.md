---
slug: "sd01-availability-serial-30"
title: "Design Drill: Availability of dependencies in series #30"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99.95%), service B (99%), service C (99.9%), service D (99.9%). What is the best possible availability?","options":["99.69%","99%","98.75%","100%"],"answer":2,"explanation":"Multiply them: 98.75%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99.99%), service C (99.9%). What is the best possible availability?","options":["99.9%","99.96%","100%","99.88%"],"answer":3,"explanation":"Multiply them: 99.88%."},{"prompt":"A request needs **all** of: service A (99.99%), service B (99.5%), service C (99.99%). What is the best possible availability?","options":["99.83%","99.5%","99.48%","100%"],"answer":2,"explanation":"Multiply them: 99.48%."},{"prompt":"A request needs **all** of: service A (99.9%), service B (99.99%), service C (99.5%), service D (99.5%). What is the best possible availability?","options":["99.5%","100%","98.89%","99.72%"],"answer":2,"explanation":"Multiply them: 98.89%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99.9%), service C (99%). What is the best possible availability?","options":["99.47%","100%","99%","98.41%"],"answer":3,"explanation":"Multiply them: 98.41%."}]
---
# Design Drill: Availability of dependencies in series #30

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
