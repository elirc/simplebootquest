---
slug: "sd07-rate-limit-43"
title: "Design Drill: Token bucket rate limits #43"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **20 tokens** that refills at **14/s**. Hammering the API nonstop, how many requests can it make in the first **40 seconds**?","options":["580","560","800","20"],"answer":0,"explanation":"20 (the burst) + 14 × 40 = 580."},{"prompt":"A client starts with a full bucket of **50 tokens** that refills at **18/s**. Hammering the API nonstop, how many requests can it make in the first **10 seconds**?","options":["50","230","180","500"],"answer":1,"explanation":"50 (the burst) + 18 × 10 = 230."},{"prompt":"A client starts with a full bucket of **80 tokens** that refills at **9/s**. Hammering the API nonstop, how many requests can it make in the first **30 seconds**?","options":["350","80","270","2400"],"answer":0,"explanation":"80 (the burst) + 9 × 30 = 350."},{"prompt":"A client starts with a full bucket of **15 tokens** that refills at **20/s**. Hammering the API nonstop, how many requests can it make in the first **60 seconds**?","options":["1200","900","15","1215"],"answer":3,"explanation":"15 (the burst) + 20 × 60 = 1215."},{"prompt":"A client starts with a full bucket of **5 tokens** that refills at **6/s**. Hammering the API nonstop, how many requests can it make in the first **60 seconds**?","options":["5","360","365","300"],"answer":2,"explanation":"5 (the burst) + 6 × 60 = 365."}]
---
# Design Drill: Token bucket rate limits #43

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
