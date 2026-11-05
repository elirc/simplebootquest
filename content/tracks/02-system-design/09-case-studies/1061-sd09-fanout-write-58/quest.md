---
slug: "sd09-fanout-write-58"
title: "Design Drill: Feed fan-out cost #58"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **420 posts/s**, and each author has **4000 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["168,000","420","1.68 million","4000"],"answer":2},{"prompt":"Users publish **440 posts/s**, and each author has **2400 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["1.06 million","2400","440","105,600"],"answer":0},{"prompt":"Users publish **50 posts/s**, and each author has **1200 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["6000","60,000","1200","50"],"answer":1},{"prompt":"Users publish **240 posts/s**, and each author has **900 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["240","900","216,000","21,600"],"answer":2},{"prompt":"Users publish **240 posts/s**, and each author has **2800 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["672,000","2800","67,200","240"],"answer":0}]
---
# Design Drill: Feed fan-out cost #58

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
