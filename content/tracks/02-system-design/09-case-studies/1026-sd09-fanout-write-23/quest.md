---
slug: "sd09-fanout-write-23"
title: "Design Drill: Feed fan-out cost #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **410 posts/s**, and each author has **2100 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["2100","861,000","410","86,100"],"answer":1},{"prompt":"Users publish **180 posts/s**, and each author has **3300 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["59,400","180","594,000","3300"],"answer":2},{"prompt":"Users publish **380 posts/s**, and each author has **3200 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["1.22 million","380","3200","121,600"],"answer":0},{"prompt":"Users publish **100 posts/s**, and each author has **2600 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["2600","26,000","100","260,000"],"answer":3},{"prompt":"Users publish **350 posts/s**, and each author has **3800 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["350","133,000","1.33 million","3800"],"answer":2}]
---
# Design Drill: Feed fan-out cost #23

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
