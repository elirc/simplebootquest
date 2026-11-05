---
slug: "sd03-shards-6"
title: "Design Drill: How many shards? #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **24 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **2 TB**. How many shards should you plan for?","options":["12","36","72","18"],"answer":1},{"prompt":"You have **1 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["3","6","2","1"],"answer":0},{"prompt":"You have **52 TB** of data, expected to grow **1×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["26","104","52"],"answer":2},{"prompt":"You have **6 TB** of data, expected to grow **2×** over the planning horizon. Each shard should hold at most **2 TB**. How many shards should you plan for?","options":["6","3","12"],"answer":0},{"prompt":"You have **41 TB** of data, expected to grow **1×** over the planning horizon. Each shard should hold at most **2 TB**. How many shards should you plan for?","options":["11","41","21","42"],"answer":2}]
---
# Design Drill: How many shards? #6

Shards needed = total data ÷ comfortable size per shard (and also total write load ÷ write capacity per shard). Take the larger number, and plan for growth.
