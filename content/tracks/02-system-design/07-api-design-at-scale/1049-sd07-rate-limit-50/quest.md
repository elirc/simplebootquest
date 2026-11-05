---
slug: "sd07-rate-limit-50"
title: "Design Drill: Token bucket rate limits #50"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **100 tokens** that refills at **9/s**. Hammering the API nonstop, how many requests can it make in the first **50 seconds**?","options":["550","100","5000","450"],"answer":0,"explanation":"100 (the burst) + 9 × 50 = 550."},{"prompt":"A client starts with a full bucket of **25 tokens** that refills at **3/s**. Hammering the API nonstop, how many requests can it make in the first **20 seconds**?","options":["60","25","500","85"],"answer":3,"explanation":"25 (the burst) + 3 × 20 = 85."},{"prompt":"A client starts with a full bucket of **75 tokens** that refills at **12/s**. Hammering the API nonstop, how many requests can it make in the first **15 seconds**?","options":["1125","75","255","180"],"answer":2,"explanation":"75 (the burst) + 12 × 15 = 255."},{"prompt":"A client starts with a full bucket of **70 tokens** that refills at **15/s**. Hammering the API nonstop, how many requests can it make in the first **50 seconds**?","options":["750","820","3500","70"],"answer":1,"explanation":"70 (the burst) + 15 × 50 = 820."},{"prompt":"A client starts with a full bucket of **5 tokens** that refills at **4/s**. Hammering the API nonstop, how many requests can it make in the first **25 seconds**?","options":["125","105","100","5"],"answer":1,"explanation":"5 (the burst) + 4 × 25 = 105."}]
---
# Design Drill: Token bucket rate limits #50

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
