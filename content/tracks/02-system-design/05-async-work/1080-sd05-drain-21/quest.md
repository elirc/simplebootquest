---
slug: "sd05-drain-21"
title: "Design Drill: Draining a backlog #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **182,000 jobs** waiting. Workers finish **50/s** while new jobs arrive at **40/s**. How long until the backlog is gone?","options":["It never drains","~75.8 minutes","~303 minutes","~60.7 minutes"],"answer":2,"explanation":"182,000 ÷ (50 − 40) ≈ 303 minutes."},{"prompt":"A queue has **190,000 jobs** waiting. Workers finish **250/s** while new jobs arrive at **160/s**. How long until the backlog is gone?","options":["~19.8 minutes","It never drains","~35.2 minutes","~12.7 minutes"],"answer":2,"explanation":"190,000 ÷ (250 − 160) ≈ 35.2 minutes."},{"prompt":"A queue has **71,000 jobs** waiting. Workers finish **360/s** while new jobs arrive at **290/s**. How long until the backlog is gone?","options":["It never drains","~4.08 minutes","~3.29 minutes","~16.9 minutes"],"answer":3,"explanation":"71,000 ÷ (360 − 290) ≈ 16.9 minutes."},{"prompt":"A queue has **168,000 jobs** waiting. Workers finish **330/s** while new jobs arrive at **150/s**. How long until the backlog is gone?","options":["It never drains","~8.48 minutes","~18.7 minutes","~15.6 minutes"],"answer":3,"explanation":"168,000 ÷ (330 − 150) ≈ 15.6 minutes."},{"prompt":"A queue has **149,000 jobs** waiting. Workers finish **160/s** while new jobs arrive at **90/s**. How long until the backlog is gone?","options":["It never drains","~15.5 minutes","~27.6 minutes","~35.5 minutes"],"answer":3,"explanation":"149,000 ÷ (160 − 90) ≈ 35.5 minutes."}]
---
# Design Drill: Draining a backlog #21

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
