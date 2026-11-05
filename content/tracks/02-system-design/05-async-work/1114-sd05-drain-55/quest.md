---
slug: "sd05-drain-55"
title: "Design Drill: Draining a backlog #55"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **178,000 jobs** waiting. Workers finish **310/s** while new jobs arrive at **80/s**. How long until the backlog is gone?","options":["~12.9 minutes","~37.1 minutes","It never drains","~9.57 minutes"],"answer":0,"explanation":"178,000 ÷ (310 − 80) ≈ 12.9 minutes."},{"prompt":"A queue has **160,000 jobs** waiting. Workers finish **210/s** while new jobs arrive at **60/s**. How long until the backlog is gone?","options":["It never drains","~44.4 minutes","~17.8 minutes","~12.7 minutes"],"answer":2,"explanation":"160,000 ÷ (210 − 60) ≈ 17.8 minutes."},{"prompt":"A queue has **184,000 jobs** waiting. Workers finish **80/s** while new jobs arrive at **60/s**. How long until the backlog is gone?","options":["~51.1 minutes","~153 minutes","~38.3 minutes","It never drains"],"answer":1,"explanation":"184,000 ÷ (80 − 60) ≈ 153 minutes."},{"prompt":"A queue has **190,000 jobs** waiting. Workers finish **230/s** while new jobs arrive at **200/s**. How long until the backlog is gone?","options":["~13.8 minutes","~106 minutes","It never drains","~15.8 minutes"],"answer":1,"explanation":"190,000 ÷ (230 − 200) ≈ 106 minutes."},{"prompt":"A queue has **12,000 jobs** waiting. Workers finish **140/s** while new jobs arrive at **100/s**. How long until the backlog is gone?","options":["It never drains","~1.43 minutes","~5 minutes","~2 minutes"],"answer":2,"explanation":"12,000 ÷ (140 − 100) ≈ 5 minutes."}]
---
# Design Drill: Draining a backlog #55

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
