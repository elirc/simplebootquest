---
slug: "sd07-rate-limit-44"
title: "Design Drill: Token bucket rate limits #44"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **100 tokens** that refills at **15/s**. Hammering the API nonstop, how many requests can it make in the first **15 seconds**?","options":["325","1500","100","225"],"answer":0,"explanation":"100 (the burst) + 15 × 15 = 325."},{"prompt":"A client starts with a full bucket of **25 tokens** that refills at **8/s**. Hammering the API nonstop, how many requests can it make in the first **15 seconds**?","options":["145","120","25","375"],"answer":0,"explanation":"25 (the burst) + 8 × 15 = 145."},{"prompt":"A client starts with a full bucket of **30 tokens** that refills at **19/s**. Hammering the API nonstop, how many requests can it make in the first **60 seconds**?","options":["30","1140","1800","1170"],"answer":3,"explanation":"30 (the burst) + 19 × 60 = 1170."},{"prompt":"A client starts with a full bucket of **95 tokens** that refills at **13/s**. Hammering the API nonstop, how many requests can it make in the first **30 seconds**?","options":["485","2850","390","95"],"answer":0,"explanation":"95 (the burst) + 13 × 30 = 485."},{"prompt":"A client starts with a full bucket of **60 tokens** that refills at **16/s**. Hammering the API nonstop, how many requests can it make in the first **5 seconds**?","options":["80","60","300","140"],"answer":3,"explanation":"60 (the burst) + 16 × 5 = 140."}]
---
# Design Drill: Token bucket rate limits #44

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
