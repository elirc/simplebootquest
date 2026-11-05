---
slug: "sd07-rate-limit-48"
title: "Design Drill: Token bucket rate limits #48"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **95 tokens** that refills at **4/s**. Hammering the API nonstop, how many requests can it make in the first **40 seconds**?","options":["95","160","255","3800"],"answer":2,"explanation":"95 (the burst) + 4 × 40 = 255."},{"prompt":"A client starts with a full bucket of **100 tokens** that refills at **13/s**. Hammering the API nonstop, how many requests can it make in the first **55 seconds**?","options":["5500","815","100","715"],"answer":1,"explanation":"100 (the burst) + 13 × 55 = 815."},{"prompt":"A client starts with a full bucket of **80 tokens** that refills at **14/s**. Hammering the API nonstop, how many requests can it make in the first **55 seconds**?","options":["4400","80","850","770"],"answer":2,"explanation":"80 (the burst) + 14 × 55 = 850."},{"prompt":"A client starts with a full bucket of **15 tokens** that refills at **20/s**. Hammering the API nonstop, how many requests can it make in the first **15 seconds**?","options":["315","300","225","15"],"answer":0,"explanation":"15 (the burst) + 20 × 15 = 315."},{"prompt":"A client starts with a full bucket of **35 tokens** that refills at **10/s**. Hammering the API nonstop, how many requests can it make in the first **25 seconds**?","options":["35","285","875","250"],"answer":1,"explanation":"35 (the burst) + 10 × 25 = 285."}]
---
# Design Drill: Token bucket rate limits #48

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
