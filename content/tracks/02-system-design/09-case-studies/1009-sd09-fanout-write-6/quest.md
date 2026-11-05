---
slug: "sd09-fanout-write-6"
title: "Design Drill: Feed fan-out cost #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **80 posts/s**, and each author has **500 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["80","40,000","4000","500"],"answer":1},{"prompt":"Users publish **430 posts/s**, and each author has **2900 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["1.25 million","124,700","430","2900"],"answer":0},{"prompt":"Users publish **190 posts/s**, and each author has **3100 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["190","3100","58,900","589,000"],"answer":3},{"prompt":"Users publish **20 posts/s**, and each author has **800 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["20","1600","16,000","800"],"answer":2},{"prompt":"Users publish **180 posts/s**, and each author has **2300 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["180","2300","41,400","414,000"],"answer":3}]
---
# Design Drill: Feed fan-out cost #6

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
