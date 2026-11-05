---
slug: "sd09-fanout-write-28"
title: "Design Drill: Feed fan-out cost #28"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **50 posts/s**, and each author has **700 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["50","35,000","700","3500"],"answer":1},{"prompt":"Users publish **140 posts/s**, and each author has **500 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["500","7000","70,000","140"],"answer":2},{"prompt":"Users publish **280 posts/s**, and each author has **3800 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["3800","1.06 million","280","106,400"],"answer":1},{"prompt":"Users publish **260 posts/s**, and each author has **1700 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["442,000","1700","44,200","260"],"answer":0},{"prompt":"Users publish **20 posts/s**, and each author has **1500 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["20","3000","1500","30,000"],"answer":3}]
---
# Design Drill: Feed fan-out cost #28

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
