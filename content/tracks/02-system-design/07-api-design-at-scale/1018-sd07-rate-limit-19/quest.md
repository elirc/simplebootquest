---
slug: "sd07-rate-limit-19"
title: "Design Drill: Token bucket rate limits #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **50 tokens** that refills at **3/s**. Hammering the API nonstop, how many requests can it make in the first **20 seconds**?","options":["60","50","110","1000"],"answer":2,"explanation":"50 (the burst) + 3 × 20 = 110."},{"prompt":"A client starts with a full bucket of **75 tokens** that refills at **3/s**. Hammering the API nonstop, how many requests can it make in the first **15 seconds**?","options":["75","120","45","1125"],"answer":1,"explanation":"75 (the burst) + 3 × 15 = 120."},{"prompt":"A client starts with a full bucket of **40 tokens** that refills at **7/s**. Hammering the API nonstop, how many requests can it make in the first **40 seconds**?","options":["40","280","320","1600"],"answer":2,"explanation":"40 (the burst) + 7 × 40 = 320."},{"prompt":"A client starts with a full bucket of **30 tokens** that refills at **7/s**. Hammering the API nonstop, how many requests can it make in the first **50 seconds**?","options":["1500","350","30","380"],"answer":3,"explanation":"30 (the burst) + 7 × 50 = 380."},{"prompt":"A client starts with a full bucket of **85 tokens** that refills at **13/s**. Hammering the API nonstop, how many requests can it make in the first **50 seconds**?","options":["650","735","4250","85"],"answer":1,"explanation":"85 (the burst) + 13 × 50 = 735."}]
---
# Design Drill: Token bucket rate limits #19

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
