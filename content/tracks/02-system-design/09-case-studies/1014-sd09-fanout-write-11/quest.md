---
slug: "sd09-fanout-write-11"
title: "Design Drill: Feed fan-out cost #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **390 posts/s**, and each author has **600 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["390","600","234,000","23,400"],"answer":2},{"prompt":"Users publish **340 posts/s**, and each author has **1300 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["442,000","44,200","1300","340"],"answer":0},{"prompt":"Users publish **180 posts/s**, and each author has **1600 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["1600","28,800","288,000","180"],"answer":2},{"prompt":"Users publish **240 posts/s**, and each author has **2000 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["240","480,000","2000","48,000"],"answer":1},{"prompt":"Users publish **160 posts/s**, and each author has **2100 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["160","33,600","336,000","2100"],"answer":2}]
---
# Design Drill: Feed fan-out cost #11

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
