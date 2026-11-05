---
slug: "sd03-shards-26"
title: "Design Drill: How many shards? #26"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **29 TB** of data, expected to grow **1×** over the planning horizon. Each shard should hold at most **0.5 TB**. How many shards should you plan for?","options":["29","116","58"],"answer":2},{"prompt":"You have **21 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **0.5 TB**. How many shards should you plan for?","options":["252","126","42","63"],"answer":1},{"prompt":"You have **22 TB** of data, expected to grow **3×** over the planning horizon. Each shard should hold at most **2 TB**. How many shards should you plan for?","options":["66","11","17","33"],"answer":3},{"prompt":"You have **45 TB** of data, expected to grow **1×** over the planning horizon. Each shard should hold at most **2 TB**. How many shards should you plan for?","options":["23","12","45","46"],"answer":0},{"prompt":"You have **50 TB** of data, expected to grow **2×** over the planning horizon. Each shard should hold at most **2 TB**. How many shards should you plan for?","options":["100","50","25"],"answer":1}]
---
# Design Drill: How many shards? #26

Shards needed = total data ÷ comfortable size per shard (and also total write load ÷ write capacity per shard). Take the larger number, and plan for growth.
