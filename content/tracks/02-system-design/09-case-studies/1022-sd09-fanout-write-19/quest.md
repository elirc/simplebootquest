---
slug: "sd09-fanout-write-19"
title: "Design Drill: Feed fan-out cost #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users publish **350 posts/s**, and each author has **1800 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["630,000","63,000","1800","350"],"answer":0},{"prompt":"Users publish **310 posts/s**, and each author has **3900 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["1.21 million","310","3900","120,900"],"answer":0},{"prompt":"Users publish **320 posts/s**, and each author has **3400 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["1.09 million","320","108,800","3400"],"answer":0},{"prompt":"Users publish **440 posts/s**, and each author has **1900 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["440","836,000","83,600","1900"],"answer":1},{"prompt":"Users publish **270 posts/s**, and each author has **2900 followers** on average. With fan-out on write, how many feed inserts per second is that?","options":["78,300","783,000","270","2900"],"answer":1}]
---
# Design Drill: Feed fan-out cost #19

Fan-out **on write** copies each post into every follower's feed (cheap reads, expensive writes for big accounts). Fan-out **on read** assembles the feed when it's opened. Many systems mix both: push for normal users, pull for celebrities.
