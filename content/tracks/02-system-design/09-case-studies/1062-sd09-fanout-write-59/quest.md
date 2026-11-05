---
slug: "sd09-fanout-write-59"
title: "Design Drill: Feed fan-out cost #59"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **280 posts/s**, and each author has **500 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["500","280","14,000","140,000"],"answer":3},{"prompt":"Users publish **20 posts/s**, and each author has **200 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["4000","400","20","200"],"answer":0},{"prompt":"Users publish **450 posts/s**, and each author has **2200 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["2200","990,000","450","99,000"],"answer":1},{"prompt":"Users publish **450 posts/s**, and each author has **900 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["40,500","405,000","900","450"],"answer":1},{"prompt":"Users publish **230 posts/s**, and each author has **2800 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["64,400","230","644,000","2800"],"answer":2}]
---
# Design Drill: Feed fan-out cost #59

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
