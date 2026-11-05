---
slug: "sd08-cost-40"
title: "Design Drill: Back-of-the-envelope costs #40"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **590 GB/day** of images. Egress costs **$0.09/GB**. Roughly what's the monthly egress bill?","options":["$1590","$53.1","$19,382","$15,930"],"answer":0},{"prompt":"You serve **250 GB/day** of images. Egress costs **$0.09/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$8210","$2030","$203","$22.5"],"answer":2},{"prompt":"You serve **700 GB/day** of images. Egress costs **$0.08/GB**. Roughly what's the monthly egress bill?","options":["$1680","$16,800","$20,440","$56"],"answer":0},{"prompt":"You serve **1590 GB/day** of images. Egress costs **$0.12/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$69,642","$1720","$17,172","$191"],"answer":1},{"prompt":"You serve **460 GB/day** of images. Egress costs **$0.09/GB**. Roughly what's the monthly egress bill?","options":["$1240","$15,111","$12,420","$41.4"],"answer":0}]
---
# Design Drill: Back-of-the-envelope costs #40

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.
