---
slug: "sd09-fanout-write-34"
title: "Design Drill: Feed fan-out cost #34"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **440 posts/s**, and each author has **1200 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["528,000","52,800","1200","440"],"answer":0},{"prompt":"Users publish **290 posts/s**, and each author has **3700 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["290","3700","107,300","1.07 million"],"answer":3},{"prompt":"Users publish **10 posts/s**, and each author has **2700 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["2700","10","270,000","27,000"],"answer":3},{"prompt":"Users publish **90 posts/s**, and each author has **1200 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["10,800","108,000","90","1200"],"answer":1},{"prompt":"Users publish **370 posts/s**, and each author has **3600 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["3600","133,200","370","1.33 million"],"answer":3}]
---
# Design Drill: Feed fan-out cost #34

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
