---
slug: "sd03-shards-5"
title: "Design Drill: How many shards? #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **41 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["62","41","246","123"],"answer":3},{"prompt":"You have **23 TB** of data, expected to grow **1×** over the planning horizon. Each shard should hold at most **2 TB**. How many shards should you plan for?","options":["12","23","24","6"],"answer":0},{"prompt":"You have **51 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **2 TB**. How many shards should you plan for?","options":["26","39","77","154"],"answer":2},{"prompt":"You have **46 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **2 TB**. How many shards should you plan for?","options":["35","138","23","69"],"answer":3},{"prompt":"You have **52 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **0.5 TB**. How many shards should you plan for?","options":["156","104","624","312"],"answer":3}]
---
# Design Drill: How many shards? #5

Shards needed = total data ÷ comfortable size per shard (and also total write load ÷ write capacity per shard). Take the larger number, and plan for growth.
