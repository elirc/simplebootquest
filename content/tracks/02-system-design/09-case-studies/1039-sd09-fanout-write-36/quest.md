---
slug: "sd09-fanout-write-36"
title: "Design Drill: Feed fan-out cost #36"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **370 posts/s**, and each author has **2600 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["96,200","962,000","370","2600"],"answer":1},{"prompt":"Users publish **100 posts/s**, and each author has **1500 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["150,000","15,000","1500","100"],"answer":0},{"prompt":"Users publish **70 posts/s**, and each author has **2000 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["14,000","2000","140,000","70"],"answer":2},{"prompt":"Users publish **390 posts/s**, and each author has **1800 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["70,200","390","702,000","1800"],"answer":2},{"prompt":"Users publish **270 posts/s**, and each author has **4000 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["1.08 million","270","108,000","4000"],"answer":0}]
---
# Design Drill: Feed fan-out cost #36

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
