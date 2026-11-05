---
slug: "sd09-fanout-write-16"
title: "Design Drill: Feed fan-out cost #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **410 posts/s**, and each author has **800 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["32,800","328,000","410","800"],"answer":1},{"prompt":"Users publish **40 posts/s**, and each author has **1500 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["1500","40","60,000","6000"],"answer":2},{"prompt":"Users publish **140 posts/s**, and each author has **3600 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["50,400","140","504,000","3600"],"answer":2},{"prompt":"Users publish **370 posts/s**, and each author has **900 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["370","333,000","33,300","900"],"answer":1},{"prompt":"Users publish **160 posts/s**, and each author has **1600 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["160","256,000","1600","25,600"],"answer":1}]
---
# Design Drill: Feed fan-out cost #16

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
