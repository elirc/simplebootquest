---
slug: "sd03-shards-20"
title: "Design Drill: How many shards? #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **59 TB** of data, expected to grow **2×** over the planning horizon. Each shard should hold at most **2 TB**. How many shards should you plan for?","options":["59","30","118"],"answer":0},{"prompt":"You have **41 TB** of data, expected to grow **2×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["164","82","41"],"answer":1},{"prompt":"You have **47 TB** of data, expected to grow **1×** over the planning horizon. Each shard should hold at most **2 TB**. How many shards should you plan for?","options":["24","48","47","12"],"answer":0},{"prompt":"You have **30 TB** of data, expected to grow **1×** over the planning horizon. Each shard should hold at most **0.5 TB**. How many shards should you plan for?","options":["60","120","30"],"answer":0},{"prompt":"You have **1 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **0.5 TB**. How many shards should you plan for?","options":["2","12","6","3"],"answer":2}]
---
# Design Drill: How many shards? #20

Shards needed = total data ÷ comfortable size per shard (and also total write load ÷ write capacity per shard). Take the larger number, and plan for growth.
