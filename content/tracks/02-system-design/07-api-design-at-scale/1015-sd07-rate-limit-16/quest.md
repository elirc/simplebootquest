---
slug: "sd07-rate-limit-16"
title: "Design Drill: Token bucket rate limits #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **35 tokens** that refills at **20/s**. Hammering the API nonstop, how many requests can it make in the first **40 seconds**?","options":["1400","835","800","35"],"answer":1,"explanation":"35 (the burst) + 20 × 40 = 835."},{"prompt":"A client starts with a full bucket of **75 tokens** that refills at **13/s**. Hammering the API nonstop, how many requests can it make in the first **35 seconds**?","options":["75","455","530","2625"],"answer":2,"explanation":"75 (the burst) + 13 × 35 = 530."},{"prompt":"A client starts with a full bucket of **100 tokens** that refills at **8/s**. Hammering the API nonstop, how many requests can it make in the first **25 seconds**?","options":["2500","300","200","100"],"answer":1,"explanation":"100 (the burst) + 8 × 25 = 300."},{"prompt":"A client starts with a full bucket of **10 tokens** that refills at **4/s**. Hammering the API nonstop, how many requests can it make in the first **25 seconds**?","options":["10","110","100","250"],"answer":1,"explanation":"10 (the burst) + 4 × 25 = 110."},{"prompt":"A client starts with a full bucket of **60 tokens** that refills at **9/s**. Hammering the API nonstop, how many requests can it make in the first **55 seconds**?","options":["555","495","3300","60"],"answer":0,"explanation":"60 (the burst) + 9 × 55 = 555."}]
---
# Design Drill: Token bucket rate limits #16

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
