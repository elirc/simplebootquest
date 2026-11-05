---
slug: "sd03-shards-8"
title: "Design Drill: How many shards? #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **60 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **2 TB**. How many shards should you plan for?","options":["45","90","30","180"],"answer":1},{"prompt":"You have **25 TB** of data, expected to grow **1×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["50","13","25"],"answer":2},{"prompt":"You have **54 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["81","324","162","54"],"answer":2},{"prompt":"You have **27 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **2 TB**. How many shards should you plan for?","options":["21","82","14","41"],"answer":3},{"prompt":"You have **48 TB** of data, expected to grow **1×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["24","96","48"],"answer":2}]
---
# Design Drill: How many shards? #8

Shards needed = total data ÷ comfortable size per shard (and also total write load ÷ write capacity per shard). Take the larger number, and plan for growth.
