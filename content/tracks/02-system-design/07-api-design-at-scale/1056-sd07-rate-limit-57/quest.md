---
slug: "sd07-rate-limit-57"
title: "Design Drill: Token bucket rate limits #57"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **80 tokens** that refills at **10/s**. Hammering the API nonstop, how many requests can it make in the first **25 seconds**?","options":["250","2000","80","330"],"answer":3,"explanation":"80 (the burst) + 10 × 25 = 330."},{"prompt":"A client starts with a full bucket of **35 tokens** that refills at **20/s**. Hammering the API nonstop, how many requests can it make in the first **10 seconds**?","options":["200","35","235","350"],"answer":2,"explanation":"35 (the burst) + 20 × 10 = 235."},{"prompt":"A client starts with a full bucket of **50 tokens** that refills at **6/s**. Hammering the API nonstop, how many requests can it make in the first **10 seconds**?","options":["110","50","500","60"],"answer":0,"explanation":"50 (the burst) + 6 × 10 = 110."},{"prompt":"A client starts with a full bucket of **80 tokens** that refills at **11/s**. Hammering the API nonstop, how many requests can it make in the first **35 seconds**?","options":["465","80","385","2800"],"answer":0,"explanation":"80 (the burst) + 11 × 35 = 465."},{"prompt":"A client starts with a full bucket of **60 tokens** that refills at **1/s**. Hammering the API nonstop, how many requests can it make in the first **20 seconds**?","options":["80","60","20","1200"],"answer":0,"explanation":"60 (the burst) + 1 × 20 = 80."}]
---
# Design Drill: Token bucket rate limits #57

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
