---
slug: "sd03-shards-13"
title: "Design Drill: How many shards? #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **10 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **1 TB**. How many shards should you plan for?","options":["30","10","15","60"],"answer":0},{"prompt":"You have **32 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **0.5 TB**. How many shards should you plan for?","options":["64","96","192","384"],"answer":2},{"prompt":"You have **11 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **0.5 TB**. How many shards should you plan for?","options":["33","132","22","66"],"answer":3},{"prompt":"You have **8 TB** of data, expected to grow **1×** over the planning horizon. Each shard should hold at most **2 TB**. How many shards should you plan for?","options":["4","2","8"],"answer":0},{"prompt":"You have **48 TB** of data, expected to grow **2×** over the planning horizon. Each shard should hold at most **2 TB**. How many shards should you plan for?","options":["96","24","48"],"answer":2}]
---
# Design Drill: How many shards? #13

Shards needed = total data ÷ comfortable size per shard (and also total write load ÷ write capacity per shard). Take the larger number, and plan for growth.
