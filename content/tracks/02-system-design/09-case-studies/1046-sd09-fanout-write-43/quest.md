---
slug: "sd09-fanout-write-43"
title: "Design Drill: Feed fan-out cost #43"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **80 posts/s**, and each author has **3700 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["3700","296,000","80","29,600"],"answer":1},{"prompt":"Users publish **60 posts/s**, and each author has **1900 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["11,400","60","1900","114,000"],"answer":3},{"prompt":"Users publish **230 posts/s**, and each author has **600 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["13,800","230","600","138,000"],"answer":3},{"prompt":"Users publish **120 posts/s**, and each author has **3900 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["3900","120","46,800","468,000"],"answer":3},{"prompt":"Users publish **320 posts/s**, and each author has **3900 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["3900","1.25 million","320","124,800"],"answer":1}]
---
# Design Drill: Feed fan-out cost #43

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
