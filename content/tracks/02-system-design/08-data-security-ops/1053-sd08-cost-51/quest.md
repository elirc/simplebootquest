---
slug: "sd08-cost-51"
title: "Design Drill: Back-of-the-envelope costs #51"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **1980 GB/day** of images. Egress costs **$0.12/GB**. Roughly what's the monthly egress bill?","options":["$238","$7130","$71,280","$86,724"],"answer":1},{"prompt":"You serve **1370 GB/day** of images. Egress costs **$0.08/GB**. Roughly what's the monthly egress bill?","options":["$110","$32,880","$40,004","$3290"],"answer":3},{"prompt":"You serve **820 GB/day** of images. Egress costs **$0.09/GB**. Roughly what's the monthly egress bill?","options":["$22,140","$26,937","$2210","$73.8"],"answer":2},{"prompt":"You serve **260 GB/day** of images. Egress costs **$0.12/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$281","$11,388","$31.2","$2810"],"answer":0},{"prompt":"You serve **1360 GB/day** of images. Egress costs **$0.08/GB**. Roughly what's the monthly egress bill?","options":["$3260","$109","$32,640","$39,712"],"answer":0}]
---
# Design Drill: Back-of-the-envelope costs #51

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.
