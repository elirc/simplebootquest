---
slug: "sd05-drain-43"
title: "Design Drill: Draining a backlog #43"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **173,000 jobs** waiting. Workers finish **380/s** while new jobs arrive at **220/s**. How long until the backlog is gone?","options":["~7.59 minutes","~18 minutes","~13.1 minutes","It never drains"],"answer":1,"explanation":"173,000 ÷ (380 − 220) ≈ 18 minutes."},{"prompt":"A queue has **8000 jobs** waiting. Workers finish **220/s** while new jobs arrive at **90/s**. How long until the backlog is gone?","options":["~1.48 minutes","~1.03 minutes","~0.606 minutes","It never drains"],"answer":1,"explanation":"8000 ÷ (220 − 90) ≈ 1.03 minutes."},{"prompt":"A queue has **164,000 jobs** waiting. Workers finish **180/s** while new jobs arrive at **110/s**. How long until the backlog is gone?","options":["~15.2 minutes","~24.8 minutes","It never drains","~39 minutes"],"answer":3,"explanation":"164,000 ÷ (180 − 110) ≈ 39 minutes."},{"prompt":"A queue has **126,000 jobs** waiting. Workers finish **50/s** while new jobs arrive at **10/s**. How long until the backlog is gone?","options":["~52.5 minutes","It never drains","~42 minutes","~210 minutes"],"answer":0,"explanation":"126,000 ÷ (50 − 10) ≈ 52.5 minutes."},{"prompt":"A queue has **38,000 jobs** waiting. Workers finish **350/s** while new jobs arrive at **110/s**. How long until the backlog is gone?","options":["~1.81 minutes","~2.64 minutes","~5.76 minutes","It never drains"],"answer":1,"explanation":"38,000 ÷ (350 − 110) ≈ 2.64 minutes."}]
---
# Design Drill: Draining a backlog #43

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
