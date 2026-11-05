---
slug: "sd05-drain-41"
title: "Design Drill: Draining a backlog #41"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **155,000 jobs** waiting. Workers finish **260/s** while new jobs arrive at **210/s**. How long until the backlog is gone?","options":["It never drains","~12.3 minutes","~51.7 minutes","~9.94 minutes"],"answer":2,"explanation":"155,000 ÷ (260 − 210) ≈ 51.7 minutes."},{"prompt":"A queue has **103,000 jobs** waiting. Workers finish **140/s** while new jobs arrive at **70/s**. How long until the backlog is gone?","options":["~24.5 minutes","It never drains","~12.3 minutes","~1470 minutes"],"answer":0,"explanation":"103,000 ÷ (140 − 70) ≈ 24.5 minutes."},{"prompt":"A queue has **91,000 jobs** waiting. Workers finish **360/s** while new jobs arrive at **150/s**. How long until the backlog is gone?","options":["It never drains","~4.21 minutes","~7.22 minutes","~10.1 minutes"],"answer":2,"explanation":"91,000 ÷ (360 − 150) ≈ 7.22 minutes."},{"prompt":"A queue has **70,000 jobs** waiting. Workers finish **150/s** while new jobs arrive at **40/s**. How long until the backlog is gone?","options":["~10.6 minutes","~7.78 minutes","It never drains","~29.2 minutes"],"answer":0,"explanation":"70,000 ÷ (150 − 40) ≈ 10.6 minutes."},{"prompt":"A queue has **175,000 jobs** waiting. Workers finish **340/s** while new jobs arrive at **290/s**. How long until the backlog is gone?","options":["~8.58 minutes","It never drains","~10.1 minutes","~58.3 minutes"],"answer":3,"explanation":"175,000 ÷ (340 − 290) ≈ 58.3 minutes."}]
---
# Design Drill: Draining a backlog #41

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
