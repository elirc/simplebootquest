---
slug: "sd09-fanout-write-37"
title: "Design Drill: Feed fan-out cost #37"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **240 posts/s**, and each author has **1900 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["240","45,600","1900","456,000"],"answer":3},{"prompt":"Users publish **240 posts/s**, and each author has **1800 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["1800","240","43,200","432,000"],"answer":3},{"prompt":"Users publish **70 posts/s**, and each author has **2600 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["18,200","70","2600","182,000"],"answer":3},{"prompt":"Users publish **410 posts/s**, and each author has **2300 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["943,000","2300","410","94,300"],"answer":0},{"prompt":"Users publish **410 posts/s**, and each author has **3000 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["3000","123,000","1.23 million","410"],"answer":2}]
---
# Design Drill: Feed fan-out cost #37

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
