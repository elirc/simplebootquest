---
slug: "sd09-fanout-write-2"
title: "Design Drill: Feed fan-out cost #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **280 posts/s**, and each author has **2300 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["64,400","644,000","2300","280"],"answer":1},{"prompt":"Users publish **380 posts/s**, and each author has **2700 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["2700","380","102,600","1.03 million"],"answer":3},{"prompt":"Users publish **130 posts/s**, and each author has **1100 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["143,000","130","14,300","1100"],"answer":0},{"prompt":"Users publish **250 posts/s**, and each author has **2000 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["2000","50,000","500,000","250"],"answer":2},{"prompt":"Users publish **140 posts/s**, and each author has **1800 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["25,200","252,000","1800","140"],"answer":1}]
---
# Design Drill: Feed fan-out cost #2

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
