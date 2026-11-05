---
slug: "sd03-shards-25"
title: "Design Drill: How many shards? #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **59 TB** of data, expected to grow **2×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["59","118","236"],"answer":1},{"prompt":"You have **26 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["39","78","156","26"],"answer":1},{"prompt":"You have **34 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["204","34","102","51"],"answer":2},{"prompt":"You have **43 TB** of data, expected to grow **1×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["22","86","43"],"answer":2},{"prompt":"You have **33 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["198","99","33","50"],"answer":1}]
---
# Design Drill: How many shards? #25

Shards needed = total data ÷ comfortable size per shard (and also total write load ÷ write capacity per shard). Take the larger number, and plan for growth.
