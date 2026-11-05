---
slug: "sd03-shards-23"
title: "Design Drill: How many shards? #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **39 TB** of data, expected to grow **2×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["39","156","78"],"answer":2},{"prompt":"You have **49 TB** of data, expected to grow **1×** over the planning horizon. Each shard should hold at most **2 TB**. How many shards should you plan for?","options":["13","49","25","50"],"answer":2},{"prompt":"You have **57 TB** of data, expected to grow **1×** over the planning horizon. Each shard should hold at most **2 TB**. How many shards should you plan for?","options":["58","15","29","57"],"answer":2},{"prompt":"You have **18 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **0.5 TB**. How many shards should you plan for?","options":["36","54","216","108"],"answer":3},{"prompt":"You have **46 TB** of data, expected to grow **1×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["46","23","92"],"answer":0}]
---
# Design Drill: How many shards? #23

Shards needed = total data ÷ comfortable size per shard (and also total write load ÷ write capacity per shard). Take the larger number, and plan for growth.
