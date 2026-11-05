---
slug: "sd03-shards-17"
title: "Design Drill: How many shards? #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **2 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **2 TB**. How many shards should you plan for?","options":["3","6","2","1"],"answer":0},{"prompt":"You have **30 TB** of data, expected to grow **2×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["30","120","60"],"answer":2},{"prompt":"You have **45 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["68","45","135","270"],"answer":2},{"prompt":"You have **27 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["41","162","81","27"],"answer":2},{"prompt":"You have **60 TB** of data, expected to grow **2×** over the planning horizon. Each shard should hold at most **0.5 TB**. How many shards should you plan for?","options":["120","240","480"],"answer":1}]
---
# Design Drill: How many shards? #17

Shards needed = total data ÷ comfortable size per shard (and also total write load ÷ write capacity per shard). Take the larger number, and plan for growth.
