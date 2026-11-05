---
slug: "sd03-shards-19"
title: "Design Drill: How many shards? #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **8 TB** of data, expected to grow **1×** over the planning horizon. Each shard should hold at most **0.5 TB**. How many shards should you plan for?","options":["32","8","16"],"answer":2},{"prompt":"You have **17 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **2 TB**. How many shards should you plan for?","options":["9","26","52","13"],"answer":1},{"prompt":"You have **15 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["15","90","45","23"],"answer":2},{"prompt":"You have **35 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["210","105","53","35"],"answer":1},{"prompt":"You have **42 TB** of data, expected to grow **1×** over the planning horizon. Each shard should hold at most **0.5 TB**. How many shards should you plan for?","options":["168","42","84"],"answer":2}]
---
# Design Drill: How many shards? #19

Shards needed = total data ÷ comfortable size per shard (and also total write load ÷ write capacity per shard). Take the larger number, and plan for growth.
