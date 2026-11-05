---
slug: "sd03-shards-32"
title: "Design Drill: How many shards? #32"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **29 TB** of data, expected to grow **2×** over the planning horizon. Each shard should hold at most **2 TB**. How many shards should you plan for?","options":["58","15","29"],"answer":2},{"prompt":"You have **21 TB** of data, expected to grow **2×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["84","21","42"],"answer":2},{"prompt":"You have **13 TB** of data, expected to grow **2×** over the planning horizon. Each shard should hold at most **0.5 TB**. How many shards should you plan for?","options":["104","26","52"],"answer":2},{"prompt":"You have **58 TB** of data, expected to grow **1×** over the planning horizon. Each shard should hold at most **0.5 TB**. How many shards should you plan for?","options":["116","58","232"],"answer":0},{"prompt":"You have **23 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **2 TB**. How many shards should you plan for?","options":["18","35","12","70"],"answer":1}]
---
# Design Drill: How many shards? #32

Shards needed = total data ÷ comfortable size per shard (and also total write load ÷ write capacity per shard). Take the larger number, and plan for growth.
