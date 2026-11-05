---
slug: "sd07-rate-limit-4"
title: "Design Drill: Token bucket rate limits #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **15 tokens** that refills at **12/s**. Hammering the API nonstop, how many requests can it make in the first **50 seconds**?","options":["15","750","600","615"],"answer":3,"explanation":"15 (the burst) + 12 × 50 = 615."},{"prompt":"A client starts with a full bucket of **25 tokens** that refills at **9/s**. Hammering the API nonstop, how many requests can it make in the first **10 seconds**?","options":["90","115","250","25"],"answer":1,"explanation":"25 (the burst) + 9 × 10 = 115."},{"prompt":"A client starts with a full bucket of **5 tokens** that refills at **6/s**. Hammering the API nonstop, how many requests can it make in the first **20 seconds**?","options":["5","100","120","125"],"answer":3,"explanation":"5 (the burst) + 6 × 20 = 125."},{"prompt":"A client starts with a full bucket of **35 tokens** that refills at **6/s**. Hammering the API nonstop, how many requests can it make in the first **35 seconds**?","options":["210","35","1225","245"],"answer":3,"explanation":"35 (the burst) + 6 × 35 = 245."},{"prompt":"A client starts with a full bucket of **5 tokens** that refills at **8/s**. Hammering the API nonstop, how many requests can it make in the first **20 seconds**?","options":["5","100","160","165"],"answer":3,"explanation":"5 (the burst) + 8 × 20 = 165."}]
---
# Design Drill: Token bucket rate limits #4

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
