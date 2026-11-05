---
slug: "sd07-rate-limit-25"
title: "Design Drill: Token bucket rate limits #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **20 tokens** that refills at **8/s**. Hammering the API nonstop, how many requests can it make in the first **60 seconds**?","options":["500","20","1200","480"],"answer":0,"explanation":"20 (the burst) + 8 × 60 = 500."},{"prompt":"A client starts with a full bucket of **10 tokens** that refills at **2/s**. Hammering the API nonstop, how many requests can it make in the first **60 seconds**?","options":["600","120","10","130"],"answer":3,"explanation":"10 (the burst) + 2 × 60 = 130."},{"prompt":"A client starts with a full bucket of **75 tokens** that refills at **15/s**. Hammering the API nonstop, how many requests can it make in the first **45 seconds**?","options":["3375","75","750","675"],"answer":2,"explanation":"75 (the burst) + 15 × 45 = 750."},{"prompt":"A client starts with a full bucket of **45 tokens** that refills at **4/s**. Hammering the API nonstop, how many requests can it make in the first **55 seconds**?","options":["45","265","2475","220"],"answer":1,"explanation":"45 (the burst) + 4 × 55 = 265."},{"prompt":"A client starts with a full bucket of **65 tokens** that refills at **16/s**. Hammering the API nonstop, how many requests can it make in the first **10 seconds**?","options":["65","650","160","225"],"answer":3,"explanation":"65 (the burst) + 16 × 10 = 225."}]
---
# Design Drill: Token bucket rate limits #25

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
