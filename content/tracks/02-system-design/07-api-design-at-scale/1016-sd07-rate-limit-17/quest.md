---
slug: "sd07-rate-limit-17"
title: "Design Drill: Token bucket rate limits #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **40 tokens** that refills at **18/s**. Hammering the API nonstop, how many requests can it make in the first **60 seconds**?","options":["40","1120","2400","1080"],"answer":1,"explanation":"40 (the burst) + 18 × 60 = 1120."},{"prompt":"A client starts with a full bucket of **70 tokens** that refills at **4/s**. Hammering the API nonstop, how many requests can it make in the first **20 seconds**?","options":["80","1400","70","150"],"answer":3,"explanation":"70 (the burst) + 4 × 20 = 150."},{"prompt":"A client starts with a full bucket of **75 tokens** that refills at **20/s**. Hammering the API nonstop, how many requests can it make in the first **5 seconds**?","options":["75","175","375","100"],"answer":1,"explanation":"75 (the burst) + 20 × 5 = 175."},{"prompt":"A client starts with a full bucket of **95 tokens** that refills at **7/s**. Hammering the API nonstop, how many requests can it make in the first **45 seconds**?","options":["315","410","4275","95"],"answer":1,"explanation":"95 (the burst) + 7 × 45 = 410."},{"prompt":"A client starts with a full bucket of **15 tokens** that refills at **3/s**. Hammering the API nonstop, how many requests can it make in the first **40 seconds**?","options":["600","135","120","15"],"answer":1,"explanation":"15 (the burst) + 3 × 40 = 135."}]
---
# Design Drill: Token bucket rate limits #17

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
