---
slug: "sd03-shards-37"
title: "Design Drill: How many shards? #37"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **38 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **0.5 TB**. How many shards should you plan for?","options":["228","114","76","456"],"answer":0},{"prompt":"You have **19 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["114","29","19","57"],"answer":3},{"prompt":"You have **27 TB** of data, expected to grow **2×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["27","54","108"],"answer":1},{"prompt":"You have **16 TB** of data, expected to grow **1×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["8","32","16"],"answer":2},{"prompt":"You have **2 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **0.5 TB**. How many shards should you plan for?","options":["6","4","12","24"],"answer":2}]
---
# Design Drill: How many shards? #37

Shards needed = total data ÷ comfortable size per shard (and also total write load ÷ write capacity per shard). Take the larger number, and plan for growth.
