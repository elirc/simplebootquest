---
slug: "sd03-shards-44"
title: "Design Drill: How many shards? #44"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **4 TB** of data, expected to grow **2×** over the planning horizon. Each shard should hold at most **0.5 TB**. How many shards should you plan for?","options":["8","32","16"],"answer":2},{"prompt":"You have **15 TB** of data, expected to grow **1×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["8","30","15"],"answer":2},{"prompt":"You have **13 TB** of data, expected to grow **1×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["13","26","7"],"answer":0},{"prompt":"You have **52 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["312","52","78","156"],"answer":3},{"prompt":"You have **29 TB** of data, expected to grow **1×** over the planning horizon. Each shard should hold at most **2 TB**. How many shards should you plan for?","options":["15","8","29","30"],"answer":0}]
---
# Design Drill: How many shards? #44

Shards needed = total data ÷ comfortable size per shard (and also total write load ÷ write capacity per shard). Take the larger number, and plan for growth.
