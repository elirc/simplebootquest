---
slug: "sd03-shards-47"
title: "Design Drill: How many shards? #47"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **11 TB** of data, expected to grow **2×** over the planning horizon. Each shard should hold at most **2 TB**. How many shards should you plan for?","options":["6","22","11"],"answer":2},{"prompt":"You have **3 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **2 TB**. How many shards should you plan for?","options":["2","10","5","3"],"answer":2},{"prompt":"You have **52 TB** of data, expected to grow **1×** over the planning horizon. Each shard should hold at most **0.5 TB**. How many shards should you plan for?","options":["208","104","52"],"answer":1},{"prompt":"You have **1 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **2 TB**. How many shards should you plan for?","options":["3","1","4","2"],"answer":3},{"prompt":"You have **43 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["43","65","258","129"],"answer":3}]
---
# Design Drill: How many shards? #47

Shards needed = total data ÷ comfortable size per shard (and also total write load ÷ write capacity per shard). Take the larger number, and plan for growth.
