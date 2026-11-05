---
slug: "sd07-rate-limit-59"
title: "Design Drill: Token bucket rate limits #59"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **85 tokens** that refills at **10/s**. Hammering the API nonstop, how many requests can it make in the first **30 seconds**?","options":["300","85","2550","385"],"answer":3,"explanation":"85 (the burst) + 10 × 30 = 385."},{"prompt":"A client starts with a full bucket of **75 tokens** that refills at **20/s**. Hammering the API nonstop, how many requests can it make in the first **50 seconds**?","options":["75","1000","3750","1075"],"answer":3,"explanation":"75 (the burst) + 20 × 50 = 1075."},{"prompt":"A client starts with a full bucket of **70 tokens** that refills at **16/s**. Hammering the API nonstop, how many requests can it make in the first **40 seconds**?","options":["2800","70","710","640"],"answer":2,"explanation":"70 (the burst) + 16 × 40 = 710."},{"prompt":"A client starts with a full bucket of **85 tokens** that refills at **16/s**. Hammering the API nonstop, how many requests can it make in the first **25 seconds**?","options":["400","485","85","2125"],"answer":1,"explanation":"85 (the burst) + 16 × 25 = 485."},{"prompt":"A client starts with a full bucket of **30 tokens** that refills at **9/s**. Hammering the API nonstop, how many requests can it make in the first **45 seconds**?","options":["30","1350","435","405"],"answer":2,"explanation":"30 (the burst) + 9 × 45 = 435."}]
---
# Design Drill: Token bucket rate limits #59

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
