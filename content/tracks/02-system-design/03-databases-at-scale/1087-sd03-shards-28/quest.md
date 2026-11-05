---
slug: "sd03-shards-28"
title: "Design Drill: How many shards? #28"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **36 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **0.5 TB**. How many shards should you plan for?","options":["72","108","432","216"],"answer":3},{"prompt":"You have **2 TB** of data, expected to grow **1×** over the planning horizon. Each shard should hold at most **0.5 TB**. How many shards should you plan for?","options":["4","8","2"],"answer":0},{"prompt":"You have **25 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **0.5 TB**. How many shards should you plan for?","options":["75","300","50","150"],"answer":3},{"prompt":"You have **51 TB** of data, expected to grow **2×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["102","204","51"],"answer":0},{"prompt":"You have **47 TB** of data, expected to grow **1×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["24","94","47"],"answer":2}]
---
# Design Drill: How many shards? #28

Shards needed = total data ÷ comfortable size per shard (and also total write load ÷ write capacity per shard). Take the larger number, and plan for growth.
