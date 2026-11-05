---
slug: "sd05-drain-2"
title: "Design Drill: Draining a backlog #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **149,000 jobs** waiting. Workers finish **120/s** while new jobs arrive at **80/s**. How long until the backlog is gone?","options":["It never drains","~31 minutes","~62.1 minutes","~20.7 minutes"],"answer":2,"explanation":"149,000 ÷ (120 − 80) ≈ 62.1 minutes."},{"prompt":"A queue has **10,000 jobs** waiting. Workers finish **170/s** while new jobs arrive at **90/s**. How long until the backlog is gone?","options":["~0.98 minutes","It never drains","~1.85 minutes","~2.08 minutes"],"answer":3,"explanation":"10,000 ÷ (170 − 90) ≈ 2.08 minutes."},{"prompt":"A queue has **42,000 jobs** waiting. Workers finish **170/s** while new jobs arrive at **50/s**. How long until the backlog is gone?","options":["It never drains","~4.12 minutes","~14 minutes","~5.83 minutes"],"answer":3,"explanation":"42,000 ÷ (170 − 50) ≈ 5.83 minutes."},{"prompt":"A queue has **12,000 jobs** waiting. Workers finish **60/s** while new jobs arrive at **20/s**. How long until the backlog is gone?","options":["~5 minutes","~3.33 minutes","~10 minutes","It never drains"],"answer":0,"explanation":"12,000 ÷ (60 − 20) ≈ 5 minutes."},{"prompt":"A queue has **38,000 jobs** waiting. Workers finish **200/s** while new jobs arrive at **180/s**. How long until the backlog is gone?","options":["~3.17 minutes","It never drains","~3.52 minutes","~31.7 minutes"],"answer":3,"explanation":"38,000 ÷ (200 − 180) ≈ 31.7 minutes."}]
---
# Design Drill: Draining a backlog #2

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
