---
slug: "sd03-shards-12"
title: "Design Drill: How many shards? #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **56 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **2 TB**. How many shards should you plan for?","options":["84","42","28","168"],"answer":0},{"prompt":"You have **9 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["9","14","27","54"],"answer":2},{"prompt":"You have **17 TB** of data, expected to grow **1×** over the planning horizon. Each shard should hold at most **2 TB**. How many shards should you plan for?","options":["9","18","17","5"],"answer":0},{"prompt":"You have **20 TB** of data, expected to grow **1×** over the planning horizon. Each shard should hold at most **2 TB**. How many shards should you plan for?","options":["5","20","10"],"answer":2},{"prompt":"You have **17 TB** of data, expected to grow **2×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["17","34","68"],"answer":1}]
---
# Design Drill: How many shards? #12

Shards needed = total data ÷ comfortable size per shard (and also total write load ÷ write capacity per shard). Take the larger number, and plan for growth.
