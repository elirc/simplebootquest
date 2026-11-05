---
slug: "sd05-drain-18"
title: "Design Drill: Draining a backlog #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **9000 jobs** waiting. Workers finish **100/s** while new jobs arrive at **10/s**. How long until the backlog is gone?","options":["~15 minutes","It never drains","~1.67 minutes","~1.5 minutes"],"answer":2,"explanation":"9000 ÷ (100 − 10) ≈ 1.67 minutes."},{"prompt":"A queue has **139,000 jobs** waiting. Workers finish **330/s** while new jobs arrive at **60/s**. How long until the backlog is gone?","options":["It never drains","~7.02 minutes","~8.58 minutes","~38.6 minutes"],"answer":2,"explanation":"139,000 ÷ (330 − 60) ≈ 8.58 minutes."},{"prompt":"A queue has **75,000 jobs** waiting. Workers finish **330/s** while new jobs arrive at **320/s**. How long until the backlog is gone?","options":["It never drains","~3.79 minutes","~125 minutes","~3.91 minutes"],"answer":2,"explanation":"75,000 ÷ (330 − 320) ≈ 125 minutes."},{"prompt":"A queue has **124,000 jobs** waiting. Workers finish **220/s** while new jobs arrive at **190/s**. How long until the backlog is gone?","options":["~68.9 minutes","It never drains","~9.39 minutes","~10.9 minutes"],"answer":0,"explanation":"124,000 ÷ (220 − 190) ≈ 68.9 minutes."},{"prompt":"A queue has **109,000 jobs** waiting. Workers finish **350/s** while new jobs arrive at **320/s**. How long until the backlog is gone?","options":["It never drains","~5.19 minutes","~5.68 minutes","~60.6 minutes"],"answer":3,"explanation":"109,000 ÷ (350 − 320) ≈ 60.6 minutes."}]
---
# Design Drill: Draining a backlog #18

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
