---
slug: "sd07-rate-limit-53"
title: "Design Drill: Token bucket rate limits #53"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **55 tokens** that refills at **8/s**. Hammering the API nonstop, how many requests can it make in the first **60 seconds**?","options":["480","535","3300","55"],"answer":1,"explanation":"55 (the burst) + 8 × 60 = 535."},{"prompt":"A client starts with a full bucket of **90 tokens** that refills at **4/s**. Hammering the API nonstop, how many requests can it make in the first **60 seconds**?","options":["5400","240","90","330"],"answer":3,"explanation":"90 (the burst) + 4 × 60 = 330."},{"prompt":"A client starts with a full bucket of **90 tokens** that refills at **17/s**. Hammering the API nonstop, how many requests can it make in the first **10 seconds**?","options":["260","170","900","90"],"answer":0,"explanation":"90 (the burst) + 17 × 10 = 260."},{"prompt":"A client starts with a full bucket of **40 tokens** that refills at **2/s**. Hammering the API nonstop, how many requests can it make in the first **15 seconds**?","options":["40","30","600","70"],"answer":3,"explanation":"40 (the burst) + 2 × 15 = 70."},{"prompt":"A client starts with a full bucket of **85 tokens** that refills at **17/s**. Hammering the API nonstop, how many requests can it make in the first **25 seconds**?","options":["510","425","85","2125"],"answer":0,"explanation":"85 (the burst) + 17 × 25 = 510."}]
---
# Design Drill: Token bucket rate limits #53

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
