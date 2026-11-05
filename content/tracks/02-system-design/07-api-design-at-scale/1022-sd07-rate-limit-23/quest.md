---
slug: "sd07-rate-limit-23"
title: "Design Drill: Token bucket rate limits #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **90 tokens** that refills at **15/s**. Hammering the API nonstop, how many requests can it make in the first **5 seconds**?","options":["450","75","90","165"],"answer":3,"explanation":"90 (the burst) + 15 × 5 = 165."},{"prompt":"A client starts with a full bucket of **95 tokens** that refills at **14/s**. Hammering the API nonstop, how many requests can it make in the first **10 seconds**?","options":["95","140","235","950"],"answer":2,"explanation":"95 (the burst) + 14 × 10 = 235."},{"prompt":"A client starts with a full bucket of **55 tokens** that refills at **4/s**. Hammering the API nonstop, how many requests can it make in the first **55 seconds**?","options":["220","3025","275","55"],"answer":2,"explanation":"55 (the burst) + 4 × 55 = 275."},{"prompt":"A client starts with a full bucket of **5 tokens** that refills at **13/s**. Hammering the API nonstop, how many requests can it make in the first **60 seconds**?","options":["300","780","5","785"],"answer":3,"explanation":"5 (the burst) + 13 × 60 = 785."},{"prompt":"A client starts with a full bucket of **60 tokens** that refills at **20/s**. Hammering the API nonstop, how many requests can it make in the first **10 seconds**?","options":["60","600","200","260"],"answer":3,"explanation":"60 (the burst) + 20 × 10 = 260."}]
---
# Design Drill: Token bucket rate limits #23

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
