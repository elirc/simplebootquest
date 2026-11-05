---
slug: "sd08-cost-46"
title: "Design Drill: Back-of-the-envelope costs #46"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **820 GB/day** of images. Egress costs **$0.06/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$17,958","$443","$49.2","$4430"],"answer":1},{"prompt":"You serve **1690 GB/day** of images. Egress costs **$0.09/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$55,517","$1370","$13,689","$152"],"answer":1},{"prompt":"You serve **1630 GB/day** of images. Egress costs **$0.06/GB**. Roughly what's the monthly egress bill?","options":["$2930","$97.8","$29,340","$35,697"],"answer":0},{"prompt":"You serve **1410 GB/day** of images. Egress costs **$0.12/GB**. Roughly what's the monthly egress bill?","options":["$169","$50,760","$5080","$61,758"],"answer":2},{"prompt":"You serve **1460 GB/day** of images. Egress costs **$0.06/GB**. Roughly what's the monthly egress bill?","options":["$31,974","$87.6","$2630","$26,280"],"answer":2}]
---
# Design Drill: Back-of-the-envelope costs #46

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.
