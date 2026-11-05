---
slug: "sd09-fanout-write-32"
title: "Design Drill: Feed fan-out cost #32"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **310 posts/s**, and each author has **2800 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["2800","310","868,000","86,800"],"answer":2},{"prompt":"Users publish **300 posts/s**, and each author has **700 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["21,000","300","210,000","700"],"answer":2},{"prompt":"Users publish **100 posts/s**, and each author has **2300 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["23,000","230,000","2300","100"],"answer":1},{"prompt":"Users publish **160 posts/s**, and each author has **1900 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["304,000","30,400","160","1900"],"answer":0},{"prompt":"Users publish **260 posts/s**, and each author has **2900 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["75,400","2900","754,000","260"],"answer":2}]
---
# Design Drill: Feed fan-out cost #32

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
