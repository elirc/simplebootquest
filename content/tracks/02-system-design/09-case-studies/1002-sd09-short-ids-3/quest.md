---
slug: "sd09-short-ids-3"
title: "Design Drill: Short ID space #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A URL shortener uses **9-character** codes in **base62 (a–z, A–Z, 0–9)**. How many distinct codes are possible?","options":["1 billion","~220 trillion","~14000 trillion","558"],"answer":2,"explanation":"62^9 ≈ ~14000 trillion."},{"prompt":"A URL shortener uses **8-character** codes in **base36 (a–z, 0–9)**. How many distinct codes are possible?","options":["100 million","~2.8 trillion","78.4 billion","288"],"answer":1,"explanation":"36^8 ≈ ~2.8 trillion."},{"prompt":"A URL shortener uses **9-character** codes in **base36 (a–z, 0–9)**. How many distinct codes are possible?","options":["~2.8 trillion","~100 trillion","1 billion","324"],"answer":1,"explanation":"36^9 ≈ ~100 trillion."},{"prompt":"A URL shortener uses **7-character** codes in **hex**. How many distinct codes are possible?","options":["10 million","112","16.8 million","268 million"],"answer":3,"explanation":"16^7 ≈ 268 million."},{"prompt":"A URL shortener uses **10-character** codes in **hex**. How many distinct codes are possible?","options":["160","~1.1 trillion","68.7 billion","10 billion"],"answer":1,"explanation":"16^10 ≈ ~1.1 trillion."}]
---
# Design Drill: Short ID space #3

With an alphabet of A characters and length L, there are A^L possible IDs. For random IDs, collisions become likely after about √(A^L) items (the birthday paradox), so keep usage far below that or check for duplicates.
