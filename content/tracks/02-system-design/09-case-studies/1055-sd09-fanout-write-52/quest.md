---
slug: "sd09-fanout-write-52"
title: "Design Drill: Feed fan-out cost #52"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **230 posts/s**, and each author has **700 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["700","161,000","16,100","230"],"answer":1},{"prompt":"Users publish **230 posts/s**, and each author has **1000 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["23,000","1000","230","230,000"],"answer":3},{"prompt":"Users publish **110 posts/s**, and each author has **2600 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["286,000","28,600","110","2600"],"answer":0},{"prompt":"Users publish **500 posts/s**, and each author has **4000 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["200,000","4000","2 million","500"],"answer":2},{"prompt":"Users publish **40 posts/s**, and each author has **1300 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["1300","5200","40","52,000"],"answer":3}]
---
# Design Drill: Feed fan-out cost #52

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
