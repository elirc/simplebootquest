---
slug: "sd09-fanout-write-7"
title: "Design Drill: Feed fan-out cost #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **50 posts/s**, and each author has **4000 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["20,000","50","4000","200,000"],"answer":3},{"prompt":"Users publish **430 posts/s**, and each author has **1800 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["1800","77,400","774,000","430"],"answer":2},{"prompt":"Users publish **400 posts/s**, and each author has **2800 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["1.12 million","400","2800","112,000"],"answer":0},{"prompt":"Users publish **470 posts/s**, and each author has **3300 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["3300","470","155,100","1.55 million"],"answer":3},{"prompt":"Users publish **150 posts/s**, and each author has **3100 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["150","46,500","3100","465,000"],"answer":3}]
---
# Design Drill: Feed fan-out cost #7

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
