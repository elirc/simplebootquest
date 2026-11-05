---
slug: "sd07-rate-limit-11"
title: "Design Drill: Token bucket rate limits #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **5 tokens** that refills at **14/s**. Hammering the API nonstop, how many requests can it make in the first **20 seconds**?","options":["5","280","100","285"],"answer":3,"explanation":"5 (the burst) + 14 × 20 = 285."},{"prompt":"A client starts with a full bucket of **75 tokens** that refills at **14/s**. Hammering the API nonstop, how many requests can it make in the first **55 seconds**?","options":["4125","770","75","845"],"answer":3,"explanation":"75 (the burst) + 14 × 55 = 845."},{"prompt":"A client starts with a full bucket of **75 tokens** that refills at **20/s**. Hammering the API nonstop, how many requests can it make in the first **30 seconds**?","options":["600","675","2250","75"],"answer":1,"explanation":"75 (the burst) + 20 × 30 = 675."},{"prompt":"A client starts with a full bucket of **15 tokens** that refills at **12/s**. Hammering the API nonstop, how many requests can it make in the first **25 seconds**?","options":["15","315","375","300"],"answer":1,"explanation":"15 (the burst) + 12 × 25 = 315."},{"prompt":"A client starts with a full bucket of **15 tokens** that refills at **17/s**. Hammering the API nonstop, how many requests can it make in the first **15 seconds**?","options":["225","255","15","270"],"answer":3,"explanation":"15 (the burst) + 17 × 15 = 270."}]
---
# Design Drill: Token bucket rate limits #11

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
