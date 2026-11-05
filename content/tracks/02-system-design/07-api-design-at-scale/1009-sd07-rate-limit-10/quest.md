---
slug: "sd07-rate-limit-10"
title: "Design Drill: Token bucket rate limits #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **35 tokens** that refills at **8/s**. Hammering the API nonstop, how many requests can it make in the first **15 seconds**?","options":["35","525","155","120"],"answer":2,"explanation":"35 (the burst) + 8 × 15 = 155."},{"prompt":"A client starts with a full bucket of **85 tokens** that refills at **17/s**. Hammering the API nonstop, how many requests can it make in the first **50 seconds**?","options":["850","4250","935","85"],"answer":2,"explanation":"85 (the burst) + 17 × 50 = 935."},{"prompt":"A client starts with a full bucket of **5 tokens** that refills at **2/s**. Hammering the API nonstop, how many requests can it make in the first **20 seconds**?","options":["45","40","100","5"],"answer":0,"explanation":"5 (the burst) + 2 × 20 = 45."},{"prompt":"A client starts with a full bucket of **25 tokens** that refills at **18/s**. Hammering the API nonstop, how many requests can it make in the first **15 seconds**?","options":["270","25","375","295"],"answer":3,"explanation":"25 (the burst) + 18 × 15 = 295."},{"prompt":"A client starts with a full bucket of **50 tokens** that refills at **19/s**. Hammering the API nonstop, how many requests can it make in the first **50 seconds**?","options":["2500","1000","950","50"],"answer":1,"explanation":"50 (the burst) + 19 × 50 = 1000."}]
---
# Design Drill: Token bucket rate limits #10

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
