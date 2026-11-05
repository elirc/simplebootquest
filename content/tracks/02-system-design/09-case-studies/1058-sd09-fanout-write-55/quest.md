---
slug: "sd09-fanout-write-55"
title: "Design Drill: Feed fan-out cost #55"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **130 posts/s**, and each author has **300 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["3900","39,000","300","130"],"answer":1},{"prompt":"Users publish **50 posts/s**, and each author has **3400 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["17,000","3400","50","170,000"],"answer":3},{"prompt":"Users publish **20 posts/s**, and each author has **700 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["14,000","1400","20","700"],"answer":0},{"prompt":"Users publish **490 posts/s**, and each author has **3700 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["3700","181,300","490","1.81 million"],"answer":3},{"prompt":"Users publish **200 posts/s**, and each author has **2700 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["200","2700","540,000","54,000"],"answer":2}]
---
# Design Drill: Feed fan-out cost #55

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
