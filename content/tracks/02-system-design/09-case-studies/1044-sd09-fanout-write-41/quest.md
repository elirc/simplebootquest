---
slug: "sd09-fanout-write-41"
title: "Design Drill: Feed fan-out cost #41"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **490 posts/s**, and each author has **2100 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["1.03 million","2100","102,900","490"],"answer":0},{"prompt":"Users publish **500 posts/s**, and each author has **700 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["350,000","500","700","35,000"],"answer":0},{"prompt":"Users publish **500 posts/s**, and each author has **3100 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["500","155,000","1.55 million","3100"],"answer":2},{"prompt":"Users publish **100 posts/s**, and each author has **900 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["9000","90,000","100","900"],"answer":1},{"prompt":"Users publish **80 posts/s**, and each author has **600 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["48,000","600","4800","80"],"answer":0}]
---
# Design Drill: Feed fan-out cost #41

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
