---
slug: "sd05-drain-3"
title: "Design Drill: Draining a backlog #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **60,000 jobs** waiting. Workers finish **350/s** while new jobs arrive at **180/s**. How long until the backlog is gone?","options":["~5.88 minutes","~5.56 minutes","It never drains","~2.86 minutes"],"answer":0,"explanation":"60,000 ÷ (350 − 180) ≈ 5.88 minutes."},{"prompt":"A queue has **191,000 jobs** waiting. Workers finish **180/s** while new jobs arrive at **140/s**. How long until the backlog is gone?","options":["~22.7 minutes","It never drains","~79.6 minutes","~17.7 minutes"],"answer":2,"explanation":"191,000 ÷ (180 − 140) ≈ 79.6 minutes."},{"prompt":"A queue has **74,000 jobs** waiting. Workers finish **280/s** while new jobs arrive at **50/s**. How long until the backlog is gone?","options":["~5.36 minutes","~4.4 minutes","It never drains","~24.7 minutes"],"answer":0,"explanation":"74,000 ÷ (280 − 50) ≈ 5.36 minutes."},{"prompt":"A queue has **76,000 jobs** waiting. Workers finish **270/s** while new jobs arrive at **70/s**. How long until the backlog is gone?","options":["~6.33 minutes","~18.1 minutes","~4.69 minutes","It never drains"],"answer":0,"explanation":"76,000 ÷ (270 − 70) ≈ 6.33 minutes."},{"prompt":"A queue has **12,000 jobs** waiting. Workers finish **340/s** while new jobs arrive at **250/s**. How long until the backlog is gone?","options":["~2.22 minutes","~0.588 minutes","It never drains","~0.8 minutes"],"answer":0,"explanation":"12,000 ÷ (340 − 250) ≈ 2.22 minutes."}]
---
# Design Drill: Draining a backlog #3

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
