---
slug: "sd03-shards-22"
title: "Design Drill: How many shards? #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **16 TB** of data, expected to grow **1×** over the planning horizon. Each shard should hold at most **2 TB**. How many shards should you plan for?","options":["8","4","16"],"answer":0},{"prompt":"You have **16 TB** of data, expected to grow **2×** over the planning horizon. Each shard should hold at most **0.5 TB**. How many shards should you plan for?","options":["128","64","32"],"answer":1},{"prompt":"You have **14 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **2 TB**. How many shards should you plan for?","options":["42","7","11","21"],"answer":3},{"prompt":"You have **58 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **0.5 TB**. How many shards should you plan for?","options":["696","348","116","174"],"answer":1},{"prompt":"You have **11 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["11","17","66","33"],"answer":3}]
---
# Design Drill: How many shards? #22

Shards needed = total data ÷ comfortable size per shard (and also total write load ÷ write capacity per shard). Take the larger number, and plan for growth.
