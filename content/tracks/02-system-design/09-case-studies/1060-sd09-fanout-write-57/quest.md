---
slug: "sd09-fanout-write-57"
title: "Design Drill: Feed fan-out cost #57"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **460 posts/s**, and each author has **700 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["32,200","322,000","700","460"],"answer":1},{"prompt":"Users publish **130 posts/s**, and each author has **1700 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["22,100","1700","130","221,000"],"answer":3},{"prompt":"Users publish **200 posts/s**, and each author has **1400 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["200","280,000","28,000","1400"],"answer":1},{"prompt":"Users publish **40 posts/s**, and each author has **800 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["40","3200","32,000","800"],"answer":2},{"prompt":"Users publish **410 posts/s**, and each author has **3300 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["1.35 million","3300","135,300","410"],"answer":0}]
---
# Design Drill: Feed fan-out cost #57

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
