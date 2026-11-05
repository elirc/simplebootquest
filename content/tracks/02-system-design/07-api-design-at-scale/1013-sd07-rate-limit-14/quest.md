---
slug: "sd07-rate-limit-14"
title: "Design Drill: Token bucket rate limits #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **5 tokens** that refills at **10/s**. Hammering the API nonstop, how many requests can it make in the first **20 seconds**?","options":["205","200","5","100"],"answer":0,"explanation":"5 (the burst) + 10 × 20 = 205."},{"prompt":"A client starts with a full bucket of **70 tokens** that refills at **18/s**. Hammering the API nonstop, how many requests can it make in the first **60 seconds**?","options":["70","1150","1080","4200"],"answer":1,"explanation":"70 (the burst) + 18 × 60 = 1150."},{"prompt":"A client starts with a full bucket of **15 tokens** that refills at **19/s**. Hammering the API nonstop, how many requests can it make in the first **40 seconds**?","options":["15","600","760","775"],"answer":3,"explanation":"15 (the burst) + 19 × 40 = 775."},{"prompt":"A client starts with a full bucket of **50 tokens** that refills at **2/s**. Hammering the API nonstop, how many requests can it make in the first **60 seconds**?","options":["50","120","3000","170"],"answer":3,"explanation":"50 (the burst) + 2 × 60 = 170."},{"prompt":"A client starts with a full bucket of **70 tokens** that refills at **7/s**. Hammering the API nonstop, how many requests can it make in the first **60 seconds**?","options":["4200","70","490","420"],"answer":2,"explanation":"70 (the burst) + 7 × 60 = 490."}]
---
# Design Drill: Token bucket rate limits #14

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
