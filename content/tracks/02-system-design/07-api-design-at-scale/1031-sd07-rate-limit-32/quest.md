---
slug: "sd07-rate-limit-32"
title: "Design Drill: Token bucket rate limits #32"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **75 tokens** that refills at **10/s**. Hammering the API nonstop, how many requests can it make in the first **60 seconds**?","options":["675","75","4500","600"],"answer":0,"explanation":"75 (the burst) + 10 × 60 = 675."},{"prompt":"A client starts with a full bucket of **70 tokens** that refills at **12/s**. Hammering the API nonstop, how many requests can it make in the first **30 seconds**?","options":["70","360","2100","430"],"answer":3,"explanation":"70 (the burst) + 12 × 30 = 430."},{"prompt":"A client starts with a full bucket of **55 tokens** that refills at **5/s**. Hammering the API nonstop, how many requests can it make in the first **25 seconds**?","options":["125","180","55","1375"],"answer":1,"explanation":"55 (the burst) + 5 × 25 = 180."},{"prompt":"A client starts with a full bucket of **90 tokens** that refills at **19/s**. Hammering the API nonstop, how many requests can it make in the first **30 seconds**?","options":["570","2700","90","660"],"answer":3,"explanation":"90 (the burst) + 19 × 30 = 660."},{"prompt":"A client starts with a full bucket of **15 tokens** that refills at **11/s**. Hammering the API nonstop, how many requests can it make in the first **55 seconds**?","options":["620","825","605","15"],"answer":0,"explanation":"15 (the burst) + 11 × 55 = 620."}]
---
# Design Drill: Token bucket rate limits #32

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
