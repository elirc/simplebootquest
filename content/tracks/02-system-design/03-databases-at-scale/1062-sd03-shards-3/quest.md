---
slug: "sd03-shards-3"
title: "Design Drill: How many shards? #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **50 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["150","50","75","300"],"answer":0},{"prompt":"You have **7 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **2 TB**. How many shards should you plan for?","options":["11","6","22","4"],"answer":0},{"prompt":"You have **14 TB** of data, expected to grow **1×** over the planning horizon. Each shard should hold at most **2 TB**. How many shards should you plan for?","options":["14","7","4"],"answer":1},{"prompt":"You have **17 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["26","102","51","17"],"answer":2},{"prompt":"You have **10 TB** of data, expected to grow **2×** over the planning horizon. Each shard should hold at most **2 TB**. How many shards should you plan for?","options":["10","5","20"],"answer":0}]
---
# Design Drill: How many shards? #3

Shards needed = total data ÷ comfortable size per shard (and also total write load ÷ write capacity per shard). Take the larger number, and plan for growth.
