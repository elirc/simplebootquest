---
slug: "sd05-drain-19"
title: "Design Drill: Draining a backlog #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **139,000 jobs** waiting. Workers finish **290/s** while new jobs arrive at **240/s**. How long until the backlog is gone?","options":["~46.3 minutes","~7.99 minutes","~9.65 minutes","It never drains"],"answer":0,"explanation":"139,000 ÷ (290 − 240) ≈ 46.3 minutes."},{"prompt":"A queue has **66,000 jobs** waiting. Workers finish **210/s** while new jobs arrive at **100/s**. How long until the backlog is gone?","options":["~10 minutes","It never drains","~5.24 minutes","~11 minutes"],"answer":0,"explanation":"66,000 ÷ (210 − 100) ≈ 10 minutes."},{"prompt":"A queue has **19,000 jobs** waiting. Workers finish **130/s** while new jobs arrive at **120/s**. How long until the backlog is gone?","options":["It never drains","~2.64 minutes","~2.44 minutes","~31.7 minutes"],"answer":3,"explanation":"19,000 ÷ (130 − 120) ≈ 31.7 minutes."},{"prompt":"A queue has **106,000 jobs** waiting. Workers finish **260/s** while new jobs arrive at **220/s**. How long until the backlog is gone?","options":["~8.03 minutes","~6.79 minutes","It never drains","~44.2 minutes"],"answer":3,"explanation":"106,000 ÷ (260 − 220) ≈ 44.2 minutes."},{"prompt":"A queue has **167,000 jobs** waiting. Workers finish **150/s** while new jobs arrive at **100/s**. How long until the backlog is gone?","options":["It never drains","~55.7 minutes","~18.6 minutes","~27.8 minutes"],"answer":1,"explanation":"167,000 ÷ (150 − 100) ≈ 55.7 minutes."}]
---
# Design Drill: Draining a backlog #19

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
