---
slug: "sd-estimation"
title: "Back-of-the-Envelope Estimation"
type: "quiz"
xp: 15
questions: [{"prompt": "About how many seconds are in a day, rounded for estimates?", "options": ["10,000", "100,000", "1,000,000"], "answer": 1}, {"prompt": "10 million requests per day is roughly how many per second on average?", "options": ["~1", "~100", "~10,000"], "answer": 1, "explanation": "10M / 100k s ≈ 100/s."}, {"prompt": "Why estimate peak traffic, not just the average?", "options": ["Averages are always wrong", "Systems must handle the busiest moments, often several times the average", "Peaks are easier to calculate"], "answer": 1}, {"prompt": "50 MB of new text data per day means the database will…", "options": ["Need sharding immediately", "Grow ~18 GB/year: comfortably handled by one Postgres instance", "Run out of space in a week"], "answer": 1}, {"prompt": "What is the main goal of a back-of-the-envelope estimate?", "options": ["An exact capacity plan", "Getting the order of magnitude right to spot which parts actually need special design", "Impressing interviewers"], "answer": 1}]
---
# Back-of-the-Envelope Estimation

You don't need exact numbers, just the right **order of magnitude**. Estimates tell you whether one server is plenty or whether you need a cluster.

### Handy numbers

- 1 day ≈ 86,400 s ≈ **100,000 s** (round it!)
- 1 million requests/day ≈ **~12 requests/second** on average
- Peak traffic is often **2–10× average**
- A single well-written Node API instance can often handle **hundreds to a few thousand** simple requests/second

### Worked example: a recipe app

- 1M daily active users, each viewing 20 pages/day → 20M reads/day → 20M / 100k ≈ **200 reads/s**, peak ~1,000/s.
- 1% of users post a recipe daily: 10k writes/day → **~0.1 writes/s**.
- Each recipe ≈ 5 KB of text → 10k × 5 KB = **50 MB/day** ≈ 18 GB/year. That fits comfortably in one Postgres database.
- Photos at 500 KB each → **5 GB/day** ≈ 1.8 TB/year. Those belong in object storage (S3), not the database.

The estimate immediately shows **where the real problems are** (photo storage and read traffic), and where they aren't (text writes).
