---
slug: "sd07-rate-limit-6"
title: "Design Drill: Token bucket rate limits #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **60 tokens** that refills at **1/s**. Hammering the API nonstop, how many requests can it make in the first **30 seconds**?","options":["30","90","1800","60"],"answer":1,"explanation":"60 (the burst) + 1 × 30 = 90."},{"prompt":"A client starts with a full bucket of **75 tokens** that refills at **13/s**. Hammering the API nonstop, how many requests can it make in the first **60 seconds**?","options":["4500","855","75","780"],"answer":1,"explanation":"75 (the burst) + 13 × 60 = 855."},{"prompt":"A client starts with a full bucket of **50 tokens** that refills at **8/s**. Hammering the API nonstop, how many requests can it make in the first **35 seconds**?","options":["1750","330","280","50"],"answer":1,"explanation":"50 (the burst) + 8 × 35 = 330."},{"prompt":"A client starts with a full bucket of **20 tokens** that refills at **15/s**. Hammering the API nonstop, how many requests can it make in the first **30 seconds**?","options":["450","470","600","20"],"answer":1,"explanation":"20 (the burst) + 15 × 30 = 470."},{"prompt":"A client starts with a full bucket of **30 tokens** that refills at **19/s**. Hammering the API nonstop, how many requests can it make in the first **35 seconds**?","options":["1050","665","30","695"],"answer":3,"explanation":"30 (the burst) + 19 × 35 = 695."}]
---
# Design Drill: Token bucket rate limits #6

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
