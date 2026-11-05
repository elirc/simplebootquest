---
slug: "sd07-rate-limit-35"
title: "Design Drill: Token bucket rate limits #35"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **80 tokens** that refills at **13/s**. Hammering the API nonstop, how many requests can it make in the first **50 seconds**?","options":["4000","650","730","80"],"answer":2,"explanation":"80 (the burst) + 13 × 50 = 730."},{"prompt":"A client starts with a full bucket of **60 tokens** that refills at **17/s**. Hammering the API nonstop, how many requests can it make in the first **35 seconds**?","options":["595","655","2100","60"],"answer":1,"explanation":"60 (the burst) + 17 × 35 = 655."},{"prompt":"A client starts with a full bucket of **95 tokens** that refills at **15/s**. Hammering the API nonstop, how many requests can it make in the first **35 seconds**?","options":["620","95","3325","525"],"answer":0,"explanation":"95 (the burst) + 15 × 35 = 620."},{"prompt":"A client starts with a full bucket of **90 tokens** that refills at **12/s**. Hammering the API nonstop, how many requests can it make in the first **25 seconds**?","options":["90","2250","300","390"],"answer":3,"explanation":"90 (the burst) + 12 × 25 = 390."},{"prompt":"A client starts with a full bucket of **95 tokens** that refills at **17/s**. Hammering the API nonstop, how many requests can it make in the first **25 seconds**?","options":["2375","95","425","520"],"answer":3,"explanation":"95 (the burst) + 17 × 25 = 520."}]
---
# Design Drill: Token bucket rate limits #35

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
