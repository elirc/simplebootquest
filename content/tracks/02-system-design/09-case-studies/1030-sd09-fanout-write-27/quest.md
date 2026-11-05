---
slug: "sd09-fanout-write-27"
title: "Design Drill: Feed fan-out cost #27"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **140 posts/s**, and each author has **3300 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["140","462,000","46,200","3300"],"answer":1},{"prompt":"Users publish **190 posts/s**, and each author has **2700 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["190","51,300","2700","513,000"],"answer":3},{"prompt":"Users publish **210 posts/s**, and each author has **300 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["300","210","6300","63,000"],"answer":3},{"prompt":"Users publish **420 posts/s**, and each author has **1100 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["420","46,200","462,000","1100"],"answer":2},{"prompt":"Users publish **490 posts/s**, and each author has **3200 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["490","156,800","3200","1.57 million"],"answer":3}]
---
# Design Drill: Feed fan-out cost #27

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
