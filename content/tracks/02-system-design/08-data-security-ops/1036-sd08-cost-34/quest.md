---
slug: "sd08-cost-34"
title: "Design Drill: Back-of-the-envelope costs #34"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **670 GB/day** of images. Egress costs **$0.09/GB**. Roughly what's the monthly egress bill?","options":["$22,010","$1810","$18,090","$60.3"],"answer":1},{"prompt":"You serve **840 GB/day** of images. Egress costs **$0.08/GB**. Roughly what's the monthly egress bill?","options":["$67.2","$24,528","$2020","$20,160"],"answer":2},{"prompt":"You serve **1650 GB/day** of images. Egress costs **$0.08/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$48,180","$132","$1190","$11,880"],"answer":2},{"prompt":"You serve **410 GB/day** of images. Egress costs **$0.12/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$4430","$17,958","$49.2","$443"],"answer":3},{"prompt":"You serve **830 GB/day** of images. Egress costs **$0.09/GB**. Roughly what's the monthly egress bill?","options":["$22,410","$27,266","$74.7","$2240"],"answer":3}]
---
# Design Drill: Back-of-the-envelope costs #34

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.
