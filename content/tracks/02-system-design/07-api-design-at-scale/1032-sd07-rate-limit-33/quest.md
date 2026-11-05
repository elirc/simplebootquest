---
slug: "sd07-rate-limit-33"
title: "Design Drill: Token bucket rate limits #33"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **65 tokens** that refills at **7/s**. Hammering the API nonstop, how many requests can it make in the first **20 seconds**?","options":["65","205","140","1300"],"answer":1,"explanation":"65 (the burst) + 7 × 20 = 205."},{"prompt":"A client starts with a full bucket of **15 tokens** that refills at **14/s**. Hammering the API nonstop, how many requests can it make in the first **40 seconds**?","options":["560","575","15","600"],"answer":1,"explanation":"15 (the burst) + 14 × 40 = 575."},{"prompt":"A client starts with a full bucket of **25 tokens** that refills at **8/s**. Hammering the API nonstop, how many requests can it make in the first **20 seconds**?","options":["500","185","25","160"],"answer":1,"explanation":"25 (the burst) + 8 × 20 = 185."},{"prompt":"A client starts with a full bucket of **5 tokens** that refills at **19/s**. Hammering the API nonstop, how many requests can it make in the first **50 seconds**?","options":["250","955","950","5"],"answer":1,"explanation":"5 (the burst) + 19 × 50 = 955."},{"prompt":"A client starts with a full bucket of **65 tokens** that refills at **18/s**. Hammering the API nonstop, how many requests can it make in the first **20 seconds**?","options":["65","360","1300","425"],"answer":3,"explanation":"65 (the burst) + 18 × 20 = 425."}]
---
# Design Drill: Token bucket rate limits #33

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
