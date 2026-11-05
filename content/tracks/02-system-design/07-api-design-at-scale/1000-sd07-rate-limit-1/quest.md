---
slug: "sd07-rate-limit-1"
title: "Design Drill: Token bucket rate limits #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **70 tokens** that refills at **4/s**. Hammering the API nonstop, how many requests can it make in the first **60 seconds**?","options":["310","240","4200","70"],"answer":0,"explanation":"70 (the burst) + 4 × 60 = 310."},{"prompt":"A client starts with a full bucket of **15 tokens** that refills at **16/s**. Hammering the API nonstop, how many requests can it make in the first **25 seconds**?","options":["375","415","15","400"],"answer":1,"explanation":"15 (the burst) + 16 × 25 = 415."},{"prompt":"A client starts with a full bucket of **40 tokens** that refills at **5/s**. Hammering the API nonstop, how many requests can it make in the first **50 seconds**?","options":["40","290","250","2000"],"answer":1,"explanation":"40 (the burst) + 5 × 50 = 290."},{"prompt":"A client starts with a full bucket of **65 tokens** that refills at **1/s**. Hammering the API nonstop, how many requests can it make in the first **5 seconds**?","options":["5","325","70","65"],"answer":2,"explanation":"65 (the burst) + 1 × 5 = 70."},{"prompt":"A client starts with a full bucket of **25 tokens** that refills at **3/s**. Hammering the API nonstop, how many requests can it make in the first **50 seconds**?","options":["150","1250","25","175"],"answer":3,"explanation":"25 (the burst) + 3 × 50 = 175."}]
---
# Design Drill: Token bucket rate limits #1

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
