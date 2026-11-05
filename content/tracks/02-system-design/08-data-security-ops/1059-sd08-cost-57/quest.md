---
slug: "sd08-cost-57"
title: "Design Drill: Back-of-the-envelope costs #57"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **1380 GB/day** of images. Egress costs **$0.08/GB**. Roughly what's the monthly egress bill?","options":["$110","$3310","$33,120","$40,296"],"answer":1},{"prompt":"You serve **730 GB/day** of images. Egress costs **$0.05/GB**. Roughly what's the monthly egress bill?","options":["$13,323","$36.5","$1100","$10,950"],"answer":2},{"prompt":"You serve **420 GB/day** of images. Egress costs **$0.06/GB**. Roughly what's the monthly egress bill?","options":["$7560","$756","$9200","$25.2"],"answer":1},{"prompt":"You serve **1550 GB/day** of images. Egress costs **$0.12/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$186","$1670","$16,740","$67,890"],"answer":1},{"prompt":"You serve **1120 GB/day** of images. Egress costs **$0.12/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$134","$12,096","$49,056","$1210"],"answer":3}]
---
# Design Drill: Back-of-the-envelope costs #57

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.
