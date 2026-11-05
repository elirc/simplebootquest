---
slug: "sd05-drain-8"
title: "Design Drill: Draining a backlog #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **197,000 jobs** waiting. Workers finish **160/s** while new jobs arrive at **140/s**. How long until the backlog is gone?","options":["~164 minutes","~20.5 minutes","It never drains","~23.5 minutes"],"answer":0,"explanation":"197,000 ÷ (160 − 140) ≈ 164 minutes."},{"prompt":"A queue has **127,000 jobs** waiting. Workers finish **260/s** while new jobs arrive at **60/s**. How long until the backlog is gone?","options":["~35.3 minutes","~10.6 minutes","It never drains","~8.14 minutes"],"answer":1,"explanation":"127,000 ÷ (260 − 60) ≈ 10.6 minutes."},{"prompt":"A queue has **186,000 jobs** waiting. Workers finish **120/s** while new jobs arrive at **50/s**. How long until the backlog is gone?","options":["~62 minutes","~44.3 minutes","~25.8 minutes","It never drains"],"answer":1,"explanation":"186,000 ÷ (120 − 50) ≈ 44.3 minutes."},{"prompt":"A queue has **84,000 jobs** waiting. Workers finish **60/s** while new jobs arrive at **40/s**. How long until the backlog is gone?","options":["It never drains","~23.3 minutes","~70 minutes","~35 minutes"],"answer":2,"explanation":"84,000 ÷ (60 − 40) ≈ 70 minutes."},{"prompt":"A queue has **152,000 jobs** waiting. Workers finish **130/s** while new jobs arrive at **40/s**. How long until the backlog is gone?","options":["~28.1 minutes","It never drains","~19.5 minutes","~63.3 minutes"],"answer":0,"explanation":"152,000 ÷ (130 − 40) ≈ 28.1 minutes."}]
---
# Design Drill: Draining a backlog #8

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
