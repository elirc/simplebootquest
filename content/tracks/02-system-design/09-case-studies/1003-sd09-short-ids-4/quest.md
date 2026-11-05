---
slug: "sd09-short-ids-4"
title: "Design Drill: Short ID space #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A URL shortener uses **10-character** codes in **base36 (a–z, 0–9)**. How many distinct codes are possible?","options":["~100 trillion","~3700 trillion","360","10 billion"],"answer":1,"explanation":"36^10 ≈ ~3700 trillion."},{"prompt":"A URL shortener uses **10-character** codes in **base62 (a–z, A–Z, 0–9)**. How many distinct codes are possible?","options":["620","10 billion","~14000 trillion","~840000 trillion"],"answer":3,"explanation":"62^10 ≈ ~840000 trillion."},{"prompt":"A URL shortener uses **7-character** codes in **base62 (a–z, A–Z, 0–9)**. How many distinct codes are possible?","options":["56.8 billion","434","~3.5 trillion","10 million"],"answer":2,"explanation":"62^7 ≈ ~3.5 trillion."},{"prompt":"A URL shortener uses **6-character** codes in **base36 (a–z, 0–9)**. How many distinct codes are possible?","options":["1 million","2.18 billion","60.5 million","216"],"answer":1,"explanation":"36^6 ≈ 2.18 billion."},{"prompt":"A URL shortener uses **6-character** codes in **hex**. How many distinct codes are possible?","options":["16.8 million","1 million","96","1.05 million"],"answer":0,"explanation":"16^6 ≈ 16.8 million."}]
---
# Design Drill: Short ID space #4

With an alphabet of A characters and length L, there are A^L possible IDs. For random IDs, collisions become likely after about √(A^L) items (the birthday paradox), so keep usage far below that or check for duplicates.
