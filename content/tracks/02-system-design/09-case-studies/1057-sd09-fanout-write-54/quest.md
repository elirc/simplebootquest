---
slug: "sd09-fanout-write-54"
title: "Design Drill: Feed fan-out cost #54"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **30 posts/s**, and each author has **3800 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["3800","11,400","114,000","30"],"answer":2},{"prompt":"Users publish **100 posts/s**, and each author has **1000 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["100","10,000","100,000","1000"],"answer":2},{"prompt":"Users publish **450 posts/s**, and each author has **2300 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["103,500","450","2300","1.03 million"],"answer":3},{"prompt":"Users publish **100 posts/s**, and each author has **2700 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["270,000","27,000","2700","100"],"answer":0},{"prompt":"Users publish **360 posts/s**, and each author has **2600 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["2600","93,600","936,000","360"],"answer":2}]
---
# Design Drill: Feed fan-out cost #54

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
