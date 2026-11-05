---
slug: "sd03-shards-48"
title: "Design Drill: How many shards? #48"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **53 TB** of data, expected to grow **2×** over the planning horizon. Each shard should hold at most **0.5 TB**. How many shards should you plan for?","options":["424","106","212"],"answer":2},{"prompt":"You have **29 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["174","44","29","87"],"answer":3},{"prompt":"You have **2 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["2","6","3","12"],"answer":1},{"prompt":"You have **33 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **2 TB**. How many shards should you plan for?","options":["17","100","50","25"],"answer":2},{"prompt":"You have **7 TB** of data, expected to grow **2×** over the planning horizon. Each shard should hold at most **0.5 TB**. How many shards should you plan for?","options":["28","56","14"],"answer":0}]
---
# Design Drill: How many shards? #48

Shards needed = total data ÷ comfortable size per shard (and also total write load ÷ write capacity per shard). Take the larger number, and plan for growth.
