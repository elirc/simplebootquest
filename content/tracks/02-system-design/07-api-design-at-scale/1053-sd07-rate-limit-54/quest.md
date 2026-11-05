---
slug: "sd07-rate-limit-54"
title: "Design Drill: Token bucket rate limits #54"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **75 tokens** that refills at **5/s**. Hammering the API nonstop, how many requests can it make in the first **60 seconds**?","options":["75","375","4500","300"],"answer":1,"explanation":"75 (the burst) + 5 × 60 = 375."},{"prompt":"A client starts with a full bucket of **70 tokens** that refills at **16/s**. Hammering the API nonstop, how many requests can it make in the first **5 seconds**?","options":["80","350","150","70"],"answer":2,"explanation":"70 (the burst) + 16 × 5 = 150."},{"prompt":"A client starts with a full bucket of **20 tokens** that refills at **5/s**. Hammering the API nonstop, how many requests can it make in the first **10 seconds**?","options":["70","50","20","200"],"answer":0,"explanation":"20 (the burst) + 5 × 10 = 70."},{"prompt":"A client starts with a full bucket of **85 tokens** that refills at **3/s**. Hammering the API nonstop, how many requests can it make in the first **20 seconds**?","options":["145","60","85","1700"],"answer":0,"explanation":"85 (the burst) + 3 × 20 = 145."},{"prompt":"A client starts with a full bucket of **60 tokens** that refills at **10/s**. Hammering the API nonstop, how many requests can it make in the first **25 seconds**?","options":["1500","250","60","310"],"answer":3,"explanation":"60 (the burst) + 10 × 25 = 310."}]
---
# Design Drill: Token bucket rate limits #54

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
