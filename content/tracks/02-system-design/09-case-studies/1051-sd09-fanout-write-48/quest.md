---
slug: "sd09-fanout-write-48"
title: "Design Drill: Feed fan-out cost #48"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **60 posts/s**, and each author has **1700 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["1700","102,000","60","10,200"],"answer":1},{"prompt":"Users publish **10 posts/s**, and each author has **2200 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["2200","220,000","22,000","10"],"answer":2},{"prompt":"Users publish **100 posts/s**, and each author has **3900 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["39,000","100","390,000","3900"],"answer":2},{"prompt":"Users publish **380 posts/s**, and each author has **1100 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["1100","41,800","380","418,000"],"answer":3},{"prompt":"Users publish **350 posts/s**, and each author has **1400 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["490,000","49,000","350","1400"],"answer":0}]
---
# Design Drill: Feed fan-out cost #48

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
