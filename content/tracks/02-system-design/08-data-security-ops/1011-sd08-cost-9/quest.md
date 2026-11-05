---
slug: "sd08-cost-9"
title: "Design Drill: Back-of-the-envelope costs #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **980 GB/day** of images. Egress costs **$0.12/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$1060","$118","$10,584","$42,924"],"answer":0},{"prompt":"You serve **610 GB/day** of images. Egress costs **$0.08/GB**. Roughly what's the monthly egress bill?","options":["$17,812","$14,640","$1460","$48.8"],"answer":2},{"prompt":"You serve **490 GB/day** of images. Egress costs **$0.06/GB**. Roughly what's the monthly egress bill?","options":["$29.4","$8820","$882","$10,731"],"answer":2},{"prompt":"You serve **1250 GB/day** of images. Egress costs **$0.05/GB**. Roughly what's the monthly egress bill?","options":["$1880","$62.5","$18,750","$22,813"],"answer":0},{"prompt":"You serve **360 GB/day** of images. Egress costs **$0.05/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$18","$6570","$1620","$162"],"answer":3}]
---
# Design Drill: Back-of-the-envelope costs #9

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.
