---
slug: "sd03-shards-7"
title: "Design Drill: How many shards? #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **4 TB** of data, expected to grow **1×** over the planning horizon. Each shard should hold at most **0.5 TB**. How many shards should you plan for?","options":["4","8","16"],"answer":1},{"prompt":"You have **10 TB** of data, expected to grow **1×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["5","20","10"],"answer":2},{"prompt":"You have **37 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **0.5 TB**. How many shards should you plan for?","options":["111","222","444","74"],"answer":1},{"prompt":"You have **18 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["18","27","108","54"],"answer":3},{"prompt":"You have **51 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["153","51","306","77"],"answer":0}]
---
# Design Drill: How many shards? #7

Shards needed = total data ÷ comfortable size per shard (and also total write load ÷ write capacity per shard). Take the larger number, and plan for growth.
