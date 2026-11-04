---
slug: "sd-caching-plan"
title: "Design Doc: Caching a Product Catalogue"
type: "design"
xp: 40
hints: ["Split the page: what is the same for everyone, and what is personal?", "For each row of your table, ask: \"what happens when this changes?\""]
rubric: ["Separates public/shared data from personalised data, with different caching for each", "Specifies the layer (CDN, Redis, browser, in-process) and a TTL for each cached item", "Explains invalidation when prices or stock change", "Keeps checkout stock checks uncached (or strongly consistent)", "Addresses cold-cache stampedes (warming, coalescing, stale-while-revalidate or jitter)", "Defines success metrics (hit ratio, DB load, latency)"]
minWords: 200
---
# Design Doc: Caching a Product Catalogue

An online shop has 50,000 products. The product listing and product detail pages get **2,000 requests/second** at peak (a big sale is coming), with a 200:1 read/write ratio. Prices and stock change several times a day; stock **must** be accurate at checkout, but can be a minute stale on listing pages. Some users are logged in and see personalised "recommended for you" sections.

Write a caching plan:

- What is cached, **where** (browser, CDN, Redis, in-process) and for how long.
- How each piece of data is invalidated when it changes.
- How you avoid serving personalised content to the wrong user.
- How you prevent a stampede when the sale starts and caches are cold.
- What is **never** cached, and why.
- How you'll measure whether the caching is working.
