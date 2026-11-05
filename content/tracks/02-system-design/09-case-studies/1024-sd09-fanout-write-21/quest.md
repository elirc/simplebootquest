---
slug: "sd09-fanout-write-21"
title: "Design Drill: Feed fan-out cost #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **10 posts/s**, and each author has **700 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["7000","70,000","10","700"],"answer":0},{"prompt":"Users publish **260 posts/s**, and each author has **300 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["78,000","260","300","7800"],"answer":0},{"prompt":"Users publish **280 posts/s**, and each author has **4000 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["112,000","1.12 million","280","4000"],"answer":1},{"prompt":"Users publish **150 posts/s**, and each author has **900 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["135,000","150","13,500","900"],"answer":0},{"prompt":"Users publish **430 posts/s**, and each author has **3700 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["430","3700","159,100","1.59 million"],"answer":3}]
---
# Design Drill: Feed fan-out cost #21

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
