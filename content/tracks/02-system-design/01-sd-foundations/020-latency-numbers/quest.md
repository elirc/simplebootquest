---
slug: "sd-latency-numbers"
title: "Latency Numbers Every Developer Should Know"
type: "quiz"
xp: 15
resources: [{"title": "Latency numbers (interactive)", "url": "https://colin-scott.github.io/personal_website/research/interactive_latency.html"}]
questions: [{"prompt": "Roughly how much faster is reading RAM than a cross-continent network round trip?", "options": ["About 10×", "About 1,000×", "About 1,000,000×"], "answer": 2, "explanation": "100 ns vs ~100 ms is a factor of about a million."}, {"prompt": "An endpoint runs 40 sequential queries at ~2 ms each. What is the biggest win?", "options": ["A faster CPU", "Reduce round trips: a JOIN, batching, or running independent queries in parallel", "More RAM"], "answer": 1}, {"prompt": "Why do CDNs improve load times for distant users?", "options": ["They compress better", "They serve content from servers physically closer, cutting round-trip time", "They use faster disks"], "answer": 1}, {"prompt": "Which is usually fastest?", "options": ["An indexed query against a database in the same data centre", "A cache hit in local process memory", "An HTTP call to another service"], "answer": 1}, {"prompt": "A user in Sydney uses a server in Virginia. Each round trip costs roughly…", "options": ["2 ms", "20 ms", "200+ ms"], "answer": 2}]
---
# Latency Numbers Every Developer Should Know

Intuition for *how long things take* is the foundation of performance work. Rough orders of magnitude:

| Operation | Time |
|-----------|------|
| Read from memory (RAM) | ~100 ns |
| Read 1 MB sequentially from memory | ~3 µs |
| Read from an SSD | ~16 µs (random 4 KB) |
| Round trip within a data centre | ~0.5 ms |
| Simple indexed DB query (same data centre) | ~1–5 ms |
| Read 1 MB from SSD | ~50 µs–1 ms |
| Round trip London ↔ New York | ~70–80 ms |
| Round trip Europe ↔ Australia | ~250 ms |

Takeaways:

- **Memory is ~1000× faster than the network.** That's why caches work.
- **Network round trips dominate.** An API that makes 30 sequential DB queries at 2 ms each spends 60 ms just waiting. Batch, join, or parallelise.
- **The speed of light is a real limit.** Users far from your server pay ~100+ ms per round trip, which is why CDNs put content near users.
