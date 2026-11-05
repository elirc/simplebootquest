---
slug: "sd07-rate-limit-8"
title: "Design Drill: Token bucket rate limits #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **20 tokens** that refills at **20/s**. Hammering the API nonstop, how many requests can it make in the first **30 seconds**?","options":["600","640","620","20"],"answer":2,"explanation":"20 (the burst) + 20 × 30 = 620."},{"prompt":"A client starts with a full bucket of **90 tokens** that refills at **7/s**. Hammering the API nonstop, how many requests can it make in the first **25 seconds**?","options":["2250","90","175","265"],"answer":3,"explanation":"90 (the burst) + 7 × 25 = 265."},{"prompt":"A client starts with a full bucket of **75 tokens** that refills at **1/s**. Hammering the API nonstop, how many requests can it make in the first **50 seconds**?","options":["3750","125","50","75"],"answer":1,"explanation":"75 (the burst) + 1 × 50 = 125."},{"prompt":"A client starts with a full bucket of **95 tokens** that refills at **6/s**. Hammering the API nonstop, how many requests can it make in the first **30 seconds**?","options":["95","275","180","2850"],"answer":1,"explanation":"95 (the burst) + 6 × 30 = 275."},{"prompt":"A client starts with a full bucket of **95 tokens** that refills at **17/s**. Hammering the API nonstop, how many requests can it make in the first **5 seconds**?","options":["475","85","180","95"],"answer":2,"explanation":"95 (the burst) + 17 × 5 = 180."}]
---
# Design Drill: Token bucket rate limits #8

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
