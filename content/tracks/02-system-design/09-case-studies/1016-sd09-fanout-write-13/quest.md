---
slug: "sd09-fanout-write-13"
title: "Design Drill: Feed fan-out cost #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **430 posts/s**, and each author has **2200 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["2200","946,000","94,600","430"],"answer":1},{"prompt":"Users publish **470 posts/s**, and each author has **1700 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["1700","470","799,000","79,900"],"answer":2},{"prompt":"Users publish **160 posts/s**, and each author has **900 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["144,000","14,400","160","900"],"answer":0},{"prompt":"Users publish **480 posts/s**, and each author has **1600 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["76,800","480","768,000","1600"],"answer":2},{"prompt":"Users publish **450 posts/s**, and each author has **600 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["27,000","600","270,000","450"],"answer":2}]
---
# Design Drill: Feed fan-out cost #13

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
