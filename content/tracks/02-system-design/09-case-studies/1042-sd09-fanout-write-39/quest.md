---
slug: "sd09-fanout-write-39"
title: "Design Drill: Feed fan-out cost #39"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **310 posts/s**, and each author has **2600 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["2600","806,000","80,600","310"],"answer":1},{"prompt":"Users publish **480 posts/s**, and each author has **2300 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["110,400","480","2300","1.1 million"],"answer":3},{"prompt":"Users publish **500 posts/s**, and each author has **2300 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["1.15 million","115,000","500","2300"],"answer":0},{"prompt":"Users publish **190 posts/s**, and each author has **1400 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["266,000","26,600","190","1400"],"answer":0},{"prompt":"Users publish **420 posts/s**, and each author has **1300 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["420","1300","546,000","54,600"],"answer":2}]
---
# Design Drill: Feed fan-out cost #39

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
