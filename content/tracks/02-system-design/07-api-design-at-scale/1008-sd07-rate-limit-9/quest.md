---
slug: "sd07-rate-limit-9"
title: "Design Drill: Token bucket rate limits #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **30 tokens** that refills at **18/s**. Hammering the API nonstop, how many requests can it make in the first **5 seconds**?","options":["30","120","90","150"],"answer":1,"explanation":"30 (the burst) + 18 × 5 = 120."},{"prompt":"A client starts with a full bucket of **25 tokens** that refills at **15/s**. Hammering the API nonstop, how many requests can it make in the first **40 seconds**?","options":["25","600","1000","625"],"answer":3,"explanation":"25 (the burst) + 15 × 40 = 625."},{"prompt":"A client starts with a full bucket of **25 tokens** that refills at **8/s**. Hammering the API nonstop, how many requests can it make in the first **55 seconds**?","options":["1375","440","465","25"],"answer":2,"explanation":"25 (the burst) + 8 × 55 = 465."},{"prompt":"A client starts with a full bucket of **10 tokens** that refills at **2/s**. Hammering the API nonstop, how many requests can it make in the first **5 seconds**?","options":["10","50","20","30"],"answer":2,"explanation":"10 (the burst) + 2 × 5 = 20."},{"prompt":"A client starts with a full bucket of **15 tokens** that refills at **19/s**. Hammering the API nonstop, how many requests can it make in the first **30 seconds**?","options":["585","15","570","450"],"answer":0,"explanation":"15 (the burst) + 19 × 30 = 585."}]
---
# Design Drill: Token bucket rate limits #9

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
