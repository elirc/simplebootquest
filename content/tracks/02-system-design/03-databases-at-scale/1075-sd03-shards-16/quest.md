---
slug: "sd03-shards-16"
title: "Design Drill: How many shards? #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **6 TB** of data, expected to grow **1×** over the planning horizon. Each shard should hold at most **0.5 TB**. How many shards should you plan for?","options":["12","6","24"],"answer":0},{"prompt":"You have **5 TB** of data, expected to grow **2×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["10","20","5"],"answer":0},{"prompt":"You have **10 TB** of data, expected to grow **2×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["20","40","10"],"answer":0},{"prompt":"You have **24 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["36","72","144","24"],"answer":1},{"prompt":"You have **4 TB** of data, expected to grow **2×** over the planning horizon. Each shard should hold at most **2 TB**. How many shards should you plan for?","options":["4","8","2"],"answer":0}]
---
# Design Drill: How many shards? #16

Shards needed = total data ÷ comfortable size per shard (and also total write load ÷ write capacity per shard). Take the larger number, and plan for growth.
