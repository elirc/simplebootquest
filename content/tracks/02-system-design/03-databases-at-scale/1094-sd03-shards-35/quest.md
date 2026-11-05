---
slug: "sd03-shards-35"
title: "Design Drill: How many shards? #35"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **52 TB** of data, expected to grow **2×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["104","52","208"],"answer":0},{"prompt":"You have **11 TB** of data, expected to grow **1×** over the planning horizon. Each shard should hold at most **2 TB**. How many shards should you plan for?","options":["3","11","12","6"],"answer":3},{"prompt":"You have **19 TB** of data, expected to grow **1×** over the planning horizon. Each shard should hold at most **0.5 TB**. How many shards should you plan for?","options":["19","76","38"],"answer":2},{"prompt":"You have **18 TB** of data, expected to grow **1×** over the planning horizon. Each shard should hold at most **2 TB**. How many shards should you plan for?","options":["9","18","5"],"answer":0},{"prompt":"You have **21 TB** of data, expected to grow **1×** over the planning horizon. Each shard should hold at most **2 TB**. How many shards should you plan for?","options":["6","21","11","22"],"answer":2}]
---
# Design Drill: How many shards? #35

Shards needed = total data ÷ comfortable size per shard (and also total write load ÷ write capacity per shard). Take the larger number, and plan for growth.
