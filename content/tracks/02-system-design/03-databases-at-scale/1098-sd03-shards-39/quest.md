---
slug: "sd03-shards-39"
title: "Design Drill: How many shards? #39"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **11 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **2 TB**. How many shards should you plan for?","options":["34","6","9","17"],"answer":3},{"prompt":"You have **48 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["144","72","288","48"],"answer":0},{"prompt":"You have **33 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **0.5 TB**. How many shards should you plan for?","options":["396","99","66","198"],"answer":3},{"prompt":"You have **9 TB** of data, expected to grow **2×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["9","36","18"],"answer":2},{"prompt":"You have **27 TB** of data, expected to grow **2×** over the planning horizon. Each shard should hold at most **2 TB**. How many shards should you plan for?","options":["14","54","27"],"answer":2}]
---
# Design Drill: How many shards? #39

Shards needed = total data ÷ comfortable size per shard (and also total write load ÷ write capacity per shard). Take the larger number, and plan for growth.
