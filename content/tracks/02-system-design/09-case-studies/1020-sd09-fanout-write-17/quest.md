---
slug: "sd09-fanout-write-17"
title: "Design Drill: Feed fan-out cost #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **300 posts/s**, and each author has **1300 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["300","1300","390,000","39,000"],"answer":2},{"prompt":"Users publish **390 posts/s**, and each author has **2200 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["858,000","2200","85,800","390"],"answer":0},{"prompt":"Users publish **10 posts/s**, and each author has **1300 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["130,000","13,000","1300","10"],"answer":1},{"prompt":"Users publish **500 posts/s**, and each author has **500 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["2.5 million","25,000","250,000","500"],"answer":2},{"prompt":"Users publish **400 posts/s**, and each author has **1500 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["600,000","400","1500","60,000"],"answer":0}]
---
# Design Drill: Feed fan-out cost #17

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
