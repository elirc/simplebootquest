---
slug: "sd07-rate-limit-55"
title: "Design Drill: Token bucket rate limits #55"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **5 tokens** that refills at **5/s**. Hammering the API nonstop, how many requests can it make in the first **40 seconds**?","options":["210","205","5","200"],"answer":1,"explanation":"5 (the burst) + 5 × 40 = 205."},{"prompt":"A client starts with a full bucket of **100 tokens** that refills at **18/s**. Hammering the API nonstop, how many requests can it make in the first **55 seconds**?","options":["100","5500","1090","990"],"answer":2,"explanation":"100 (the burst) + 18 × 55 = 1090."},{"prompt":"A client starts with a full bucket of **20 tokens** that refills at **20/s**. Hammering the API nonstop, how many requests can it make in the first **50 seconds**?","options":["1000","20","1020","1040"],"answer":2,"explanation":"20 (the burst) + 20 × 50 = 1020."},{"prompt":"A client starts with a full bucket of **70 tokens** that refills at **13/s**. Hammering the API nonstop, how many requests can it make in the first **50 seconds**?","options":["650","720","70","3500"],"answer":1,"explanation":"70 (the burst) + 13 × 50 = 720."},{"prompt":"A client starts with a full bucket of **75 tokens** that refills at **1/s**. Hammering the API nonstop, how many requests can it make in the first **45 seconds**?","options":["3375","45","120","75"],"answer":2,"explanation":"75 (the burst) + 1 × 45 = 120."}]
---
# Design Drill: Token bucket rate limits #55

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
