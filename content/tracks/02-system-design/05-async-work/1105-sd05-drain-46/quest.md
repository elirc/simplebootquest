---
slug: "sd05-drain-46"
title: "Design Drill: Draining a backlog #46"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **81,000 jobs** waiting. Workers finish **110/s** while new jobs arrive at **30/s**. How long until the backlog is gone?","options":["~16.9 minutes","~45 minutes","It never drains","~12.3 minutes"],"answer":0,"explanation":"81,000 ÷ (110 − 30) ≈ 16.9 minutes."},{"prompt":"A queue has **10,000 jobs** waiting. Workers finish **80/s** while new jobs arrive at **60/s**. How long until the backlog is gone?","options":["~2.78 minutes","It never drains","~8.33 minutes","~2.08 minutes"],"answer":2,"explanation":"10,000 ÷ (80 − 60) ≈ 8.33 minutes."},{"prompt":"A queue has **71,000 jobs** waiting. Workers finish **140/s** while new jobs arrive at **120/s**. How long until the backlog is gone?","options":["~59.2 minutes","~9.86 minutes","It never drains","~8.45 minutes"],"answer":0,"explanation":"71,000 ÷ (140 − 120) ≈ 59.2 minutes."},{"prompt":"A queue has **1000 jobs** waiting. Workers finish **240/s** while new jobs arrive at **140/s**. How long until the backlog is gone?","options":["~0.167 minutes","~0.0694 minutes","It never drains","~0.119 minutes"],"answer":0,"explanation":"1000 ÷ (240 − 140) ≈ 0.167 minutes."},{"prompt":"A queue has **101,000 jobs** waiting. Workers finish **300/s** while new jobs arrive at **110/s**. How long until the backlog is gone?","options":["It never drains","~15.3 minutes","~5.61 minutes","~8.86 minutes"],"answer":3,"explanation":"101,000 ÷ (300 − 110) ≈ 8.86 minutes."}]
---
# Design Drill: Draining a backlog #46

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
