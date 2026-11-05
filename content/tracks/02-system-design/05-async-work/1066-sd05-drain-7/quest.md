---
slug: "sd05-drain-7"
title: "Design Drill: Draining a backlog #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **172,000 jobs** waiting. Workers finish **290/s** while new jobs arrive at **10/s**. How long until the backlog is gone?","options":["~9.89 minutes","~287 minutes","~10.2 minutes","It never drains"],"answer":2,"explanation":"172,000 ÷ (290 − 10) ≈ 10.2 minutes."},{"prompt":"A queue has **83,000 jobs** waiting. Workers finish **210/s** while new jobs arrive at **130/s**. How long until the backlog is gone?","options":["It never drains","~6.59 minutes","~10.6 minutes","~17.3 minutes"],"answer":3,"explanation":"83,000 ÷ (210 − 130) ≈ 17.3 minutes."},{"prompt":"A queue has **167,000 jobs** waiting. Workers finish **240/s** while new jobs arrive at **50/s**. How long until the backlog is gone?","options":["~14.6 minutes","~11.6 minutes","~55.7 minutes","It never drains"],"answer":0,"explanation":"167,000 ÷ (240 − 50) ≈ 14.6 minutes."},{"prompt":"A queue has **64,000 jobs** waiting. Workers finish **80/s** while new jobs arrive at **70/s**. How long until the backlog is gone?","options":["It never drains","~13.3 minutes","~107 minutes","~15.2 minutes"],"answer":2,"explanation":"64,000 ÷ (80 − 70) ≈ 107 minutes."},{"prompt":"A queue has **106,000 jobs** waiting. Workers finish **270/s** while new jobs arrive at **60/s**. How long until the backlog is gone?","options":["~29.4 minutes","It never drains","~8.41 minutes","~6.54 minutes"],"answer":2,"explanation":"106,000 ÷ (270 − 60) ≈ 8.41 minutes."}]
---
# Design Drill: Draining a backlog #7

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
