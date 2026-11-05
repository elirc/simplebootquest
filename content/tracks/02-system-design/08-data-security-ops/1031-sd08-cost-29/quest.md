---
slug: "sd08-cost-29"
title: "Design Drill: Back-of-the-envelope costs #29"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **990 GB/day** of images. Egress costs **$0.12/GB**. Roughly what's the monthly egress bill?","options":["$35,640","$3560","$119","$43,362"],"answer":1},{"prompt":"You serve **440 GB/day** of images. Egress costs **$0.09/GB**. Roughly what's the monthly egress bill?","options":["$39.6","$14,454","$1190","$11,880"],"answer":2},{"prompt":"You serve **1100 GB/day** of images. Egress costs **$0.12/GB**. Roughly what's the monthly egress bill?","options":["$39,600","$48,180","$132","$3960"],"answer":3},{"prompt":"You serve **1620 GB/day** of images. Egress costs **$0.08/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$1170","$11,664","$130","$47,304"],"answer":0},{"prompt":"You serve **1770 GB/day** of images. Egress costs **$0.12/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$77,526","$1910","$212","$19,116"],"answer":1}]
---
# Design Drill: Back-of-the-envelope costs #29

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.
