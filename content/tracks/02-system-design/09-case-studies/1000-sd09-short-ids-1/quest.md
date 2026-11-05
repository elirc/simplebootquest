---
slug: "sd09-short-ids-1"
title: "Design Drill: Short ID space #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A URL shortener uses **4-character** codes in **hex**. How many distinct codes are possible?","options":["64","10,000","4100","65,536"],"answer":3,"explanation":"16^4 ≈ 65,536."},{"prompt":"A URL shortener uses **4-character** codes in **base62 (a–z, A–Z, 0–9)**. How many distinct codes are possible?","options":["14.8 million","10,000","238,328","248"],"answer":0,"explanation":"62^4 ≈ 14.8 million."},{"prompt":"A URL shortener uses **4-character** codes in **base36 (a–z, 0–9)**. How many distinct codes are possible?","options":["144","1.68 million","10,000","46,656"],"answer":1,"explanation":"36^4 ≈ 1.68 million."},{"prompt":"A URL shortener uses **5-character** codes in **base36 (a–z, 0–9)**. How many distinct codes are possible?","options":["60.5 million","100,000","1.68 million","180"],"answer":0,"explanation":"36^5 ≈ 60.5 million."},{"prompt":"A URL shortener uses **5-character** codes in **base62 (a–z, A–Z, 0–9)**. How many distinct codes are possible?","options":["100,000","310","14.8 million","916 million"],"answer":3,"explanation":"62^5 ≈ 916 million."}]
---
# Design Drill: Short ID space #1

With an alphabet of A characters and length L, there are A^L possible IDs. For random IDs, collisions become likely after about √(A^L) items (the birthday paradox), so keep usage far below that or check for duplicates.
