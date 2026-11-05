---
slug: "sd07-rate-limit-28"
title: "Design Drill: Token bucket rate limits #28"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **75 tokens** that refills at **15/s**. Hammering the API nonstop, how many requests can it make in the first **40 seconds**?","options":["675","75","3000","600"],"answer":0,"explanation":"75 (the burst) + 15 × 40 = 675."},{"prompt":"A client starts with a full bucket of **90 tokens** that refills at **2/s**. Hammering the API nonstop, how many requests can it make in the first **25 seconds**?","options":["140","2250","50","90"],"answer":0,"explanation":"90 (the burst) + 2 × 25 = 140."},{"prompt":"A client starts with a full bucket of **30 tokens** that refills at **8/s**. Hammering the API nonstop, how many requests can it make in the first **45 seconds**?","options":["30","1350","360","390"],"answer":3,"explanation":"30 (the burst) + 8 × 45 = 390."},{"prompt":"A client starts with a full bucket of **95 tokens** that refills at **18/s**. Hammering the API nonstop, how many requests can it make in the first **60 seconds**?","options":["95","5700","1080","1175"],"answer":3,"explanation":"95 (the burst) + 18 × 60 = 1175."},{"prompt":"A client starts with a full bucket of **60 tokens** that refills at **18/s**. Hammering the API nonstop, how many requests can it make in the first **55 seconds**?","options":["60","1050","990","3300"],"answer":1,"explanation":"60 (the burst) + 18 × 55 = 1050."}]
---
# Design Drill: Token bucket rate limits #28

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
