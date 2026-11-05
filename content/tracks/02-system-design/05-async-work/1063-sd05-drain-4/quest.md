---
slug: "sd05-drain-4"
title: "Design Drill: Draining a backlog #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A queue has **114,000 jobs** waiting. Workers finish **80/s** while new jobs arrive at **20/s**. How long until the backlog is gone?","options":["It never drains","~95 minutes","~31.7 minutes","~23.8 minutes"],"answer":2,"explanation":"114,000 ÷ (80 − 20) ≈ 31.7 minutes."},{"prompt":"A queue has **80,000 jobs** waiting. Workers finish **220/s** while new jobs arrive at **110/s**. How long until the backlog is gone?","options":["~6.06 minutes","~727 minutes","It never drains","~12.1 minutes"],"answer":3,"explanation":"80,000 ÷ (220 − 110) ≈ 12.1 minutes."},{"prompt":"A queue has **175,000 jobs** waiting. Workers finish **240/s** while new jobs arrive at **190/s**. How long until the backlog is gone?","options":["~58.3 minutes","~12.2 minutes","It never drains","~15.4 minutes"],"answer":0,"explanation":"175,000 ÷ (240 − 190) ≈ 58.3 minutes."},{"prompt":"A queue has **28,000 jobs** waiting. Workers finish **370/s** while new jobs arrive at **210/s**. How long until the backlog is gone?","options":["It never drains","~2.22 minutes","~1.26 minutes","~2.92 minutes"],"answer":3,"explanation":"28,000 ÷ (370 − 210) ≈ 2.92 minutes."},{"prompt":"A queue has **187,000 jobs** waiting. Workers finish **390/s** while new jobs arrive at **250/s**. How long until the backlog is gone?","options":["~22.3 minutes","~12.5 minutes","~7.99 minutes","It never drains"],"answer":0,"explanation":"187,000 ÷ (390 − 250) ≈ 22.3 minutes."}]
---
# Design Drill: Draining a backlog #4

Time to drain a backlog = backlog ÷ (processing rate − arrival rate). If processing isn't faster than arrivals, it never drains.
