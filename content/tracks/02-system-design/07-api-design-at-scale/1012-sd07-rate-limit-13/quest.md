---
slug: "sd07-rate-limit-13"
title: "Design Drill: Token bucket rate limits #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **10 tokens** that refills at **13/s**. Hammering the API nonstop, how many requests can it make in the first **45 seconds**?","options":["450","10","595","585"],"answer":2,"explanation":"10 (the burst) + 13 × 45 = 595."},{"prompt":"A client starts with a full bucket of **95 tokens** that refills at **14/s**. Hammering the API nonstop, how many requests can it make in the first **5 seconds**?","options":["95","70","165","475"],"answer":2,"explanation":"95 (the burst) + 14 × 5 = 165."},{"prompt":"A client starts with a full bucket of **85 tokens** that refills at **15/s**. Hammering the API nonstop, how many requests can it make in the first **25 seconds**?","options":["85","2125","460","375"],"answer":2,"explanation":"85 (the burst) + 15 × 25 = 460."},{"prompt":"A client starts with a full bucket of **40 tokens** that refills at **20/s**. Hammering the API nonstop, how many requests can it make in the first **25 seconds**?","options":["40","500","540","1000"],"answer":2,"explanation":"40 (the burst) + 20 × 25 = 540."},{"prompt":"A client starts with a full bucket of **40 tokens** that refills at **20/s**. Hammering the API nonstop, how many requests can it make in the first **30 seconds**?","options":["40","1200","640","600"],"answer":2,"explanation":"40 (the burst) + 20 × 30 = 640."}]
---
# Design Drill: Token bucket rate limits #13

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
