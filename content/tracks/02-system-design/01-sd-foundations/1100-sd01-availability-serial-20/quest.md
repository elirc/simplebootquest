---
slug: "sd01-availability-serial-20"
title: "Design Drill: Availability of dependencies in series #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A request needs **all** of: service A (99.99%), service B (99.95%), service C (99.95%), service D (99.95%). What is the best possible availability?","options":["100%","99.95%","99.96%","99.84%"],"answer":3,"explanation":"Multiply them: 99.84%."},{"prompt":"A request needs **all** of: service A (99.9%), service B (99%), service C (99.5%), service D (99.99%). What is the best possible availability?","options":["99.6%","98.4%","100%","99%"],"answer":1,"explanation":"Multiply them: 98.4%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99.95%), service C (99%), service D (99.5%). What is the best possible availability?","options":["99%","100%","99.49%","97.96%"],"answer":3,"explanation":"Multiply them: 97.96%."},{"prompt":"A request needs **all** of: service A (99.5%), service B (99.95%), service C (99.99%), service D (99.9%). What is the best possible availability?","options":["99.34%","99.83%","100%","99.5%"],"answer":0,"explanation":"Multiply them: 99.34%."},{"prompt":"A request needs **all** of: service A (99%), service B (99%), service C (99%). What is the best possible availability?","options":["99%","96.06%","97.03%","100%"],"answer":2,"explanation":"Multiply them: 97.03%."}]
---
# Design Drill: Availability of dependencies in series #20

If a request needs **every** dependency, multiply their availabilities: 0.999 × 0.999 ≈ 0.998. Each required dependency lowers your ceiling.
