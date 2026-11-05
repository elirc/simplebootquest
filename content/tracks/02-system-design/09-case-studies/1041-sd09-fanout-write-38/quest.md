---
slug: "sd09-fanout-write-38"
title: "Design Drill: Feed fan-out cost #38"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **90 posts/s**, and each author has **1600 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["90","14,400","144,000","1600"],"answer":2},{"prompt":"Users publish **30 posts/s**, and each author has **2500 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["7500","2500","75,000","30"],"answer":2},{"prompt":"Users publish **380 posts/s**, and each author has **100 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["38,000","3800","380","100"],"answer":0},{"prompt":"Users publish **130 posts/s**, and each author has **3300 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["42,900","130","3300","429,000"],"answer":3},{"prompt":"Users publish **170 posts/s**, and each author has **3800 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["646,000","170","64,600","3800"],"answer":0}]
---
# Design Drill: Feed fan-out cost #38

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
