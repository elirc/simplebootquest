---
slug: "sd09-fanout-write-1"
title: "Design Drill: Feed fan-out cost #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **470 posts/s**, and each author has **1100 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["51,700","470","517,000","1100"],"answer":2},{"prompt":"Users publish **380 posts/s**, and each author has **200 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["7600","380","200","76,000"],"answer":3},{"prompt":"Users publish **200 posts/s**, and each author has **2500 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["2500","500,000","200","50,000"],"answer":1},{"prompt":"Users publish **50 posts/s**, and each author has **2000 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["100,000","2000","50","10,000"],"answer":0},{"prompt":"Users publish **60 posts/s**, and each author has **3400 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["20,400","3400","60","204,000"],"answer":3}]
---
# Design Drill: Feed fan-out cost #1

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
