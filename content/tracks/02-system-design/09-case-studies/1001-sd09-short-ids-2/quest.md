---
slug: "sd09-short-ids-2"
title: "Design Drill: Short ID space #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A URL shortener uses **6-character** codes in **base62 (a–z, A–Z, 0–9)**. How many distinct codes are possible?","options":["372","916 million","56.8 billion","1 million"],"answer":2,"explanation":"62^6 ≈ 56.8 billion."},{"prompt":"A URL shortener uses **9-character** codes in **hex**. How many distinct codes are possible?","options":["68.7 billion","1 billion","144","4.29 billion"],"answer":0,"explanation":"16^9 ≈ 68.7 billion."},{"prompt":"A URL shortener uses **8-character** codes in **hex**. How many distinct codes are possible?","options":["128","4.29 billion","268 million","100 million"],"answer":1,"explanation":"16^8 ≈ 4.29 billion."},{"prompt":"A URL shortener uses **5-character** codes in **hex**. How many distinct codes are possible?","options":["100,000","1.05 million","80","65,536"],"answer":1,"explanation":"16^5 ≈ 1.05 million."},{"prompt":"A URL shortener uses **8-character** codes in **base62 (a–z, A–Z, 0–9)**. How many distinct codes are possible?","options":["496","~3.5 trillion","100 million","~220 trillion"],"answer":3,"explanation":"62^8 ≈ ~220 trillion."}]
---
# Design Drill: Short ID space #2

With an alphabet of A characters and length L, there are A^L possible IDs. For random IDs, collisions become likely after about √(A^L) items (the birthday paradox), so keep usage far below that or check for duplicates.
