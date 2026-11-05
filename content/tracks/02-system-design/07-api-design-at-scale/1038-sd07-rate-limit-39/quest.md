---
slug: "sd07-rate-limit-39"
title: "Design Drill: Token bucket rate limits #39"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **85 tokens** that refills at **5/s**. Hammering the API nonstop, how many requests can it make in the first **30 seconds**?","options":["2550","150","85","235"],"answer":3,"explanation":"85 (the burst) + 5 × 30 = 235."},{"prompt":"A client starts with a full bucket of **5 tokens** that refills at **20/s**. Hammering the API nonstop, how many requests can it make in the first **30 seconds**?","options":["600","150","5","605"],"answer":3,"explanation":"5 (the burst) + 20 × 30 = 605."},{"prompt":"A client starts with a full bucket of **75 tokens** that refills at **4/s**. Hammering the API nonstop, how many requests can it make in the first **5 seconds**?","options":["95","375","75","20"],"answer":0,"explanation":"75 (the burst) + 4 × 5 = 95."},{"prompt":"A client starts with a full bucket of **60 tokens** that refills at **19/s**. Hammering the API nonstop, how many requests can it make in the first **35 seconds**?","options":["725","60","2100","665"],"answer":0,"explanation":"60 (the burst) + 19 × 35 = 725."},{"prompt":"A client starts with a full bucket of **65 tokens** that refills at **10/s**. Hammering the API nonstop, how many requests can it make in the first **25 seconds**?","options":["1625","65","315","250"],"answer":2,"explanation":"65 (the burst) + 10 × 25 = 315."}]
---
# Design Drill: Token bucket rate limits #39

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
