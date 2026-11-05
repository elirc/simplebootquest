---
slug: "sd03-shards-59"
title: "Design Drill: How many shards? #59"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **8 TB** of data, expected to grow **2×** over the planning horizon. Each shard should hold at most **2 TB**. How many shards should you plan for?","options":["8","4","16"],"answer":0},{"prompt":"You have **8 TB** of data, expected to grow **2×** over the planning horizon. Each shard should hold at most **0.5 TB**. How many shards should you plan for?","options":["32","64","16"],"answer":0},{"prompt":"You have **22 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **0.5 TB**. How many shards should you plan for?","options":["264","132","44","66"],"answer":1},{"prompt":"You have **31 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **2 TB**. How many shards should you plan for?","options":["94","16","24","47"],"answer":3},{"prompt":"You have **26 TB** of data, expected to grow **2×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["52","26","104"],"answer":0}]
---
# Design Drill: How many shards? #59

Shards needed = total data ÷ comfortable size per shard (and also total write load ÷ write capacity per shard). Take the larger number, and plan for growth.
