---
slug: "sd08-cost-33"
title: "Design Drill: Back-of-the-envelope costs #33"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **640 GB/day** of images. Egress costs **$0.05/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$288","$32","$11,680","$2880"],"answer":0},{"prompt":"You serve **410 GB/day** of images. Egress costs **$0.08/GB**. Roughly what's the monthly egress bill?","options":["$32.8","$984","$9840","$11,972"],"answer":1},{"prompt":"You serve **280 GB/day** of images. Egress costs **$0.09/GB**. Roughly what's the monthly egress bill?","options":["$7560","$9200","$25.2","$756"],"answer":3},{"prompt":"You serve **1150 GB/day** of images. Egress costs **$0.05/GB**. Roughly what's the monthly egress bill?","options":["$17,250","$20,988","$1730","$57.5"],"answer":2},{"prompt":"You serve **460 GB/day** of images. Egress costs **$0.08/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$36.8","$13,432","$3310","$331"],"answer":3}]
---
# Design Drill: Back-of-the-envelope costs #33

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.
