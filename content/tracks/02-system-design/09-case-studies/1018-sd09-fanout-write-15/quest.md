---
slug: "sd09-fanout-write-15"
title: "Design Drill: Feed fan-out cost #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **400 posts/s**, and each author has **400 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["16,000","400","160,000","1.6 million"],"answer":2},{"prompt":"Users publish **50 posts/s**, and each author has **3000 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["150,000","50","3000","15,000"],"answer":0},{"prompt":"Users publish **50 posts/s**, and each author has **2700 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["13,500","2700","135,000","50"],"answer":2},{"prompt":"Users publish **140 posts/s**, and each author has **2600 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["140","364,000","36,400","2600"],"answer":1},{"prompt":"Users publish **150 posts/s**, and each author has **1600 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["1600","240,000","24,000","150"],"answer":1}]
---
# Design Drill: Feed fan-out cost #15

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
