---
slug: "sd09-fanout-write-30"
title: "Design Drill: Feed fan-out cost #30"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **330 posts/s**, and each author has **2400 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["2400","79,200","792,000","330"],"answer":2},{"prompt":"Users publish **420 posts/s**, and each author has **800 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["336,000","33,600","800","420"],"answer":0},{"prompt":"Users publish **190 posts/s**, and each author has **1100 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["1100","190","20,900","209,000"],"answer":3},{"prompt":"Users publish **220 posts/s**, and each author has **700 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["220","15,400","700","154,000"],"answer":3},{"prompt":"Users publish **460 posts/s**, and each author has **3200 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["1.47 million","147,200","3200","460"],"answer":0}]
---
# Design Drill: Feed fan-out cost #30

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
