---
slug: "sd03-shards-36"
title: "Design Drill: How many shards? #36"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **34 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **2 TB**. How many shards should you plan for?","options":["102","17","26","51"],"answer":3},{"prompt":"You have **42 TB** of data, expected to grow **1×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["84","21","42"],"answer":2},{"prompt":"You have **37 TB** of data, expected to grow **2×** over the planning horizon. Each shard should hold at most **2 TB**. How many shards should you plan for?","options":["37","74","19"],"answer":0},{"prompt":"You have **39 TB** of data, expected to grow **1×** over the planning horizon. Each shard should hold at most **2 TB**. How many shards should you plan for?","options":["40","39","20","10"],"answer":2},{"prompt":"You have **37 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **2 TB**. How many shards should you plan for?","options":["56","112","28","19"],"answer":0}]
---
# Design Drill: How many shards? #36

Shards needed = total data ÷ comfortable size per shard (and also total write load ÷ write capacity per shard). Take the larger number, and plan for growth.
