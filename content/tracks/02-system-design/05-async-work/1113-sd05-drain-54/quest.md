---
slug: "sd05-drain-54"
title: "Design Drill: Draining a backlog #54"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **75,000 jobs** waiting. Workers finish **340/s** while new jobs arrive at **320/s**. How long until the backlog is gone?","options":["It never drains","~62.5 minutes","~3.91 minutes","~3.68 minutes"],"answer":1,"explanation":"75,000 ÷ (340 − 320) ≈ 62.5 minutes."},{"prompt":"A queue has **159,000 jobs** waiting. Workers finish **200/s** while new jobs arrive at **90/s**. How long until the backlog is gone?","options":["~13.3 minutes","It never drains","~29.4 minutes","~24.1 minutes"],"answer":3,"explanation":"159,000 ÷ (200 − 90) ≈ 24.1 minutes."},{"prompt":"A queue has **18,000 jobs** waiting. Workers finish **230/s** while new jobs arrive at **20/s**. How long until the backlog is gone?","options":["~15 minutes","~1.43 minutes","It never drains","~1.3 minutes"],"answer":1,"explanation":"18,000 ÷ (230 − 20) ≈ 1.43 minutes."},{"prompt":"A queue has **159,000 jobs** waiting. Workers finish **300/s** while new jobs arrive at **270/s**. How long until the backlog is gone?","options":["~8.83 minutes","It never drains","~88.3 minutes","~9.81 minutes"],"answer":2,"explanation":"159,000 ÷ (300 − 270) ≈ 88.3 minutes."},{"prompt":"A queue has **170,000 jobs** waiting. Workers finish **120/s** while new jobs arrive at **110/s**. How long until the backlog is gone?","options":["It never drains","~23.6 minutes","~283 minutes","~25.8 minutes"],"answer":2,"explanation":"170,000 ÷ (120 − 110) ≈ 283 minutes."}]
---
# Design Drill: Draining a backlog #54

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
