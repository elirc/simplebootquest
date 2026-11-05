---
slug: "sd07-rate-limit-27"
title: "Design Drill: Token bucket rate limits #27"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A client starts with a full bucket of **30 tokens** that refills at **18/s**. Hammering the API nonstop, how many requests can it make in the first **10 seconds**?","options":["180","30","210","300"],"answer":2,"explanation":"30 (the burst) + 18 × 10 = 210."},{"prompt":"A client starts with a full bucket of **85 tokens** that refills at **8/s**. Hammering the API nonstop, how many requests can it make in the first **35 seconds**?","options":["280","85","2975","365"],"answer":3,"explanation":"85 (the burst) + 8 × 35 = 365."},{"prompt":"A client starts with a full bucket of **5 tokens** that refills at **3/s**. Hammering the API nonstop, how many requests can it make in the first **60 seconds**?","options":["180","185","300","5"],"answer":1,"explanation":"5 (the burst) + 3 × 60 = 185."},{"prompt":"A client starts with a full bucket of **30 tokens** that refills at **13/s**. Hammering the API nonstop, how many requests can it make in the first **25 seconds**?","options":["750","355","325","30"],"answer":1,"explanation":"30 (the burst) + 13 × 25 = 355."},{"prompt":"A client starts with a full bucket of **85 tokens** that refills at **4/s**. Hammering the API nonstop, how many requests can it make in the first **5 seconds**?","options":["425","85","20","105"],"answer":3,"explanation":"85 (the burst) + 4 × 5 = 105."}]
---
# Design Drill: Token bucket rate limits #27

A **token bucket** holds up to B tokens and refills at R tokens/second. Each request spends one token. It allows bursts of up to B, then a steady R per second.
