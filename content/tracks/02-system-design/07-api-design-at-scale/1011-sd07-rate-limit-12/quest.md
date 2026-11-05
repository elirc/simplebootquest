---
slug: "sd07-rate-limit-12"
title: "Design Drill: Token bucket rate limits #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **50 tokens** that refills at **20/s**. Hammering the API nonstop, how many requests can it make in the first **45 seconds**?","options":["50","950","2250","900"],"answer":1,"explanation":"50 (the burst) + 20 × 45 = 950."},{"prompt":"A client starts with a full bucket of **25 tokens** that refills at **5/s**. Hammering the API nonstop, how many requests can it make in the first **50 seconds**?","options":["1250","275","250","25"],"answer":1,"explanation":"25 (the burst) + 5 × 50 = 275."},{"prompt":"A client starts with a full bucket of **55 tokens** that refills at **5/s**. Hammering the API nonstop, how many requests can it make in the first **5 seconds**?","options":["275","25","55","80"],"answer":3,"explanation":"55 (the burst) + 5 × 5 = 80."},{"prompt":"A client starts with a full bucket of **5 tokens** that refills at **5/s**. Hammering the API nonstop, how many requests can it make in the first **15 seconds**?","options":["75","80","85","5"],"answer":1,"explanation":"5 (the burst) + 5 × 15 = 80."},{"prompt":"A client starts with a full bucket of **75 tokens** that refills at **15/s**. Hammering the API nonstop, how many requests can it make in the first **5 seconds**?","options":["375","150","75","225"],"answer":1,"explanation":"75 (the burst) + 15 × 5 = 150."}]
---
# Design Drill: Token bucket rate limits #12

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
